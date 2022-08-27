import { Request, Response } from 'express'
import dataSource from '../../database/data-source'
import { Student } from '../models/Student'
import { Course } from '../models/Course'


export class EnrollmentsController {
    async store(request: Request, response: Response) {
        const { student_id, course_id } = request.body

        const studentRepository = dataSource.getRepository(Student)
        const courseRepository = dataSource.getRepository(Course)

        try {
            const student = await studentRepository.findOne({ where: { id: student_id }, relations: {courses: true} })
            const course = await courseRepository.findOne({where: {id: course_id}}) 

            if (!student) throw new Error('student does not exists')
            if(!course) throw new Error('course does not exists')

            student.courses.forEach(row => {
                if(row.id === course_id) throw new Error('you already purchased this course')
            })
                                        
            student.courses.push(course)

            await studentRepository.save(student)

            const studentCreated = await studentRepository.find({ where: { id: student_id }, relations: { courses: true } })

            return response.status(201).json({ studentCreated })
        } catch (error) {
            return response.status(400).json({ error: error, message: error.message })
        }
    }
}