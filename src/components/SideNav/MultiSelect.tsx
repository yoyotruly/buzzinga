import { Button, Grid } from "@nextui-org/react";

function Select({ name }) {
  return (
    <Button size="sm" bordered color="secondary" rounded auto>
      {name}
    </Button>
  );
}

export default function MultiSelect({ categories }) {
  return (
    <Grid.Container gap={0.5}>
      {categories.map((category) => (
        <Grid key={category.id}>
          <Select name={category.name} />
        </Grid>
      ))}
    </Grid.Container>
  );
}
