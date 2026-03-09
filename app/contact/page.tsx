import Image from 'next/image';
import { getContactContent } from '@/lib/content';

export const metadata = {
  title: 'İletişim | Del Mondo Food',
};

export default function ContactPage() {
  const contact = getContactContent();

  return (
    <div className="w-full">
      {/* ─── HERO SECTION ─── */}
      <section className="relative isolate min-h-[72vh] overflow-hidden md:min-h-[80vh]">
        {/* Arka plan görseli */}
        <div className="absolute inset-0">
          <Image
            src="/images/chef-working-together-professional-kitchen.jpg"
            alt="Profesyonel mutfakta çalışan şefler"
            fill
            className="object-cover object-center md:object-[center_35%]"
            priority
          />
        </div>
        {/* Overlay katmanları */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/15" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-mist/70 via-mist/20 to-transparent pointer-events-none" />

        {/* İçerik */}
        <div className="relative mx-auto flex min-h-[72vh] w-full max-w-7xl items-center px-6 pt-28 pb-20 md:min-h-[80vh] md:pt-36 lg:px-8">
          <div className="max-w-2xl rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-sm shadow-glass md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Bize Ulaşın
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              {contact.title}
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/85">
              {contact.description}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {/* ─── CONTACT INFO ─── */}
          <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">Kurumsal Bilgiler</h2>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Adres</p>
                  <p className="mt-1 text-sm text-steel">{contact.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">E-posta</p>
                  <a href={`mailto:${contact.email}`} className="mt-1 text-sm text-primary transition hover:text-primary-dark">
                    {contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Telefon</p>
                  <p className="mt-1 text-sm text-steel">{contact.phone}</p>
                </div>
              </div>
            </div>
          </section>

          {/* ─── CONTACT FORM ─── */}
          <section className="rounded-xl border border-slate-200 bg-white p-8 shadow-soft">
            <h2 className="text-xl font-semibold text-ink">İletişim Formu</h2>
            <form className="mt-6 space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-ink">Ad Soyad</label>
                <input
                  id="fullName"
                  name="fullName"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Adınız Soyadınız"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink">Kurumsal E-posta</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="ad@firma.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-ink">Firma</label>
                <input
                  id="company"
                  name="company"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Firma Adı"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-ink">Mesajınız</label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1.5 min-h-[130px] w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-ink transition-colors duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Projeniz hakkında bilgi verin..."
                />
              </div>
              <label className="flex items-start gap-3 rounded-lg border border-slate-200 bg-mist/60 px-4 py-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  name="approval"
                  required
                  className="mt-0.5 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/30"
                />
                <span>İletişim amacıyla verilerimin işlenmesini onaylıyorum.</span>
              </label>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl"
              >
                Mesaj Gönder
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
