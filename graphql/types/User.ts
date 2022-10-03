import { objectType } from "nexus";
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
          .favorites();
      },
    });
  },
});
