import Link from "next/link";
import { useRouter } from "next/router";
import { Box } from "../../src/components/Box";

export default function Product({ product }) {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Box css={{ width: "90%", margin: "auto", backgroundColor: "yellow" }}>
      <Box css={{ height: "600px" }}>
        <h1>Product {pid} Name</h1>
        <div>Description and stats</div>
        <div>Product image</div>
        <div>Product side stats</div>
      </Box>

      <section>
        <h2>You may also like</h2>
        <Box css={{ display: "flex" }}>
          <div>
            <Link href="/products/[pid]" as={"/products/1"}>
              Product card 1
            </Link>
          </div>
          <div>
            <Link href="/products/[pid]" as={"/products/2"}>
              Product card 2
            </Link>
          </div>
        </Box>
      </section>
    </Box>
  );
}
