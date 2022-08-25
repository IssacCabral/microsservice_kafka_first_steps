import { Request, Response } from 'express'
import dataSource from '../../database/data-source'
import { Customer } from '../models/Customer'
import { Product } from '../models/Product'

interface RequestAlreadyContains {
    product_ids: Array<number>,
    customer_id: number
}

async function verify_If_Customer_Already_Contains_Product({ product_ids, customer_id }: RequestAlreadyContains){
    const customerRepository = dataSource.getRepository(Customer)
    const customer = await customerRepository.findOne({ where: { id: customer_id }, relations: { products: true } })

    let aux = []

    customer.products.forEach((product) => {
        let result = product_ids.includes(product.id)
        if(result) aux.push(product)
    })
    
    return aux.length > 0 ? aux : false
}

export class PurchasesController {
    async store(request: Request, response: Response) {
        const { customer_id, product_ids } = request.body

        const products: Array<Product> = []
        const customerRepository = dataSource.getRepository(Customer)
        const productRepository = dataSource.getRepository(Product)

        try {
            const customer = await customerRepository.findOne({ where: { id: customer_id } })

            if (!customer) throw new Error('customer does not exists')

            const result = await verify_If_Customer_Already_Contains_Product({ product_ids, customer_id })
            if(result) return response.status(400).json({message: 'Produtos já existentes', produtosExistentes: result})

            for (let i = 0; i < product_ids.length; i++) {
                const product = await productRepository.findOne({ where: { id: product_ids[i] } })

                if (!product) throw new Error('product does not exists')
                products.push(product)
            }

            customer.products = products

            await customerRepository.save(customer)

            const customerCreated = await customerRepository.find({ where: { id: customer_id }, relations: { products: true } })

            return response.status(201).json({ customerCreated })
        } catch (error) {
            return response.status(400).json({ error: error, message: error.message })
        }
    }
}