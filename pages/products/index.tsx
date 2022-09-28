import Link from "next/link";

export default function Products() {
  return (
    <>
      <nav>
        <section>
          <h2>Category</h2>
          <div>Pills</div>
        </section>
        <section>
          <h2>Sub-Category</h2>
          <div>Pills</div>
        </section>
        <section>
          <h2>Price Range</h2>
          <div>Slider</div>
        </section>
        <section>
          <h2>Sugar Content</h2>
          <div>Slider</div>
        </section>
      </nav>

      <main>
        <h1>Products List</h1>
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
      </main>
    </>
  );
}
