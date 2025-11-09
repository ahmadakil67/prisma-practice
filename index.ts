import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function main() {
//   const result = await prisma.user.create({
//       data:{
//           name: "Ahmad Akil",
//           email: "ahmad@example.com"
//       }
//   })

//   const result = await prisma.user.findMany()

  // const result = await prisma.user.findMany({
  //     where:{
  //         id: 1
  //     }
  // })

  //   const result = await prisma.user.findUnique({
  //     where: {
  //       id: 1,
  //     },
  //   });

//   const result = await prisma.user.findUniqueOrThrow({
//     where: {
//       id: 3,
//     },
//   });


// const result = await prisma.user.update({
//     where:{
//         id: 2
//     },
//     data:{
//         name: "Md. Solim Uddin"
//     }
// })

// const result = await prisma.user.updateMany({
//     where:{
//         name: "Ahmad Akil"
//     },
//     data:{
//         name: "Akil Ahmad"
//     }
// })

// const result = await prisma.user.delete({
//     where: {
//         id: 3
//     }
// })


// const result = await prisma.user.createMany({
//     data: [
//         {
//             name: "Kolim Uddin",
//             email: "kolim@example.com"
//         },
//         {
//             name: "Salim Uddin",
//             email: "salim@example.com"
//         },
//         {
//             name: "Karim Uddin",
//             email: "karim@example.com"
//         },
//         {
//             name: "Rahim Uddin",
//             email: "rahim@example.com"
//         },
//         {
//             name: "Harun Uddin",
//             email: "harun@example.com"
//         }
//     ]
// })

// const result = await prisma.user.findMany({
//     orderBy:{
//         name: 'asc'
//     }
// })

// const result = await prisma.user.findMany({
//     where: {
//         name: {
//             contains: "ak",
//             mode: "insensitive"
//         }
//     }
// })

const result = await prisma.user.count();

  console.log(result);
}

main();
