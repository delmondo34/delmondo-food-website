import Image from 'next/image';
import Link from 'next/link';
import { getAboutContent } from '@/lib/content';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

export const metadata = {
  title: 'Hakkımızda | Del Mondo Food',
  description: 'Del Mondo Food hakkında bilgi edinin. Vizyonumuz, misyonumuz ve neden bizi tercih etmelisiniz.',
};

const whyUsIcons = [
  // Analysis
  <svg key="a" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>,
  // Project
  <svg key="b" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  // Training
  <svg key="c" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>,
  // Partnership
  <svg key="d" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>,
];

const stats = [
  { value: '3+', label: 'Yıllık Deneyim' },
  { value: 'CE', label: 'Sertifikalı Ürünler' },
  { value: '7/5', label: 'Teknik Destek' },
  { value: '100%', label: 'Müşteri Odaklı' },
];

export default function AboutPage() {
  const about = getAboutContent();

  return (
    <div className="w-full">

      {/* ─── HERO ─── */}
      <section className="relative isolate min-h-[72vh] overflow-hidden md:min-h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/about-team.jpg"
            alt="Del Mondo Food ekibi"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-mist/70 via-mist/20 to-transparent pointer-events-none" />

        <div className="relative mx-auto flex min-h-[72vh] w-full max-w-7xl items-center px-6 pt-28 pb-20 md:min-h-[80vh] md:pt-36 lg:px-8">
          <div className="max-w-2xl rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-sm shadow-glass md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Kurumsal
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              Hakkımızda
            </h1>
            <p className="mt-5 text-lg leading-8 text-white/85">
              {about.intro}
            </p>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ─── */}
      <section className="border-b border-[#e4eaf5] bg-white">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-0 divide-x divide-slate-100 px-6 md:grid-cols-4 lg:px-8">
          {stats.map((stat, idx) => (
            <AnimateOnScroll key={stat.label} variant="fade-up" delay={idx * 80}>
              <div className="flex flex-col items-center py-8 text-center">
                <span className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</span>
                <span className="mt-1 text-xs font-medium uppercase tracking-widest text-steel">{stat.label}</span>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ─── VISION & MISSION ─── */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <AnimateOnScroll variant="fade-up">
          <div className="mb-12 max-w-2xl">
            <p className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Kimiz?
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Vizyon & Misyon
            </h2>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Vision */}
          <AnimateOnScroll variant="fade-left" delay={0}>
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark" />
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">{about.visionTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-steel">{about.vision}</p>
            </article>
          </AnimateOnScroll>

          {/* Mission */}
          <AnimateOnScroll variant="fade-right" delay={120}>
            <article className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-primary-dark" />
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-ink">{about.missionTitle}</h3>
              <p className="mt-4 text-sm leading-7 text-steel">{about.mission}</p>
            </article>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── WHY US ─── */}
      <section className="bg-[#f4f7fd]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <div className="mb-12 max-w-2xl">
              <p className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                Fark
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                {about.whyUsTitle}
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid gap-5 sm:grid-cols-2">
            {about.whyUs.map((item, idx) => (
              <AnimateOnScroll key={item} variant="fade-up" delay={idx * 100}>
                <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-elevated hover:border-primary/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    {whyUsIcons[idx] || whyUsIcons[0]}
                  </div>
                  <p className="text-sm leading-7 text-steel">{item}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COFFEE CONNECTION ─── */}
      <AnimateOnScroll variant="fade-up">
        <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/8 via-white to-primary/5 border border-primary/15 p-10 md:p-14">
            {/* Dekoratif daire */}
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/5" />
            <div className="absolute -left-8 -bottom-8 h-40 w-40 rounded-full bg-primary/5" />

            <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:gap-16">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <svg className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-ink md:text-3xl">{about.coffeeConnectionTitle}</h2>
                <p className="mt-4 text-sm leading-8 text-steel">{about.coffeeConnection}</p>
                <a
                  href="https://coffeedelmondo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-sm transition-all duration-200 hover:bg-primary hover:text-white hover:shadow-md"
                >
                  Coffee Del Mondo&apos;yu keşfet
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* ─── CTA ─── */}
      <AnimateOnScroll variant="fade-up">
        <section className="border-t border-[#e4eaf5] bg-[#f4f7fd]">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 text-center lg:px-8">
            <p className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              İletişim
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Projenizi Birlikte Planlayalım
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-steel">
              3D gıda yazıcı çözümleri hakkında uzman ekibimizden bilgi almak için bize ulaşın.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl"
              >
                İletişime Geçin
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Ürünleri İncele
              </Link>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

    </div>
  );
}
