import prismaClient from "../../prisma";

interface Request{
    order_id:string;
    value: boolean;
}

class ChangeTakeAwayService{
    async execute({ order_id, value}:Request){
        const order = await prismaClient.order.update({
            where:{
                id:order_id,
            },
            data:{
                takeaway:value
            }     
        })

        return order;
    }
}

export {ChangeTakeAwayService}