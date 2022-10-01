import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Bob Belcher",
      email: "bob@bobsburger.com",
    },
  });

  await prisma.category.createMany({
    data: [{ name: "beer" }, { name: "wine" }, { name: "cider" }],
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Coors Light",
        price: 3.5,
        description: "A delicious beer",
        categoryId: 1,
      },
      {
        name: "Strongbow Cider",
        price: 3.5,
        description: "A delicious cider",
        categoryId: 3,
      },
      {
        name: "Pinot Grigio",
        price: 13.5,
        description: "A delicious wine",
        categoryId: 2,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
