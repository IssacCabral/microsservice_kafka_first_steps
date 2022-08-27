import {Router} from 'express'
import { StudentsController } from '../app/controllers/StudentsController'

const studentsRouter = Router()

studentsRouter.post('/students', new StudentsController().store)

export default studentsRouter