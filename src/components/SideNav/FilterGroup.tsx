import { gql, useQuery } from "@apollo/client";
import { Grid, Text } from "@nextui-org/react";
import MultiSelect from "./MultiSelect";

const CategoriesQuery = gql`
  query {
    categories {
      id
      name
    }
    subcategories {
      id
      name
    }
  }
`;

export default function FilterGroup() {
  const { loading, error, data } = useQuery(CategoriesQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Oops, something went wrong {error.message}</p>;

  console.log(data);

  return (
    <Grid.Container alignContent="flex-start" css={{ gap: "$13" }}>
      <Grid>
        <Text h3>Categories</Text>
        <MultiSelect categories={data?.categories} />
      </Grid>
      <Grid>
        <Text h3>Sub Categories</Text>
        <MultiSelect categories={data?.subcategories} />
      </Grid>
      <Grid>
        <Text h3>Alcohol Content</Text>
        <div>Slider</div>
      </Grid>
    </Grid.Container>
  );
}
