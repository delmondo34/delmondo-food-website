import Image from 'next/image';
import Link from 'next/link';
import { SectionTitle } from '@/components/section-title';
import { ProductCard } from '@/components/product-card';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import { getHomeContent, getProducts } from '@/lib/content';

const benefitIcons = [
  // Precision / Repeatability
  <svg key="precision" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  // Innovation / Speed
  <svg key="innovation" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  // Efficiency / Automation
  <svg key="efficiency" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>,
];

export default function HomePage() {
  const home = getHomeContent();
  const products = getProducts();

  return (
    <div className="w-full">
      {/* ─── HERO SECTION ─── */}
      <section className="relative isolate min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-chef.jpg"
            alt="Profesyonel mutfakta şef hazırlık görseli"
            fill
            className="object-cover object-center md:object-[center_38%]"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/48 to-black/15" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-mist/70 via-mist/20 to-transparent pointer-events-none" />

        <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-32 pb-20 md:pt-40 lg:px-8">
          <div className="max-w-3xl rounded-3xl border border-white/5 bg-black/20 p-8 backdrop-blur-sm shadow-glass md:p-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Profesyonel & Butik Çözümler
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {home.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/85">
              {home.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href={home.heroButtonLink}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-primary-dark"
              >
                {home.heroButtonText}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                İletişime Geçin
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <section className="border-b border-slate-200 bg-mist">
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-6 px-6 py-8 md:grid-cols-4 lg:px-8">
          {home.socialProof.map((item, idx) => (
            <AnimateOnScroll key={item} variant="fade-up" delay={idx * 80}>
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-bold text-sm">
                  0{idx + 1}
                </div>
                <p className="text-sm font-medium text-ink leading-snug">{item}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <AnimateOnScroll variant="fade-up">
          <SectionTitle
            kicker="Faydalar"
            title="3D Gıda Yazıcı ile Stratejik Avantaj"
            description="Endüstriyel üretim disiplinine uyum sağlayan baskı süreçleriyle kalite, hız ve inovasyonu aynı anda yönetin."
          />
        </AnimateOnScroll>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {home.benefits.map((benefit, index) => (
            <AnimateOnScroll key={benefit.title} variant="fade-up" delay={index * 120}>
              <article
                className="group relative rounded-xl border border-slate-200 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20">
                  {benefitIcons[index] || benefitIcons[0]}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-ink">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{benefit.description}</p>
                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-b-xl bg-primary transition-all duration-500 group-hover:w-full" />
              </article>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ─── PRODUCTS ─── */}
      <section className="bg-mist">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <AnimateOnScroll variant="fade-up">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
              <SectionTitle
                kicker="Ürünler"
                title="FELIX Food 1.6 Serisi"
                description="Farklı üretim ihtiyaçları için optimize edilmiş üç profesyonel model."
              />
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-200 hover:border-primary hover:text-primary"
              >
                Tüm Ürünler
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {products.map((product, index) => (
              <AnimateOnScroll key={product.slug} variant="fade-up" delay={index * 120}>
                <ProductCard product={product} />
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section className="border-t border-[#e4eaf5] bg-[#f4f7fd]">
        <AnimateOnScroll variant="fade-up">
          <div className="mx-auto w-full max-w-7xl px-6 py-20 text-center lg:px-8">
            <p className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              İletişim
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">
              Projeniz İçin Teknik Görüşme Planlayın
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-steel">
              Endüstriyel 3D gıda yazıcı ihtiyaçlarınızı değerlendirmek ve projenize özel çözüm sunmak için ekibimizle iletişime geçin.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-dark hover:shadow-xl"
              >
                Teklif Talebi Oluşturun
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Bizi Tanıyın
              </Link>
            </div>
          </div>
        </AnimateOnScroll>
      </section>
    </div>
  );
}
