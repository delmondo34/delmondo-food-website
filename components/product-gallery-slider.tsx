'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';

type Props = {
  images: string[];
  productName: string;
};

export function ProductGallerySlider({ images, productName }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const total = images.length;

  const currentImage = useMemo(() => images[activeIndex], [images, activeIndex]);

  if (total === 0) return null;

  const goNext = () => setActiveIndex((prev) => (prev + 1) % total);
  const goPrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  return (
    <>
      <section className="mt-10 rounded-xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-ink">Ürün Görsel Galerisi</h2>
          <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-steel">
            {activeIndex + 1} / {total}
          </span>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
          <button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            className="relative block h-[360px] w-full cursor-zoom-in md:h-[500px]"
            aria-label="Görseli büyüt"
          >
            <Image src={currentImage} alt={`${productName} görsel ${activeIndex + 1}`} fill className="object-contain p-4" />
          </button>

          {total > 1 ? (
            <>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-ink shadow-card transition-all duration-200 hover:border-primary hover:text-primary"
                aria-label="Önceki görsel"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-card transition-all duration-200 hover:bg-primary-dark"
                aria-label="Sonraki görsel"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          ) : null}
        </div>

        {total > 1 ? (
          <div className="mt-4 grid grid-cols-4 gap-3 md:grid-cols-7">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative h-16 overflow-hidden rounded-lg border-2 transition-all duration-200 ${index === activeIndex ? 'border-primary shadow-sm' : 'border-slate-200 hover:border-slate-300'
                  }`}
                aria-label={`Görsel ${index + 1}`}
              >
                <Image src={image} alt={`${productName} küçük görsel ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        ) : null}
      </section>

      {isLightboxOpen ? (
        <div className="fixed inset-0 z-50 bg-black/85 p-4 backdrop-blur-sm md:p-8">
          <div className="mx-auto flex h-full w-full max-w-6xl flex-col">
            <div className="mb-3 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-ink shadow-card transition hover:bg-slate-100"
                aria-label="Kapat"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative flex-1 overflow-hidden rounded-xl bg-black">
              <Image src={currentImage} alt={`${productName} büyük görsel ${activeIndex + 1}`} fill className="object-contain" />
              {total > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-ink shadow transition hover:bg-white"
                    aria-label="Önceki görsel"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow transition hover:bg-primary-dark"
                    aria-label="Sonraki görsel"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
