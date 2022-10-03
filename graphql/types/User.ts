import { extendType, objectType } from "nexus";
import { Product } from "./Product";

export const User = objectType({
  name: "User",
  definition(t) {
    t.int("id");
    t.string("email");
    t.string("name");
    t.string("createdAt");
    t.string("updatedAt");
    t.list.field("favorites", {
      type: Product,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: parent.id,
            },
          })
          .favoriteProducts();
      },
    });
  },
});

export const getCurrentUser = extendType({
  type: "Query",
  definition(t) {
    t.field("currentUser", {
      type: "User",
      args: { id: "Int" },
      resolve(_parent, args, ctx) {
        return ctx.prisma.user.findUnique({
          where: {
            id: args.id,
          },
        });
      },
    });
  },
});
