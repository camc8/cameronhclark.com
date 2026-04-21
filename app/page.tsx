import Link from 'next/link'

const roles = [
  {
    title: 'Software Engineer',
    description:
      'Full-stack web development — React, TypeScript, Node.js, and cloud infrastructure.',
  },
  {
    title: 'Community Relations Director',
    description:
      'Assisted living & memory care placement at DOS Healthcare, helping families navigate senior care.',
  },
  {
    title: 'Property Management',
    description:
      'Owner-operator focused on residential and commercial property management.',
  },
  {
    title: 'AI Entrepreneur',
    description:
      'Building AI-powered tools and products that automate workflows and unlock new value.',
  },
]

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16 sm:py-24">
      {/* Nav */}
      <nav className="flex items-center justify-between mb-20">
        <span className="font-mono text-sm text-neutral-500 tracking-tight">
          camc8.com
        </span>
        <div className="flex gap-6 text-sm text-neutral-500">
          <a
            href="mailto:cameronhclark1@gmail.com"
            className="hover:text-neutral-900 transition-colors"
          >
            Contact
          </a>
          <a
            href="https://github.com/camc8"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mb-20">
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">
          Cameron Hernando Clark
        </h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-xl">
          I build software, connect families with senior care, manage
          properties, and develop AI products. Miami-based, always working on
          something new.
        </p>
      </section>

      {/* Roles */}
      <section className="mb-20">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">
          What I Do
        </h2>
        <div className="space-y-8">
          {roles.map((role) => (
            <div key={role.title} className="group">
              <h3 className="font-medium text-neutral-900 mb-1">
                {role.title}
              </h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-neutral-100 pt-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
          Get in Touch
        </h2>
        <a
          href="mailto:cameronhclark1@gmail.com"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 border border-neutral-200 rounded-lg px-4 py-2.5 hover:bg-neutral-50 hover:border-neutral-300 transition-all"
        >
          cameronhclark1@gmail.com
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-400"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-neutral-100">
        <p className="text-xs text-neutral-400">
          © {new Date().getFullYear()} Cameron Hernando Clark
        </p>
      </footer>
    </div>
  )
}
