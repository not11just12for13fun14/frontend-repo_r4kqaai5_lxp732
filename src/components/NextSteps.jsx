export default function NextSteps() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            What Happens After You Apply?
          </h2>
        </div>

        <ol className="mx-auto mt-10 max-w-3xl list-decimal space-y-4 pl-6 text-slate-700">
          <li>We review your application to see if you’re a good fit for this type of session.</li>
          <li>If selected, you’ll receive a private scheduling link.</li>
          <li>We prepare your automation insights before the session so every minute is impactful.</li>
          <li>You receive your personalized recommendations during the session.</li>
        </ol>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate-500">
          Not every business is accepted — we want to ensure the advice you receive is meaningful and actionable.
        </p>
      </div>
    </section>
  );
}
