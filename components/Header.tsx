import Link from 'next/link'

export default function Header(){
  return (
    <header className="border-b">
      <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
        <div>
          <Link href="/">
            <a className="text-lg font-semibold">Laura Douglass</a>
          </Link>
          <div className="text-sm text-slate-500">Commercial strategy • B2B GTM • Professional services</div>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#experience" className="text-slate-600">Experience</a>
          <a href="#projects" className="text-slate-600">Projects</a>
          <a href="#contact" className="text-slate-600">Contact</a>
        </nav>
      </div>
    </header>
  )
}
