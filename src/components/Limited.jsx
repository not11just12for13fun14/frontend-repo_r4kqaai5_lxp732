export default function Limited() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Why This Session Is Limited
          </h2>
          <p className="mt-6 text-slate-600">
            To maintain quality, we only open a limited number of strategy sessions each month. Each review takes time to prepare, and we only select businesses that are a strong fit.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4">
          {[
            'Class attendees',
            'Referral partners',
            'Businesses that show a desire to streamline and grow',
          ].map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-slate-700">
              {item}
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-slate-500">
          “We do not accept every application.”
        </p>
      </div>
    </section>
  );
}
