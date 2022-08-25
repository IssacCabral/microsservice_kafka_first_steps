import {Router} from 'express'

import customersRouter from './customer-routes'
import productsRouter from './product-routes'
import purchasesRouter from './purchase-routes'

const mainRouter = Router()

export default mainRouter
                    .use(customersRouter)
                    .use(productsRouter)
                    .use(purchasesRouter)
