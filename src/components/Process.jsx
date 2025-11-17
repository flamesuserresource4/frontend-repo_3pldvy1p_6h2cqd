import { Search, PencilRuler, Wrench, Rocket, Lifebuoy } from 'lucide-react'

const steps = [
  { icon: Search, title: 'Discovery', desc: 'Workshops, requirements, and success metrics.' },
  { icon: PencilRuler, title: 'Design', desc: 'User flows, wireframes, prototypes, and UI systems.' },
  { icon: Wrench, title: 'Development', desc: 'Agile sprints, code reviews, CI/CD and QA.' },
  { icon: Rocket, title: 'Deployment', desc: 'Cloud infrastructure, observability, and scaling.' },
  { icon: Lifebuoy, title: 'Support', desc: 'Monitoring, iteration, and roadmap partnership.' }
]

export default function Process(){
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Process</h2>
          <p className="mt-3 text-slate-700">A transparent, collaboration‑first way of working to move from idea to impact.</p>
        </div>
        <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map(({icon:Icon, title, desc}, i) => (
            <li key={title} className="relative rounded-2xl border border-slate-200 p-6">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm text-slate-500 font-medium">Step {i+1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
