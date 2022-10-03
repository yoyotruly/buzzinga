import { gql, useQuery } from "@apollo/client";
import { Container, Grid } from "@nextui-org/react";
import FilterGroup from "../../src/components/SideNav/FilterGroup";
import ProductCard from "../../src/components/Product/ProductCard";
import Link from "next/link";
import { productGridGap } from "../../src/utilities/constants";

const GetProducts = gql`
  query GetProductsQuery($first: Int, $after: Int) {
    products(first: $first, after: $after) {
      edges {
        cursor
        node {
          id
          name
          image
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

export default function Products() {
  const { loading, error, data, fetchMore } = useQuery(GetProducts, {
    variables: { first: 2 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops, something went wrong {error.message}</p>;

  const { endCursor, hasNextPage } = data.products.pageInfo;

  const productElements = (
    <Grid.Container gap={productGridGap}>
      {data?.products.edges.map(({ node }) => (
        <Link key={node.id} href="/products/[pid]" as={`/products/${node.id}`}>
          <Grid>
            <ProductCard product={node} />
          </Grid>
        </Link>
      ))}
    </Grid.Container>
  );

  return (
    <>
      <Grid.Container wrap="nowrap" css={{ padding: "$13 0" }}>
        <Grid as="section" xs={2.5}>
          <FilterGroup />
        </Grid>

        <Grid as="section" xs>
          <Container css={{ paddingRight: 0 }}>{productElements}</Container>
        </Grid>
      </Grid.Container>
      {hasNextPage ? (
        <button
          onClick={() => {
            fetchMore({
              variables: { after: parseInt(endCursor) },
              updateQuery: (prev, { fetchMoreResult }) => {
                fetchMoreResult.products.edges = [
                  ...prev.products.edges,
                  ...fetchMoreResult.products.edges,
                ];
                return fetchMoreResult;
              },
            });
          }}
        >
          Load More
        </button>
      ) : (
        <p> No more products </p>
      )}
    </>
  );
}
