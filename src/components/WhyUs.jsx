import { ShieldCheck, Layers, Rocket, LineChart } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Security-first',
    desc: 'OWASP-aligned practices, robust auth, and vigilant monitoring to keep your data safe.'
  },
  {
    icon: Layers,
    title: 'Scalable architecture',
    desc: 'Modular services and cloud-native patterns that scale effortlessly as you grow.'
  },
  {
    icon: Rocket,
    title: 'Time-to-value',
    desc: 'Lean delivery with rapid iterations so you can ship faster without compromising quality.'
  },
  {
    icon: LineChart,
    title: 'Measurable impact',
    desc: 'Analytics, A/B testing, and observability baked in to inform every decision.'
  }
]

export default function WhyUs(){
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Why choose us</h2>
          <p className="mt-3 text-slate-700">We combine product thinking with engineering excellence to deliver web apps that are a joy to use and easy to evolve.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
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
