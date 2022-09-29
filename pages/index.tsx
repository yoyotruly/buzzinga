import { Button } from "@nextui-org/react";
import { Box } from "../src/components/Box";

export default function Home() {
  return (
    <Box
      css={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "yellow",
      }}
    >
      <Box>
        <h1>Tag line</h1>
        <p>Some text</p>
        <Button>Go Explore</Button>
      </Box>

      <Box css={{ display: "flex", alignItems: "center" }}>
        <Box css={{ backgroundColor: "tomato" }}>Product card 1</Box>
        <button>Next</button>
        <Box>Product card 2</Box>
      </Box>
    </Box>
  );
}
