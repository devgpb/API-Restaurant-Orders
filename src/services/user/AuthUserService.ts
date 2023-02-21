import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest{
    email: string,
    password: string
}



class AuthUserService{
    async execute({ email,password }: AuthRequest){
        console.log(email)
        //Verificar se email existe no db
        const user = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        });

        if(!user){
            throw new Error("User/Password not Incorrect");
        }

        //Veririficar se dá match a senha
        const passwordMatch = await compare(password,user.password);

        if(!passwordMatch){
            throw new Error("User/Password not Incorrect");
        }

        //Criar JWT
        const token = sign(
            {
            name:user.name,
            email:user.email
            },
            process.env.JWT_SECRET,
            {
                subject: user.id,
                expiresIn:'30d'
            }
        )


        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        }
    }
}


export { AuthUserService }