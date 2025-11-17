import Spline from '@splinetool/react-spline';

function SparkIcon({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M12 2c.3 2.7 1.8 4.2 4.5 4.5C13.8 7 12.3 8.5 12 11.2 11.7 8.5 10.2 7 7.5 6.5 10.2 6.2 11.7 4.7 12 2Z" fill="currentColor"/>
      <path d="M12 13.5c.2 1.8 1.2 2.8 3 3-1.8.2-2.8 1.2-3 3-.2-1.8-1.2-2.8-3-3 1.8-.2 2.8-1.2 3-3Z" fill="currentColor"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
              <SparkIcon className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Unlock 5–10 Hours a Week With AI — Apply for a Personalized Automation Strategy Session
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-600 md:text-lg">
              A private, small-batch review available only to AI class attendees. Limited slots open each month. Applications reviewed in order received.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-12 md:pb-16">
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.05)] backdrop-blur-sm">
            <p className="text-center text-sm font-medium text-slate-500">
              Trusted By Business Owners Across Maryland, DC & Virginia
            </p>
            <div className="mt-6 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-10 rounded-md bg-slate-100/80 blur-[0.3px] grayscale"></div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-slate-500">
              350+ business owners have already attended our AI training sessions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
