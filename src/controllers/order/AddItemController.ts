import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService"

class AddItemController{
    async handle(req:Request,res:Response){
        const { order_id, product_id, amount }  = req.body;

        const addService = new AddItemService();

        const add = await addService.execute({
            order_id,
            product_id,
            amount
        });

        return res.json(add);
    }
}

export { AddItemController }