import {Router} from 'express'
import { PurchasesController } from '../app/controllers/PurchasesController'

const purchasesRouter = Router()

purchasesRouter.post('/purchases', new PurchasesController().store)

export default purchasesRouter