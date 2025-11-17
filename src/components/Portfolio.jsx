export default function Portfolio(){
  const projects = [
    { title: 'Project 1', desc: 'SaaS analytics dashboard with multi-tenant auth and real‑time charts.' },
    { title: 'Project 2', desc: 'Marketplace web app with payments, search, and messaging.' },
    { title: 'Project 3', desc: 'Internal tooling suite with role-based access and audit logs.' }
  ]

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Portfolio</h2>
          <p className="mt-3 text-slate-700">A peek at the types of products we build. Ask us for full case studies.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 overflow-hidden bg-white hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-50" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-slate-600">{p.desc}</p>
                <div className="mt-4 text-sm text-blue-600 font-medium">View details →</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
