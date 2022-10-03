import { extendType, objectType } from "nexus";

export const Wishlist = objectType({
  name: "Wishlist",
  definition(t) {
    t.field("user", { type: "User" });
    t.int("userId");
    t.field("product", { type: "Product" });
    t.int("productId");
  },
});

export const getAllWishlists = extendType({
  type: "Query",
  definition(t) {
    t.list.field("wishlists", {
      type: "Wishlist",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.wishlist.findMany({
          include: {
            user: true,
            product: true,
          },
        });
      },
    });
  },
});

export const getWishlistByUserId = extendType({
  type: "Query",
  definition(t) {
    t.list.field("wishlistByUserId", {
      type: "Wishlist",
      args: { userId: "Int" },
      resolve(_parent, args, ctx) {
        return ctx.prisma.wishlist.findMany({
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
