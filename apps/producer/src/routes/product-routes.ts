import {Router} from 'express'
import { ProductsController } from '../app/controllers/ProductsController'

const productsRouter = Router()

productsRouter.post('/products', new ProductsController().store)

export default productsRouter