import {Request, Response} from 'express'
import dataSource from '../../database/data-source'
import { Course } from '../models/Course'

export class CoursesController{
    async store(request: Request, response: Response){
        const {title} = request.body
        const courseRepository = dataSource.getRepository(Course)

        try{
            if(await courseRepository.findOne({where: {title}})) throw new Error('course already exists') 

            const course = courseRepository.create({title})

            await courseRepository.save(course)

            return response.status(201).json(course)
        } catch(error){
            return response.status(400).json({error: error.message})
        }
    }
}