import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "Linda Belcher",
      email: "linda@bobsburger.com",
    },
  });

  await prisma.category.createMany({
    data: [
      { name: "Beer" },
      { name: "Cider" },
      { name: "Wine" },
      { name: "Coolers" },
    ],
  });

  await prisma.subCategory.createMany({
    data: [
      { name: "Lager", categoryId: 1 },
      { name: "Ale", categoryId: 1 },
      { name: "Radler", categoryId: 1 },
      { name: "Red Wine", categoryId: 3 },
      { name: "White Wine", categoryId: 3 },
      { name: "Rose Wine", categoryId: 3 },
      { name: "Seltzer", categoryId: 4 },
      { name: "Cocktail", categoryId: 4 },
      { name: "Iced Tea", categoryId: 4 },
      { name: "Caesars", categoryId: 4 },
    ],
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Cowbell Brewing Co. Light & Dark Oatmeal Vanilla Lager",
        image:
          "https://aem.lcbo.com/content/dam/lcbo/products/0/2/7/3/027376.jpg.thumb.1280.1280.jpg",
        price: 3.95,
        volume: 473,
        volumeUom: "ml can",
        description: "A delicious beer",
        alcohol: 5.5,
        madeIn: "Ontario, Canada",
        brand: "Cowbell Brewing Co.",
        categoryId: 1,
        subCategoryId: 1,
      },
      {
        name: "Publican House Our Pet Pilsner",
        image:
          "https://aem.lcbo.com/content/dam/lcbo/products/0/3/0/0/030004.jpg.thumb.1280.1280.jpg",
        price: 3.45,
        volume: 473,
        volumeUom: "ml can",
        description:
          "Have you always wanted to help animals by drinking beer? Well, now you can! Peterborough's Publican House teamed up with the local Humane Society to create Our Pet Project. Proceeds from this crisp German-style pilsner support the campaign to build the new Peterborough Animal Care Centre. Goes great with a belly-rub.",
        alcohol: 5.0,
        madeIn: "Ontario, Canada",
        brand: "Publican House",
        categoryId: 1,
        subCategoryId: 1,
      },
      {
        name: "Muskoka Big World Small Batch - Germany",
        image:
          "https://aem.lcbo.com/content/dam/lcbo/products/0/2/8/0/028089.jpg.thumb.1280.1280.jpg",
        price: 3.95,
        volume: 473,
        volumeUom: "ml can",
        description:
          "The next in Muskoka's Big World Small Batch collaborative series, this one with Germany's Orca Brau in Bavaria. Pale gold colour, with fresh bread dough aromas and light toasty notes. Soft grainy sweetness on the palate, balanced by herbal and spicy notes and a crisp finish. Perfect with Schnitzel or Bratwursts.",
        alcohol: 5.0,
        madeIn: "Ontario, Canada",
        brand: "Muskoka",
        categoryId: 1,
        subCategoryId: 1,
      },
      {
        name: "Collective Arts Ransack The Universe IPA",
        image:
          "https://aem.lcbo.com/content/dam/lcbo/products/4/5/0/3/450312.jpg.thumb.1280.1280.jpg",
        price: 3.65,
        volume: 473,
        volumeUom: "ml can",
        description:
          "The hemisphere note refers to the use of Galaxy hops from Myrtleford, Victoria in Australia and Mosaic hops from Yakima, Washington, USA. These impart tropical aromas and flavours; the palate is lightly malted yet refreshing and finishes crisp but flavourful.",
        categoryId: 1,
        subCategoryId: 2,
      },
      {
        name: "Great Lakes Brewery Octopus Wants To Fight IPA",
        image:
          "https://aem.lcbo.com/content/dam/lcbo/products/4/5/8/2/458273.jpg.thumb.1280.1280.jpg",
        price: 3.45,
        volume: 473,
        volumeUom: "ml can",
        description:
          "Great Lakes Brewery is known for their Tank Ten limited release beers. Octopus Wants To Fight IPA is expressive, with floral, tropical fruit, evergreen and herbal notes dominating the nose. Creamy, frothy and citrusy on the palate; intense flavours of savoury herb, grapefruit and pine resin inspire creative food pairing.",
        categoryId: 1,
        subCategoryId: 2,
      },
      {
        name: "Strongbow Cider",
        image:
          "https://aem.lcbo.com/content/dam/lcbo/products/5/6/0/5/560532.jpg.thumb.1280.1280.jpg",
        price: 3.35,
        volume: 500,
        volumeUom: "ml can",
        description:
          "Clear gold in colour with a thin head; aromas of apple, brown sugar and cinnamon on the nose. The palate is light with lively carbonation and subtle sweetness followed by a short and crisp finish.",
        alcohol: 5.3,
        madeIn: "United Kingdom",
        brand: "Strongbow",
        categoryId: 2,
      },
      {
        name: "Duntroon Cider House Empire Extra Dry Cider",
        image:
          "https://aem.lcbo.com/content/dam/lcbo/products/0/1/9/9/019974.jpg.thumb.1280.1280.jpg",
        price: 3.95,
        volume: 473,
        volumeUom: "ml can",
        description:
          "Duntroon Cyder House produces traditional English ciders using only hand-picked heritage apples and prefers the old English spelling of 'cyder'. This cloudy farm-style cider is infused with rhubarb and has fresh aromas of ripe red apples and citrus zest. The gently sweet finish and rich texture pair well with Chef's Salad.",
        alcohol: 5.5,
        madeIn: "Ontario, Canada",
        brand: "Duntroon",
        categoryId: 2,
      },
      {
        name: "Nutrl Vodka Soda Grapefruit",
        image:
          "https://aem.lcbo.com/content/dam/lcbo/products/6/6/6/0/666032.jpg.thumb.1280.1280.jpg",
        price: 3.1,
        volume: 473,
        volumeUom: "ml can",
        description:
          "Clean and on trend, this vodka soda starts out with smooth premium craft vodka, adds soda water, natural grapefruit flavour and...nothing else! Refreshing notes of ruby grapefruit carried by light carbonation meet a clean finish. Enjoy with veggies and dip; serve in a Collins glass full of ice with a citrus spiral garnish.",
        alcohol: 5,
        madeIn: "Ontario, Canada",
        brand: "Nutrl",
        categoryId: 4,
        subCategoryId: 7,
      },
    ],
  });

  await prisma.favorite.createMany({
    data: [
      { userId: 1, productId: 1 },
      { userId: 1, productId: 6 },
      { userId: 1, productId: 7 },
      { userId: 1, productId: 8 },
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
