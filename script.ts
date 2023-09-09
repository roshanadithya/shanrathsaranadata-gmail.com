import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
    const users = await prisma.user.findMany()
   // const user = await prisma.user.create({data: { name: "Adithya"}})
    //console.log(user)
    console.log(users)
}

main()
    .catch(e => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })