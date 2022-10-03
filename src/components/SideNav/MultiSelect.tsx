import { Button, Grid } from "@nextui-org/react";
import { activeColor } from "../../utilities/constants";

function Select({ name }) {
  return (
    <Button size="sm" bordered color={activeColor} rounded ghost auto>
      {name}
    </Button>
  );
}

export default function MultiSelect({ categories }) {
  return (
    <Grid.Container>
      {categories.map((category) => (
        <Grid
          key={category.id}
          css={{ paddingRight: "$3", paddingBottom: "$3" }}
        >
          <Select name={category.name} />
        </Grid>
      ))}
    </Grid.Container>
  );
}
