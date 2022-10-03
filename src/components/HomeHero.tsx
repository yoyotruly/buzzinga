import { Container, Spacer, Text } from "@nextui-org/react";
import NextLink from "next/link";

export default function HomeHero() {
  return (
    <Container gap={0} css={{ margin: "auto" }}>
      <Text
        h1
        size="$8xl"
        css={{
          textGradient: "45deg, $purple600 30%, $yellow600 100%",
          lineHeight: "100%",
          paddingBottom: "0.05em",
        }}
      >
        Just relax, and go with the flow
      </Text>
      <Spacer />
      <Text weight="light">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
        cumque, ex expedita amet, veniam quibusdam nihil molestias corporis
        quaerat ducimus excepturi, veritatis labore iste perspiciatis eius omnis
        suscipit voluptatum magni.
      </Text>
      <Spacer />
      <NextLink href="/products">
        {/* <Button rounded shadow color="secondary" animated size="lg"> */}
        Go Explore
        {/* </Button> */}
      </NextLink>
    </Container>
  );
}
