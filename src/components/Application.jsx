import { useState } from 'react';

export default function Application() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    industry: '',
    bottleneck: '',
    hours: '',
    openToSystems: 'Yes',
    timeframe: 'ASAP',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    try {
      const base = import.meta.env.VITE_BACKEND_URL || '';
      const res = await fetch(`${base}/apply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus('Application received. We’ll review and respond shortly.');
      setForm({
        name: '', email: '', business: '', industry: '', bottleneck: '', hours: '', openToSystems: 'Yes', timeframe: 'ASAP'
      });
    } catch (e) {
      setStatus('There was an issue submitting. Please try again.');
    }
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Apply Below — Spaces Are Limited
          </h2>
          <p className="mt-4 text-slate-600">
            If selected, you’ll receive the next available scheduling link and preparation details.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Full Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" required />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" required />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Business Name</label>
              <input name="business" value={form.business} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" required />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700">What industry are you in?</label>
              <input name="industry" value={form.industry} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" required />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700">What’s the biggest bottleneck in your workflow?</label>
              <textarea name="bottleneck" value={form.bottleneck} onChange={handleChange} rows={4} className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" required />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700">How many hours/week do you want to reclaim?</label>
              <input name="hours" value={form.hours} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400" required />
            </div>
            <div className="md:col-span-1">
              <label className="block text-sm font-medium text-slate-700">Are you open to implementing new systems if recommended?</label>
              <select name="openToSystems" value={form.openToSystems} onChange={handleChange} className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-400">
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700">How soon are you looking to improve efficiency?</label>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {['ASAP','1–3 months','Just exploring'].map((v) => (
                  <button type="button" key={v} onClick={() => setForm((f)=>({...f, timeframe: v}))} className={`rounded-lg border px-3 py-2 text-sm ${form.timeframe===v ? 'border-emerald-400 bg-emerald-50 text-emerald-700' : 'border-slate-200 bg-slate-50 text-slate-700'}`}>{v}</button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button type="submit" className="w-full rounded-xl bg-emerald-500 px-4 py-3 font-medium text-white shadow hover:bg-emerald-600 transition">
              Apply for a Strategy Session
            </button>
            <p className="mt-3 text-center text-xs text-slate-500">
              We review applications in order received. Most months fill within 72 hours.
            </p>
            {status && <p className="mt-3 text-center text-sm text-slate-600">{status}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
