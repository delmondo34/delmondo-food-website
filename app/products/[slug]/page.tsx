import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProductBySlug, getProductGalleryImages, getProducts } from '@/lib/content';
import { ProductGallerySlider } from '@/components/product-gallery-slider';

export function generateStaticParams() {
  return getProducts().map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: 'Ürün Bulunamadı | Del Mondo Food' };
  }

  return {
    title: `${product.name} | Del Mondo Food`,
    description: product.shortDescription,
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  const galleryImages = getProductGalleryImages(params.slug);
  const sliderImages = Array.from(new Set([product.image, ...galleryImages]));

  return (
    <div className="w-full">
      {/* ─── BREADCRUMB ─── */}
      <div className="border-b border-slate-200 bg-mist">
        <div className="mx-auto w-full max-w-7xl px-6 py-3 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-steel">
            <Link href="/" className="transition-colors hover:text-primary">Anasayfa</Link>
            <span>/</span>
            <Link href="/products" className="transition-colors hover:text-primary">Ürünler</Link>
            <span>/</span>
            <span className="font-medium text-ink">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 lg:px-8">
        {/* ─── HERO ─── */}
        <section className="grid gap-10 rounded-xl border border-slate-200 bg-white p-8 shadow-soft md:grid-cols-2 md:p-10">
          <div className="group relative min-h-[400px] overflow-hidden rounded-xl border border-slate-200 bg-slate-50 md:min-h-[480px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              FELIX Food 1.6
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink md:text-4xl">{product.name}</h1>
            <p className="mt-5 text-base leading-7 text-steel">{product.shortDescription}</p>
            <p className="mt-3 text-sm font-medium text-primary">{product.heroNote}</p>

            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-ink">Kullanım Alanları</h2>
              <ul className="mt-4 space-y-2">
                {product.useCases.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-steel">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary-dark"
            >
              Teklif Al
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ─── GALLERY ─── */}
        <ProductGallerySlider images={sliderImages} productName={product.name} />

        {/* ─── BOX CONTENTS ─── */}
        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-xl font-semibold text-ink">Kutu İçeriği</h2>
          <ul className="mt-5 grid gap-3 text-sm leading-6 text-steel md:grid-cols-2">
            {product.boxContents.map((item) => (
              <li key={item} className="flex items-start gap-2.5 rounded-lg bg-mist p-3">
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* ─── SPECS TABLE ─── */}
        <section className="mt-10 rounded-xl border border-slate-200 bg-white p-8 shadow-soft">
          <h2 className="text-xl font-semibold text-ink">Teknik Özellikler</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-sm">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-5 text-left text-xs font-semibold uppercase tracking-wider text-steel">Özellik</th>
                  <th className="py-3 text-left text-xs font-semibold uppercase tracking-wider text-steel">Değer</th>
                </tr>
              </thead>
              <tbody>
                {product.specs.map((spec, idx) => (
                  <tr key={spec.label} className={`border-b border-slate-100 last:border-b-0 ${idx % 2 === 0 ? 'bg-mist/50' : ''}`}>
                    <th className="w-1/3 py-3.5 pr-5 text-left font-medium text-ink">{spec.label}</th>
                    <td className="py-3.5 text-steel">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ─── VIDEO ─── */}
        {product.videoUrl && (
          <section className="mt-10 rounded-xl border border-slate-200 bg-white p-8 shadow-soft">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-ink">Ürün Videosu</h2>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-100 shadow-inner">
              <iframe
                src={`https://www.youtube.com/embed/${new URL(product.videoUrl).searchParams.get('v')}`}
                title={`${product.name} Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              ></iframe>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
