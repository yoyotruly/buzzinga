import { Card, Text } from "@nextui-org/react";
import Link from "next/link";

export default function ProductCard({ id, name }) {
  return (
    <Card
      isPressable
      isHoverable
      variant="flat"
      css={{ width: "230px", height: "320px" }}
    >
      <Link href="/products/[pid]" as={`/products/${id}`}>
        <Card.Body>
          <Text>{name}</Text>
        </Card.Body>
      </Link>
    </Card>
  );
}
