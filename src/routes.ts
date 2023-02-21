//Sistema de rotas
import {Router, Request, Response} from 'express';
import multer from 'multer';
//Controllers

// User Controllers
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController }  from './controllers/user/AuthUserController';
import { DetailUserController } from "./controllers/user/DetailUserController";
// Category Controllers
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
// Products Controllers
import { CreateProductController } from './controllers/products/CreateProductsController';
import { ListByCategoryController } from './controllers/products/ListByCategoryController';
import { ListAllProductsController } from './controllers/products/ListAllProductsController';
// Order Controllers
import { CreateOrderController } from './controllers/order/CreateOrderController';
import { RemoveOrderController } from './controllers/order/RemoveOrderController';
import { ListOrderController } from './controllers/order/ListOrderController';
import { ListAllOrderController } from './controllers/order/ListAllOrderController';
import { AddItemController } from './controllers/order/AddItemController';
import { RemoveItemController } from './controllers/order/RemoveItemController';
import { SendOrderController } from './controllers/order/SendOrderController';
import { DetailOrderController } from './controllers/order/DetailOrderController';
import { FinishOrderController } from './controllers/order/FinishOrderController';
import { ChangeTakeAwayController } from './controllers/order/ChangeTakeAwayController';



//Middlewares
import { isAuthenticated } from'./middlewares/isAuthenticated';

//File System
import uploadConfig from './config/multer';

const router = Router();
const upload = multer(uploadConfig.upload("./tmp"));


// Rotas User
router.post('/users',new CreateUserController().handle)
router.post('/session',new AuthUserController().handle)
router.get('/me',isAuthenticated, new DetailUserController().handle)
// Rotas Category
router.post('/category',isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)
// Rotas Products
router.post('/product',isAuthenticated, upload.single('file') , new CreateProductController().handle)
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle )
router.get('/product/all',isAuthenticated, new ListAllProductsController().handle)
// Rotas Order
router.post('/order',isAuthenticated, new CreateOrderController().handle)
router.delete('/order',isAuthenticated, new RemoveOrderController().handle)
router.get('/order/list',isAuthenticated, new ListOrderController().handle)
router.get('/order/list/all',isAuthenticated, new ListAllOrderController().handle)
router.post('/order/add',isAuthenticated, new AddItemController().handle)
router.post('/order/takeaway',isAuthenticated, new ChangeTakeAwayController().handle)
router.delete('/order/remove',isAuthenticated, new RemoveItemController().handle)
router.put('/order/send',isAuthenticated, new SendOrderController().handle)
router.get('/order/detail',isAuthenticated, new DetailOrderController().handle)
router.put('/order/finish',isAuthenticated, new FinishOrderController().handle)


export {router}