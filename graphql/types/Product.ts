import { extendType, objectType } from "nexus";

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("description");
    t.string("image");
    t.float("price");
  },
});

export const ProductsQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("products", {
      type: "Product",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.product.findMany();
      },
    });
  },
});
