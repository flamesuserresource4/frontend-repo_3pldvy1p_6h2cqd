export default function Testimonials(){
  const items = [
    { quote: 'They shipped our MVP in record time and the quality was outstanding.', author: 'COO, Fintech Startup' },
    { quote: 'Truly a partner — proactive, communicative, and deeply technical.', author: 'Product Lead, HealthTech' },
    { quote: 'We scaled to thousands of users without a hiccup. Highly recommend.', author: 'Founder, B2B SaaS' }
  ]

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">What clients say</h2>
          <p className="mt-3 text-slate-700">Feedback from teams we help build and scale.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.author} className="rounded-2xl border border-slate-200 bg-white p-6">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-900">{t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
