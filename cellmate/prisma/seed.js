const { PrismaClient } = require("@prisma/client");
const { users } = require("./data.js");
const prisma = new PrismaClient();

console.log("seeding");

async function main() {
  await prisma.user.deleteMany();
  console.log("Deleted records in user table");

  // await prisma.$queryRawUnsafe`TRUNCATE "User" RESTART IDENTITY CASCADE`;
  await prisma.$queryRawUnsafe`ALTER SEQUENCE "User_id_seq" RESTART WITH 1`;
  console.log("reset category auto increment to 1");

  console.log(users);

  await prisma.user.createMany({
    data: users,
  });
  console.log("Added user data");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
