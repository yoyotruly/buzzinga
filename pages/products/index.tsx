import { Container, Grid } from "@nextui-org/react";
import FilterGroup from "../../src/components/SideNav/FilterGroup";
import ProductCard from "../../src/components/Product/ProductCard";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Budweiser",
      price: 2.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Bud Light",
      price: 2.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Coors Light",
      price: 2.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Corona",
      price: 2.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Heineken",
      price: 2.99,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Miller Lite",
      price: 2.99,
      image: "https://via.placeholder.com/150",
    },
  ];

  const productElements = (
    <Grid.Container gap={1}>
      {products.map((product) => (
        <Grid key={product.id}>
          <ProductCard id={product.id} name={product.name} />
        </Grid>
      ))}
    </Grid.Container>
  );

  return (
    <Grid.Container wrap="nowrap">
      <Grid xs={2.5}>
        <FilterGroup />
      </Grid>

      <Grid xs>
        <Container>
          <h1>Products List</h1>
          {productElements}
        </Container>
      </Grid>
    </Grid.Container>
  );
}
