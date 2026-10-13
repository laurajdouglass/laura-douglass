import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import projects from '../data/projects'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Head>
        <title>Laura Douglass — Commercial Strategy & B2B GTM</title>
        <meta name="description" content="Laura Douglass — Commercial growth & professional services leader. Specialist in GTM, partnerships, AI and C-suite engagement." />
      </Head>

      <Header />

      <main className="max-w-4xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-semibold">LAURA DOUGLASS</h1>
            <p className="text-slate-600 mt-2 font-medium">COMMERCIAL STRATEGY | B2B BUSINESS DEVELOPMENT & MARKETING | PROFESSIONAL SERVICES</p>
            <p className="text-sm text-slate-500 mt-3">Sydney, Australia • Australian citizen • <a href="mailto:laura@douglass.net.au" className="text-blue-600">laura@douglass.net.au</a> • <a href="tel:+61468444599" className="text-blue-600">+61 468 444 599</a></p>

            <h2 className="text-xl font-semibold mt-6">Career profile</h2>
            <p className="mt-2 text-slate-700">Commercial growth and professional-services leader with 10+ years of experience across APAC and EMEA at Deloitte, PwC and Addleshaw Goddard. Skilled in commercial strategy, business development, market and client insights, executive engagement and marketing. Specialist in C-suite engagement and go-to-market strategy for enterprise technology and AI.</p>

            <h3 className="font-semibold mt-6">Selected career highlights</h3>
            <ul className="list-disc pl-5 mt-2 text-slate-700 space-y-2">
              <li>Developed APAC strategy for Deloitte–SAP Start Success; campaigns increased pipeline by 14% and partner engagement by 20%.</li>
              <li>Led PwC’s Annual Global CEO Survey strategy & campaign across 60 countries.</li>
              <li>Built Deloitte Australia’s CFO Program and grew the executive community to 200+ members.</li>
              <li>Designed Addleshaw Goddard’s 3-year Technology & AI growth strategy and led a Financial Times partnership.</li>
            </ul>

          </div>

          <aside className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden bg-slate-100">
              <Image src="/profile-placeholder.svg" alt="Laura Douglass" width={160} height={160} />
            </div>
            <a className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download CV (PDF)</a>
            <p className="text-sm text-slate-500 mt-3">Available for consulting & advisory roles. Sydney-based.</p>
          </aside>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Experience</h2>

          <div className="mt-4 space-y-6">
            <article>
              <h4 className="font-semibold">Head of Go‑To‑Market Strategy & BD | Technology & AI — Addleshaw Goddard</h4>
              <p className="text-sm text-slate-500">Apr 2025 – Present | London, UK</p>
              <p className="mt-2 text-slate-700">Lead the global Technology & Innovation practice's strategic marketing and business development agenda, partnering with senior leadership to drive growth across AI, cybersecurity, cloud and digital transformation.</p>
            </article>

            <article>
              <h4 className="font-semibold">Global Marketing and Growth Manager – C‑suite Issues — PwC Global</h4>
              <p className="text-sm text-slate-500">Nov 2022 – Feb 2025 | London, UK</p>
              <p className="mt-2 text-slate-700">Led global commercial growth, go-to-market and thought-leadership programs including the Annual Global CEO Survey and Take on Tomorrow podcast.</p>
            </article>

            <article>
              <h4 className="font-semibold">APAC Regional Lead SAP BD & Marketing Manager — Deloitte Global</h4>
              <p className="text-sm text-slate-500">Jun 2021 – Nov 2022 | Sydney, Australia</p>
              <p className="mt-2 text-slate-700">Led regional growth, GTM and alliance marketing for Deloitte–SAP across APAC; launched Start Success and adapted SAP Kinetic for the region.</p>
            </article>

            <article>
              <h4 className="font-semibold">CFO Relationship Program Senior Consultant — Deloitte Australia</h4>
              <p className="text-sm text-slate-500">Jun 2018 – Jun 2021 | Sydney, Australia</p>
            </article>

          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Selected projects & links</h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <a key={p.slug} href={p.url} target="_blank" rel="noopener noreferrer" className="block p-4 border rounded hover:shadow">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{p.summary}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Core capabilities & technology</h2>
          <p className="mt-3 text-slate-700">Commercial Strategy • Business Development • GTM • Partner & Alliance Marketing • ABM • Executive Engagement • Salesforce • SFMC • Marketo • Tableau • GA4 • ChatGPT • Claude • Microsoft Copilot</p>
        </section>

        <section className="mt-12 mb-12">
          <h2 className="text-2xl font-semibold">Education & additional leadership</h2>
          <p className="mt-2 text-slate-700">UNSW — Bachelor of Commerce (International Business & Marketing). Cambridge Judge Business School — Leading Strategic Projects Successfully (2023).</p>
        </section>

      </main>

      <Footer />
    </div>
  )
}
