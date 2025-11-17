import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Services from './components/Services'
import Process from './components/Process'
import Tech from './components/Tech'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <WhyUs />
        <Services />
        <Process />
        <Tech />
        <Portfolio />
        <Testimonials />
        <Contact />
        <footer className="py-10 border-t border-slate-200 text-center text-sm text-slate-600">© {new Date().getFullYear()} Flames Studio — Custom Web App Development</footer>
      </main>
    </div>
  )
}

export default App
