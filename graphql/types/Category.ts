import { extendType, objectType } from "nexus";

export const Category = objectType({
  name: "Category",
  definition(t) {
    t.string("id");
    t.string("name");
  },
});

export const CategoriesQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("categories", {
      type: "Category",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.category.findMany();
      },
    });
  },
});
