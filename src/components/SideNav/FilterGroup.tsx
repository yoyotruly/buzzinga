import { Container } from "@nextui-org/react";
import MultiSelect from "./MultiSelect";

const categories = [
  { id: 1, name: "Beer" },
  { id: 2, name: "Cider" },
  { id: 3, name: "Wine" },
  { id: 4, name: "Spirits" },
];

const subcategories = [
  { id: 1, name: "Lager" },
  { id: 2, name: "Ale" },
  { id: 3, name: "Stout" },
  { id: 4, name: "Cider" },
  { id: 5, name: "Red Wine" },
  { id: 6, name: "White Wine" },
  { id: 7, name: "Rose Wine" },
  { id: 8, name: "Vodka" },
  { id: 9, name: "Gin" },
  { id: 10, name: "Rum" },
];

export default function FilterGroup() {
  return (
    <Container css={{ maxW: "350px" }}>
      <section>
        <h2>Category</h2>
        <MultiSelect categories={categories} />
      </section>
      <section>
        <h2>Sub-Category</h2>
        <MultiSelect categories={subcategories} />
      </section>
      <section>
        <h2>Price Range</h2>
        <div>Slider</div>
      </section>
      <section>
        <h2>Sugar Content</h2>
        <div>Slider</div>
      </section>
    </Container>
  );
}
