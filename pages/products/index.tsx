import { gql, useQuery } from "@apollo/client";
import { Container, Grid } from "@nextui-org/react";
import FilterGroup from "../../src/components/SideNav/FilterGroup";
import ProductCard from "../../src/components/Product/ProductCard";
import Link from "next/link";
import { productGridGap } from "../../src/components/Utilities/constants";

const ProductsQuery = gql`
  query {
    products {
      id
      name
      image
    }
  }
`;

export default function Products() {
  const { loading, error, data } = useQuery(ProductsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops, something went wrong {error.message}</p>;

  const productElements = (
    <Grid.Container gap={productGridGap}>
      {data?.products.map((product) => (
        <Link
          key={product.id}
          href="/products/[pid]"
          as={`/products/${product.id}`}
        >
          <Grid>
            <ProductCard product={product} />
          </Grid>
        </Link>
      ))}
    </Grid.Container>
  );

  return (
    <Grid.Container wrap="nowrap" css={{ padding: "$13 0" }}>
      <Grid as="section" xs={2.5}>
        <FilterGroup />
      </Grid>

      <Grid as="section" xs>
        <Container css={{ paddingRight: 0 }}>{productElements}</Container>
      </Grid>
    </Grid.Container>
  );
}
