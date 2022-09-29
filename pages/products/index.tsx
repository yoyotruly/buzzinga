import { Button, Card, Grid, Spacer, Text } from "@nextui-org/react";
import Link from "next/link";
import { Box } from "../../src/components/Box";

const createFilterElements = (filters) => {
  return (
    <Grid.Container gap={1}>
      {filters.map((filter) => (
        <Grid key={filter}>
          <Button size="sm" bordered color="primary" rounded auto ghost>
            {filter}
          </Button>
        </Grid>
      ))}
    </Grid.Container>
  );
};

const createProductCards = (products) => {
  return (
    <Grid.Container gap={3}>
      {products.map((product) => (
        <Grid key={product}>
          <Card
            isPressable
            isHoverable
            variant="flat"
            css={{ width: "250px", height: "350px" }}
          >
            <Card.Body>
              <Text>{product}</Text>
            </Card.Body>
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default function Products() {
  const categoryElements = createFilterElements([
    "Beer",
    "Cider",
    "Wine",
    "Spirits",
  ]);

  const subcategoryElements = createFilterElements([
    "Lager",
    "Ale",
    "Stout",
    "IPA",
    "Cider",
    "Red Wine",
    "White Wine",
    "Rose Wine",
    "Vodka",
    "Gin",
    "Rum",
    "Whiskey",
  ]);

  const productElements = createProductCards([
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
    "Product 7",
    "Product 8",
    "Product 9",
    "Product 10",
  ]);

  return (
    <Box
      css={{
        display: "flex",
        width: "90%",
        margin: "auto",
        justifyContent: "space-between",
      }}
    >
      <Box css={{ maxW: "350px" }}>
        <section>
          <h2>Category</h2>
          {categoryElements}
        </section>
        <section>
          <h2>Sub-Category</h2>
          {subcategoryElements}
        </section>
        <section>
          <h2>Price Range</h2>
          <div>Slider</div>
        </section>
        <section>
          <h2>Sugar Content</h2>
          <div>Slider</div>
        </section>
      </Box>

      <Spacer x={2} />

      <Box css={{ flexGrow: 1 }}>
        <h1>Products List</h1>
        <div>
          <Link href="/products/[pid]" as={"/products/1"}>
            Product card 1
          </Link>
        </div>
        {productElements}
      </Box>
    </Box>
  );
}
