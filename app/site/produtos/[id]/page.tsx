import ProductPage from '@/site/pages/ProductPage'

export default async function ProductPageRoute({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <ProductPage productId={parseInt(id)} />
}
