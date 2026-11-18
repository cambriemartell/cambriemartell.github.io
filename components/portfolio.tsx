import Link from 'next/link'
import { studies } from '@/lib/studies'

function Header() {
  return (
    <header className="site-header">
      <Link className="wordmark mono" href="/" aria-label="[Your name], home">[Your Name]</Link>
      <nav className="boxed-nav mono" aria-label="Main navigation">
        <a href="#work">[Work]</a>
        <a href="#about">[About]</a>
        <a href="#contact">[Contact]</a>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer mono">
      <div className="footer-links"><a href="[LinkedIn URL]">[LinkedIn] <span className="inline-arrow" aria-hidden="true" /></a><a href="mailto:[Email address]">[Email] <span className="inline-arrow" aria-hidden="true" /></a></div>
      <span>[© 2026 Your Name]</span>
    </footer>
  )
}

function WorkList() {
  return (
    <div className="work-list">
      {studies.map((study, index) => (
        <Link className="work-row" href={`/work/${study.slug}`} key={study.slug}>
          <span className="work-number mono">0{index + 1}/</span>
          <span className="work-title-wrap"><span className="work-title">{study.title}</span><span className="work-result">{study.result}</span></span>
          <span className="work-category mono">{study.category}</span>
          <span className="work-year mono">{study.year}</span>
          <span className="work-arrow" aria-hidden="true" />
        </Link>
      ))}
    </div>
  )
}

export function HomePage() {
  return (
    <main className="page-shell">
      <Header />
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow mono">[PRODUCT MANAGER / PORTFOLIO / 2026]</p>
        <h1 id="hero-title">[Making<br /><span className="hero-accent">complex things</span><br />feel simple.]</h1>
        <p className="hero-subhead">[A short introduction about the work you do, the problems you solve, and the people you build for.]</p>
      </section>
      <section className="accordion" aria-label="Portfolio sections">
        <details className="accordion-item" open id="work">
          <summary><span className="accordion-label"><span className="mono">01/</span><span>[Selected work]</span></span><span className="toggle" aria-hidden="true" /></summary>
          <div className="accordion-content"><WorkList /></div>
        </details>
        <details className="accordion-item" id="about">
          <summary><span className="accordion-label"><span className="mono">02/</span><span>[About]</span></span><span className="toggle" aria-hidden="true" /></summary>
          <div className="accordion-content about-copy"><p>[A concise bio about your approach, experience, and what you believe makes good product work.]</p><p>[A little more about the teams and challenges you enjoy working with.]</p></div>
        </details>
        <details className="accordion-item" id="contact">
          <summary><span className="accordion-label"><span className="mono">03/</span><span>[Contact]</span></span><span className="toggle" aria-hidden="true" /></summary>
          <div className="accordion-content about-copy"><p>[Have a good problem to solve? Get in touch.]</p><a className="contact-link" href="mailto:[Email address]">[Email address] <span className="inline-arrow" aria-hidden="true" /></a></div>
        </details>
      </section>
      <Footer />
    </main>
  )
}

export { Header, Footer }
