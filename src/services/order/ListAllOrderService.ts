import prismaClient from "../../prisma";


class ListAllOrderService{
    async execute(){
        const productList = await prismaClient.order.findMany({
            orderBy:{
                created_at:'desc'
            }
        })

        return productList
    }
}


export { ListAllOrderService }