import { notFound } from 'next/navigation'
import { CaseStudyPage } from '@/components/case-study'
import { studies } from '@/lib/studies'

export function generateStaticParams() {
  return studies.map(({ slug }) => ({ slug }))
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = studies.find((item) => item.slug === slug)
  if (!study) notFound()
  return <CaseStudyPage study={study} />
}
