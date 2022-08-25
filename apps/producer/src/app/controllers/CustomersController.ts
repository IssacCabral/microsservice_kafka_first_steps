import {Request, Response} from 'express'
import dataSource from '../../database/data-source'
import { Customer } from '../models/Customer'

export class CustomersController{
    async store(request: Request, response: Response){
        const {name, email} = request.body
        const customerRepository = dataSource.getRepository(Customer)

        try{
            if(await customerRepository.findOne({where: {email}})) throw new Error('customer already exists') 

            const customer = customerRepository.create({name, email})

            await customerRepository.save(customer)

            return response.status(201).json(customer)
        } catch(error){
            return response.status(400).json({error: error.message})
        }
    }
}