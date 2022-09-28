import Link from "next/link"

export default function Products() {
  return (
    <div>
      <h1>Products page</h1>

      <Link href="/products/[pid]" as={"/products/3"}>Product detail</Link>
    </div>
  )
}