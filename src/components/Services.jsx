import { Code2, Server, PanelsTopLeft, PlugZap } from 'lucide-react'

const services = [
  { icon: PanelsTopLeft, title: 'UI/UX Design', desc: 'Human-centered, accessible interfaces with strong visual systems.' },
  { icon: Code2, title: 'Front-end Development', desc: 'React-based SPA/SSR with performance, accessibility, and testing.' },
  { icon: Server, title: 'Back-end Engineering', desc: 'API design, microservices, authentication, and data modeling.' },
  { icon: PlugZap, title: 'API & Integrations', desc: 'Third‑party integrations, payments, analytics, search, and more.' }
]

export default function Services(){
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Services</h2>
          <p className="mt-3 text-slate-700">From front‑end polish to resilient back‑ends, we provide end‑to‑end capabilities for modern web apps.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 hover:-translate-y-1 hover:shadow-xl transition-all">
              <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
