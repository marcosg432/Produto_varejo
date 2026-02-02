import CategoryPage from '@/site/pages/CategoryPage'

export default async function CategoryPageRoute({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <CategoryPage slug={slug} />
}
