import {Router} from 'express'

import coursesRouter from './course-routes'
import enrollmentsRouter from './enrollment-routes'
import studentsRouter from './student-routes'

const mainRouter = Router()

export default mainRouter 
                .use(coursesRouter)
                .use(enrollmentsRouter)
                .use(studentsRouter)
