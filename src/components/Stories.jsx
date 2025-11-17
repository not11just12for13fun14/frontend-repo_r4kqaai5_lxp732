export default function Stories() {
  const items = [
    {
      quote: 'Saved 8 hours/week by automating follow-up workflows.',
      meta: 'Home services business — Washington, DC',
    },
    {
      quote: 'Cut onboarding time by 40% with AI-assisted document prep.',
      meta: 'Consulting firm — Maryland',
    },
    {
      quote: 'Stopped losing leads — AI now handles responses instantly.',
      meta: 'Insurance agency — Virginia',
    },
    {
      quote: 'Reduced data entry by 70% with smart forms and automations.',
      meta: 'Healthcare practice — Maryland',
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            What Other Attendees Have Achieved
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          {items.map((it) => (
            <div key={it.quote} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <p className="text-slate-900">“{it.quote}”</p>
              <p className="mt-3 text-sm text-slate-500">{it.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
