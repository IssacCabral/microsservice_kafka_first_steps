import {Request, Response} from 'express'
import dataSource from '../../database/data-source'
import { Student } from '../models/Student'

export class StudentsController{
    async store(request: Request, response: Response){
        const {name, email} = request.body
        const studentRepository = dataSource.getRepository(Student)

        try{
            if(await studentRepository.findOne({where: {email}})) throw new Error('student already exists') 

            const student = studentRepository.create({name, email})

            await studentRepository.save(student)

            return response.status(201).json(student)
        } catch(error){
            return response.status(400).json({error: error.message})
        }
    }
}