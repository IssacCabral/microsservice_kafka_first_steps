import { Router } from "express";
import {EnrollmentsController} from '../app/controllers/EnrollmentsController'

const enrollmentsRouter = Router()

enrollmentsRouter.post('/enrollments', new EnrollmentsController().store)

export default enrollmentsRouter