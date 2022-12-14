import { extendType, objectType } from "nexus";

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.int("id");
    t.string("name");
    t.string("image");
    t.float("price");
    t.int("volume");
    t.string("volumeUom");
    t.string("description");
    t.float("alcohol");
    t.string("madeIn");
    t.string("by");
    t.string("category");
    t.int("categoryId");
    t.string("subCategory");
    t.int("subCategoryId");
    t.list.field("favoriteUsers", { type: "Favorite" });
    t.list.field("wishlistUsers", { type: "Wishlist" });
  },
});

export const Edge = objectType({
  name: "Edge",
  definition(t) {
    t.string("cursor");
    t.field("node", { type: "Product" });
  },
});

export const PageInfo = objectType({
  name: "PageInfo",
  definition(t) {
    t.string("endCursor");
    t.boolean("hasNextPage");
  },
});

export const ProductConnection = objectType({
  name: "ProductConnection",
  definition(t) {
    t.list.field("edges", { type: Edge });
    t.field("pageInfo", { type: PageInfo });
  },
});

export const ProductsQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("products", {
      type: ProductConnection,
      args: {
        first: "Int",
        after: "Int",
      },
      resolve: async (_, args, ctx) => {
        let queryResults = null;

        if (args.after) {
          queryResults = await ctx.prisma.product.findMany({
            skip: 1,
            take: args.first,
            cursor: { id: args.after },
          });
        } else {
          queryResults = await ctx.prisma.product.findMany({
            take: args.first,
          });
        }

        if (queryResults.length > 0) {
          const lastProductInResults = queryResults[queryResults.length - 1];
          const myCursor = lastProductInResults.id;

          const secondQueryResults = await ctx.prisma.product.findMany({
            take: args.first,
            cursor: { id: myCursor },
          });

          const result = {
            pageInfo: {
              endCursor: myCursor,
              hasNextPage: secondQueryResults.length >= args.first,
            },
            edges: queryResults.map((product) => ({
              cursor: product.id,
              node: product,
            })),
          };

          return result;
        }

        return {
          pageInfo: {
            endCursor: null,
            hasNextPage: false,
          },
          edges: [],
        };
      },
    });
  },
});
