//     import {PrismaClient }from"@prisma/client";

// const prisma =newPrismaClient();

// asyncfunctionmain() {
// 	await prisma.user.createMany({
// 		data: [
//       {
// 				email:"admin@example.com",
// 				username:"admin",
// 				password:"hashed_password",
// 				role:"admin"
//       },
//      {
// 				email:"user@example.com",
// 				username:"user",
// 				password:"hashed_password",
// 				role:"user"
//       }
//     ]
//   });
// }

// main()
//   .catch(e =>console.error(e))
//   .finally(() => prisma.$disconnect());