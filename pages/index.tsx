import { Grid, Spacer } from "@nextui-org/react";
import HomeHero from "../src/components/HomeHero";
import ProductCard from "../src/components/ProductCard";

export default function Home() {
  return (
    <Grid.Container wrap="nowrap">
      <Grid xs>
        <HomeHero />
      </Grid>

      <Spacer x={2} />

      <Grid xs={2}>
        <ProductCard />
        <button>Next</button>
      </Grid>

      <Grid xs={2}>
        <ProductCard />
      </Grid>
    </Grid.Container>
  );
}
