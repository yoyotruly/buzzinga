import { objectType } from "nexus";

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
