export default function WhatsIncluded() {
  const bullets = [
    'A tailored audit of your current workflow',
    'Identification of your top 3 automation opportunities',
    'Clarity on which tools (AI, automation, CRM) match your business',
    'A simple 30-day plan to implement the first automation',
    'Optional referral into our private build team if you want done-for-you help',
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            What’s Included in Your Strategy Session
          </h2>
          <p className="mt-4 text-slate-600">
            This session gives you clarity, simplicity, and a proven path to save hours each week.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-3">
          {bullets.map((b) => (
            <div key={b} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
