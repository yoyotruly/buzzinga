import { Grid, Spacer } from "@nextui-org/react";
import HomeHero from "../src/components/HomeHero";
import HomeProductCard from "../src/components/Product/HomeProductCard";

export default function Home() {
  return (
    <Grid.Container wrap="nowrap">
      <Grid xs>
        <HomeHero />
      </Grid>

      <Spacer x={8} />

      <Grid xs={2}>
        <HomeProductCard />
        <button>Next</button>
      </Grid>

      <Grid xs={2.5}>
        <HomeProductCard />
      </Grid>
    </Grid.Container>
  );
}
