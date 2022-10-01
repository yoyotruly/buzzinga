import { gql, useQuery } from "@apollo/client";
import { Container, Grid } from "@nextui-org/react";
import FilterGroup from "../../src/components/SideNav/FilterGroup";
import ProductCard from "../../src/components/Product/ProductCard";

const ProductsQuery = gql`
  query {
    products {
      id
      name
      description
    }
  }
`;

export default function Products() {
  const { loading, error, data } = useQuery(ProductsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops, something went wrong {error.message}</p>;

  const productElements = (
    <Grid.Container gap={1}>
      {data?.products.map((product) => (
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
