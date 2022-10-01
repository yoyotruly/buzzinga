import { Button, Container, Text } from "@nextui-org/react";

export default function HomeHero() {
  return (
    <Container gap={0} css={{ margin: "auto" }}>
      <Text
        h1
        size={80}
        css={{ textGradient: "45deg, $purple600 -20%, $yellow600 100%" }}
        weight="bold"
      >
        Just relax, and go with the flow
      </Text>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
        cumque, ex expedita amet, veniam quibusdam nihil molestias corporis
        quaerat ducimus excepturi, veritatis labore iste perspiciatis eius omnis
        suscipit voluptatum magni.
      </p>
      <Button rounded color="secondary">
        Go Explore
      </Button>
    </Container>
  );
}
