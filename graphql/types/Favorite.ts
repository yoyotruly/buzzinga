import { extendType, objectType } from "nexus";

export const Favorite = objectType({
  name: "Favorite",
  definition(t) {
    t.int("id");
    t.string("user");
    t.int("userId");
    t.string("product");
    t.int("productId");
    t.boolean("wishlist");
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
            product: {
              select: {
                // id: true,
                name: true,
                // image: true,
              },
            },
          },
        });
      },
    });
  },
});
