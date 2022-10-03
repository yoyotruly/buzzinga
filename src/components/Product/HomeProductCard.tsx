import { Container } from "@nextui-org/react";
import { border } from "../../utilities/constants";

export default function HomeProductCard() {
  return (
    <Container
      css={{
        borderLeft: border,
        borderRight: border,
      }}
    >
      Product Card
    </Container>
  );
}
