import { extendType, objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.int("id");
    t.string("email");
    t.string("name");
    t.string("createdAt");
    t.string("updatedAt");
    t.list.field("favoriteProducts", { type: "Favorite" });
    t.list.field("wishlistProducts", { type: "Wishlist" });
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
          include: {
            favoriteProducts: {
              include: {
                product: true,
              },
            },
            wishlistProducts: {
              include: {
                product: true,
              },
            },
          },
        });
      },
    });
  },
});
