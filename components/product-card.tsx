import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/content';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#e8dcda] bg-white shadow-soft transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-26px_rgba(17,42,122,0.32)]">
      <div className="relative h-72 w-full overflow-hidden rounded-t-2xl bg-gradient-to-b from-[#f9f8f7] to-white md:h-80">
        <div className="absolute inset-x-6 top-5 h-9 rounded-full bg-white/80 blur-md" />
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="rounded-t-2xl object-contain p-5 transition-transform duration-500 group-hover:scale-[1.04] group-hover:-translate-y-1"
        />
      </div>
      <div className="space-y-4 p-7">
        <h3 className="text-[1.95rem] font-semibold leading-tight text-ink">{product.name}</h3>
        <p className="text-sm leading-6 text-steel">{product.shortDescription}</p>
        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-primary"
        >
          Ürünü İncele
          <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
