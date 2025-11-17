export default function WhyMatters() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Designed for Business Owners Ready to Scale Without Burning Out
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Most business owners are drowning in admin work, repetitive tasks, and manual processes. AI and automation can eliminate hours of work each week — but only if it’s applied correctly.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            'Identify the biggest time-wasters in your business',
            'Uncover 3–5 immediate automation opportunities',
            'Map out how tools like AI, workflows, and integrations fit your operations',
            'Provide a simple roadmap to reclaim 5–10 hours a week',
          ].map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
              {item}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-slate-500">
          This isn’t a sales call. It’s a selective, high-value review designed to help serious business owners get ahead.
        </p>
      </div>
    </section>
  );
}
