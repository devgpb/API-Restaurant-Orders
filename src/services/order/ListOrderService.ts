import prismaClient from "../../prisma";


class ListOrderService{
    async execute(){
        const productList = await prismaClient.order.findMany({
            where:{
                draft: false,
                status: false   
            },
            orderBy:{
                created_at:'desc'
            }
        })

        return productList
    }
}


export { ListOrderService }