import Spline from '@splinetool/react-spline'

export default function Hero() {
  const handleCta = (e) => {
    e.preventDefault()
    const el = document.querySelector('#contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative h-[86vh] min-h-[560px] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-sm font-medium ring-1 ring-inset ring-blue-200">Custom Web App Development</span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Build scalable, secure, and delightful web applications
          </h1>
          <p className="mt-4 text-lg text-slate-700">
            From idea to launch, we design and engineer modern web apps that grow with your business. Fast, accessible, and built on a rock‑solid stack.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#contact" onClick={handleCta} className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700 transition-colors">
              Get a Quote
            </a>
            <a href="#services" onClick={(e)=>{e.preventDefault(); document.querySelector('#services')?.scrollIntoView({behavior:'smooth'})}} className="inline-flex items-center rounded-md border border-slate-300 bg-white px-5 py-3 text-slate-700 font-semibold shadow-sm hover:bg-slate-50">
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
