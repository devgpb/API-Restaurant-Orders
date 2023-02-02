import { Request,Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService";

class ListOrderController{
    async handle(req:Request,res:Response){
        const listService = new ListOrderService();

        const list = await listService.execute();

        return res.json(list);
    }
}


export { ListOrderController }