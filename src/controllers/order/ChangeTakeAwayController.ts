import { Request, Response } from "express";
import { ChangeTakeAwayService } from "../../services/order/ChangeTakeAwayService";


class ChangeTakeAwayController{
    async handle(req:Request,res:Response){
        const { order_id,value } = req.body;
        const createTakeAwayService = new ChangeTakeAwayService();

        const order = await createTakeAwayService.execute({
            order_id,
            value
        })

        return res.json(order)
    }
}

export { ChangeTakeAwayController }