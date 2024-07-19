import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { questionarioRoutes } from "./routes/questionario";

const app = fastify();
const prisma = new PrismaClient();

app.register(questionarioRoutes)

app.get('/users', async ()=>{

    const users = await prisma.user.findMany()

    return users
})

app.listen({
    port: 3333,
}).then(() => {
    console.log('http://localhost:3333');
})