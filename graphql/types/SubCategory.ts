import { extendType, objectType } from "nexus";

export const SubCategory = objectType({
  name: "SubCategory",
  definition(t) {
    t.string("id");
    t.string("name");
  },
});

export const getAllSubCategories = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("subCategories", {
      type: "SubCategory",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.subCategory.findMany();
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
