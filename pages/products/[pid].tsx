import Link from "next/link";
import { useRouter } from "next/router";

export default function Product({ product }) {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <main>
      <section>
        <h1>Product {pid} Name</h1>
        <div>Description and stats</div>
        <div>Product image</div>
        <div>Product side stats</div>
      </section>

      <section>
        <h2>You may also like</h2>
        <div>
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
        </div>
      </section>
    </main>
  );
}
