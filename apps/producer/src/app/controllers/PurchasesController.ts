import {Request, Response} from 'express'
import dataSource from '../../database/data-source'
import { Customer } from '../models/Customer'
import { Product } from '../models/Product'

export class PurchasesController{
    async store(request: Request, response: Response){
        const {customer_id, product_id} = request.body
        
        const customerRepository = dataSource.getRepository(Customer)
        const productRepository = dataSource.getRepository(Product)

        try{
            const customer = await customerRepository.findOne({where: {id: customer_id}})
            const product = await productRepository.findOne({where: {id: product_id}})

            if(!customer) throw new Error('customer does not exists')
            if(!product) throw new Error('product does not exists') 

            customer.products = [product]

            await customerRepository.save(customer)

            const customerCreated = await customerRepository.find({where: {id: customer_id}, relations: {products: true}})

            return response.status(201).json({customerCreated})
        } catch(error){
            return response.status(400).json({error: error, message: error.message})
        }
    }
}