import Link from 'next/link'
import type { Study } from '@/lib/studies'
import { Footer, Header } from '@/components/portfolio'

export function CaseStudyPage({ study }: { study: Study }) {
  return (
    <main className="page-shell">
      <Header />
      <article className="case-study">
        <p className="eyebrow mono">[CASE STUDY {study.number}/]</p>
        <h1 className="case-title">{study.title}</h1>
        <dl className="facts-strip">
          <div><dt className="mono">[Company]</dt><dd>{study.company}</dd></div>
          <div><dt className="mono">[Role]</dt><dd>{study.role}</dd></div>
          <div><dt className="mono">[Timeframe]</dt><dd>{study.timeframe}</dd></div>
        </dl>
        <div className="case-blocks">
          {study.sections.map((section, index) => (
            <section className="case-block" key={section.label}>
              <h2 className="mono"><span>0{index + 1}/</span>{section.label}</h2>
              <div className="case-body"><p>{section.body}</p></div>
            </section>
          ))}
        </div>
        <Link className="back-link mono" href="/">← [Back to all work]</Link>
      </article>
      <Footer />
    </main>
  )
}
