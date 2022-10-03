import { extendType, objectType } from "nexus";

export const SubCategory = objectType({
  name: "SubCategory",
  definition(t) {
    t.int("id");
    t.string("name");
    t.field("category", { type: "Category" });
    t.int("categoryId");
    t.list.field("products", { type: "Product" });
  },
});

export const getAllSubCategories = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("subCategories", {
      type: "SubCategory",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.subCategory.findMany({
          include: {
            products: true,
          },
        });
      },
    });
  },
});

export const getSubCategoriesByCategoryId = extendType({
  type: "Query",
  definition(t) {
    t.list.field("subCategoriesByCategoryId", {
      type: "SubCategory",
      args: { categoryId: "Int" },
      resolve(_parent, args, ctx) {
        return ctx.prisma.subCategory.findMany({
          where: {
            categoryId: args.categoryId,
          },
        });
      },
    });
  },
});
