import { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', brief: '' })
  const [status, setStatus] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setStatus('Please enter a valid email address.')
      return
    }
    setStatus('Thanks! We\'ll be in touch shortly.')
    setForm({ name: '', email: '', brief: '' })
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Let\'s build your web app</h2>
            <p className="mt-3 text-slate-700">Tell us about your goals, timeline, and constraints — we\'ll respond within one business day.</p>
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700">Talk to us</a>
            </div>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" value={form.name} onChange={onChange} placeholder="Your name" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email<span className="text-red-500">*</span></label>
                <input name="email" value={form.email} onChange={onChange} placeholder="you@company.com" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" required type="email" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-slate-700">Project brief</label>
              <textarea name="brief" value={form.brief} onChange={onChange} placeholder="What are you building?" rows="5" className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            {status && <p className="mt-3 text-sm text-emerald-700">{status}</p>}
            <button type="submit" className="mt-6 inline-flex items-center rounded-md bg-blue-600 px-5 py-3 text-white font-semibold shadow hover:bg-blue-700">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}
