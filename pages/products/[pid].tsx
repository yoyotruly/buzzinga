import { useRouter } from "next/router"

export default function Product({ product }) {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div>
      <h1>Product { pid } detail page</h1>
    </div>
  )
}
