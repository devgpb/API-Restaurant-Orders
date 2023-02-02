import { Request,Response } from "express";
import { ListAllOrderService } from "../../services/order/ListAllOrderService";

class ListAllOrderController{
    async handle(req:Request,res:Response){
        const listService = new ListAllOrderService();

        const list = await listService.execute();

        return res.json(list);
    }
}


export { ListAllOrderController }