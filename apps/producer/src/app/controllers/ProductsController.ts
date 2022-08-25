import {Request, Response} from 'express'
import dataSource from '../../database/data-source'
import { Product } from '../models/Product'

export class ProductsController{
    async store(request: Request, response: Response){
        const {title} = request.body
        const productRepository = dataSource.getRepository(Product)

        try{
            if(await productRepository.findOne({where: {title}})) throw new Error('product already exists') 

            const product = productRepository.create({title})

            await productRepository.save(product)

            return response.status(201).json(product)
        } catch(error){
            return response.status(400).json({error: error.message})
        }
    }
}