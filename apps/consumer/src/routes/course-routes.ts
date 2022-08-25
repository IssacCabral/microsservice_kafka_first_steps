import {Router} from 'express'
import { CoursesController } from '../app/controllers/CoursesController'

const coursesRouter = Router()

coursesRouter.post('/courses', new CoursesController().store)

export default coursesRouter