import { Braces, Server, Boxes, Palette, Database, Rocket } from 'lucide-react'

export default function Tech(){
  const Item = ({ Icon, label }) => (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
      <div className="h-9 w-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <span className="font-medium text-slate-800">{label}</span>
    </div>
  )

  return (
    <section id="tech" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Technologies</h2>
          <p className="mt-3 text-slate-700">We select battle‑tested tools to balance velocity and stability.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Item Icon={Braces} label="React / TypeScript" />
          <Item Icon={Server} label="Node.js / FastAPI" />
          <Item Icon={Boxes} label="Vite / Webpack" />
          <Item Icon={Palette} label="Tailwind CSS / Design Systems" />
          <Item Icon={Database} label="MongoDB / PostgreSQL" />
          <Item Icon={Rocket} label="Docker / CI/CD" />
        </div>
      </div>
    </section>
  )
}
