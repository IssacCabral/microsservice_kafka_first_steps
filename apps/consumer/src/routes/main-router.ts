import {Router} from 'express'

import coursesRouter from './course-routes'

const mainRouter = Router()

export default mainRouter 
                .use(coursesRouter)
