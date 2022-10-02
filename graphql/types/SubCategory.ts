import { extendType, objectType } from "nexus";

export const SubCategory = objectType({
  name: "SubCategory",
  definition(t) {
    t.string("id");
    t.string("name");
  },
});

export const SubCategoriesQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("subcategories", {
      type: "SubCategory",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.subCategory.findMany();
      },
    });
  },
});
