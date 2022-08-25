import {Router} from 'express'
import { CustomersController } from '../app/controllers/CustomersController'

const customersRouter = Router()

customersRouter.post('/customers', new CustomersController().store)

export default customersRouter