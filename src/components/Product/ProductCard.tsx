import { Card, Text, Row } from "@nextui-org/react";
import {
  border,
  productCardHeight,
  productCardWidth,
} from "../../utilities/constants";

export default function ProductCard({ product }) {
  return (
    <Card
      isPressable
      isHoverable
      css={{ width: productCardWidth, height: productCardHeight }}
    >
      <Card.Body css={{ padding: 0 }}>
        <Card.Image
          src={product.image}
          objectFit="cover"
          width="100%"
          height="100%"
          alt={product.name}
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          height: "20%",
          bgBlur: "#0f111466",
          borderTop: border,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Text color="#d1d1d1" size={14}>
            {product.name}
          </Text>
        </Row>
      </Card.Footer>
    </Card>
  );
}
