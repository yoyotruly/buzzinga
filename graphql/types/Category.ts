import { extendType, objectType } from "nexus";

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.int("id");
    t.string("name");
    t.list.field("subCategories", { type: "SubCategory" });
    t.list.field("products", { type: "Product" });
  },
});

export const getAllCategoriesQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("categories", {
      type: "Category",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.category.findMany({
          include: {
            subCategories: true,
            products: true,
          },
        });
      },
    });
  },
});
