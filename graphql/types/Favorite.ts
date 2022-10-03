import { extendType, objectType } from "nexus";

export const Favorite = objectType({
  name: "Favorite",
  definition(t) {
    t.field("user", { type: "User" });
    t.int("userId");
    t.field("product", { type: "Product" });
    t.int("productId");
  },
});

export const getAllFavorites = extendType({
  type: "Query",
  definition(t) {
    t.list.field("favorites", {
      type: "Favorite",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.favorite.findMany({
          include: {
            user: true,
            product: true,
          },
        });
      },
    });
  },
});

export const getFavoritesByUserId = extendType({
  type: "Query",
  definition(t) {
    t.list.field("favoritesByUserId", {
      type: "Favorite",
      args: { userId: "Int" },
      resolve(_parent, args, ctx) {
        return ctx.prisma.favorite.findMany({
          where: {
            userId: args.userId,
          },
          include: {
            user: true,
            product: true,
          },
        });
      },
    });
  },
});
