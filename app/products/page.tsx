import Image from 'next/image';
import { ProductCard } from '@/components/product-card';
import { SectionTitle } from '@/components/section-title';
import { getProducts } from '@/lib/content';

export const metadata = {
  title: 'Ürünler | Del Mondo Food',
};

const accessoryProducts = [
  {
    name: 'Premium Paslanmaz Çelik Plunger',
    detail: 'Tekli premium plunger çözümü',
    image: '/images/accessories/premium-paslanmaz-celik-plunger.png',
  },
  {
    name: 'Premium Paslanmaz Çelik Şırınga (70 ml)',
    detail: 'Tekli premium şırınga',
    image: '/images/accessories/premium-paslanmaz-celik-siringa-70ml.png',
  },
  {
    name: 'Premium Şırınga + Plunger (70 ml)',
    detail: 'Premium set kombinasyonu',
    image: '/images/accessories/premium-siringa-plunger-70ml.png',
  },
  {
    name: 'Premium Paslanmaz Çelik Şırınga (2x)',
    detail: 'İkili premium şırınga seti',
    image: '/images/accessories/premium-paslanmaz-celik-siringa-2x.png',
  },
  {
    name: 'Premium Paslanmaz Çelik Şırınga (4x)',
    detail: 'Dörtlü premium şırınga seti',
    image: '/images/accessories/premium-paslanmaz-celik-siringa-4x.png',
  },
  {
    name: 'Basic Plastik Şırınga + Plunger (100 ml)',
    detail: 'Tekli basic set',
    image: '/images/accessories/basic-plastik-siringa-plunger-100ml.png',
  },
  {
    name: 'Basic Şırınga + Plunger Set (5x)',
    detail: '5’li basic set paketi',
    image: '/images/accessories/basic-siringa-plunger-set-5x.png',
  },
  {
    name: 'Basic Şırınga + Plunger Set (10x)',
    detail: '10’lu basic set paketi',
    image: '/images/accessories/basic-siringa-plunger-set-10x.png',
  },
  {
    name: 'Basic Şırınga + Plunger Set (20x)',
    detail: '20’li basic set paketi',
    image: '/images/accessories/basic-siringa-plunger-set-20x.png',
  },
];

const needleProducts = [
  {
    name: 'Paslanmaz Çelik Nozzle - Ø0.5mm (Premium)',
    detail: 'Premium yazıcılar için hassas uç',
    image: '/images/accessories/paslanmaz-celik-nozzle-05mm-premium.png',
  },
  {
    name: 'Paslanmaz Çelik Nozzle - Ø1mm (Premium)',
    detail: 'Premium yazıcılar için kontrollü akış ucu',
    image: '/images/accessories/paslanmaz-celik-nozzle-1mm-premium.png',
  },
  {
    name: 'Paslanmaz Çelik Nozzle - Ø2mm (Premium)',
    detail: 'Premium yazıcılar için orta çap nozzle',
    image: '/images/accessories/paslanmaz-celik-nozzle-2mm-premium.png',
  },
  {
    name: 'Paslanmaz Çelik Nozzle - Ø3mm (Premium)',
    detail: 'Premium yazıcılar için yüksek akış ucu',
    image: '/images/accessories/paslanmaz-celik-nozzle-3mm-premium.png',
  },
  {
    name: 'Paslanmaz Çelik Nozzle - Ø4mm (Premium)',
    detail: 'Premium yazıcılar için geniş akış ucu',
    image: '/images/accessories/paslanmaz-celik-nozzle-4mm-premium.png',
  },
  {
    name: 'Plastic Twist Cap (Premium)',
    detail: 'Premium yazıcılar için twist kapak',
    image: '/images/accessories/plastic-twist-cap-premium.png',
  },
  {
    name: 'Premium Nozzle Set (Tüm Ölçüler)',
    detail: 'Premium yazıcılar için tüm nozzle ölçülerini içeren set',
    image: '/images/accessories/premium-nozzle-set-tum-olculer.png',
  },
  {
    name: 'Nozzle Adapter (Basic)',
    detail: 'Basic yazıcılar için nozzle adaptörü',
    image: '/images/accessories/nozzle-adapter-basic.png',
  },
  {
    name: 'Luer Nozzle (2x) - Ø1.6mm (Basic)',
    detail: 'Basic yazıcılar için 2’li luer nozzle seti',
    image: '/images/accessories/luer-nozzle-2x-16mm-basic.png',
  },
  {
    name: 'Luer Nozzle (2x) - Ø3.5mm (Basic)',
    detail: 'Basic yazıcılar için 2’li geniş çap luer nozzle',
    image: '/images/accessories/luer-nozzle-2x-35mm-basic.png',
  },
  {
    name: 'Luer Nozzle (2x) - Ø2.5mm (Basic)',
    detail: 'Basic yazıcılar için 2’li orta çap luer nozzle',
    image: '/images/accessories/luer-nozzle-2x-25mm-basic.png',
  },
  {
    name: 'Luer Twist Cap (5x) (Basic)',
    detail: 'Basic yazıcılar için 5’li twist kapak seti',
    image: '/images/accessories/luer-twist-cap-5x-basic.png',
  },
  {
    name: 'Basic Şırınga İçin Nozzle Seti',
    detail: 'Basic şırınga uyumlu nozzle çözümü',
    image: '/images/accessories/basic-siringa-nozzle-seti.png',
  },
];

const extraAccessoryProducts = [
  {
    name: 'Silikon Mat (26 x 27 cm)',
    detail: 'Gıda uyumlu silikon çalışma yüzeyi',
    image: '/images/accessories/silikon-mat-26x27.jpg',
  },
  {
    name: 'Paslanmaz Çelik Flexplate (Foodsafe)',
    detail: 'Gıda güvenli esnek baskı tablası',
    image: '/images/accessories/paslanmaz-celik-flexplate-foodsafe.png',
  },
  {
    name: 'Cam Build Plate',
    detail: 'Isıya dayanıklı cam baskı tablası',
    image: '/images/accessories/cam-build-plate.png',
  },
  {
    name: 'Accessory Bundle - Food',
    detail: 'Gıda uygulamaları için kapsamlı aksesuar seti',
    image: '/images/accessories/accessory-bundle-food.png',
  },
  {
    name: 'Küçük Temizlik Fırçası (Şırınga) - FELIX Food',
    detail: 'Hassas temizlik için küçük fırça',
    image: '/images/accessories/kucuk-temizlik-fircasi-siringa-felix-food.png',
  },
  {
    name: 'Büyük Temizlik Fırçası (Şırınga) - FELIX Food',
    detail: 'Derin temizlik için büyük fırça',
    image: '/images/accessories/buyuk-temizlik-fircasi-siringa-felix-food.png',
  },
  {
    name: 'Cleaning Brush Bundle',
    detail: 'Çoklu temizlik fırçası paketi',
    image: '/images/accessories/cleaning-brush-bundle.png',
  },
  {
    name: 'Replacement O-ring Bundle',
    detail: 'Yedek O-ring seti',
    image: '/images/accessories/replacement-o-ring-bundle.png',
  },
  {
    name: 'Replacement PTFE Ring Bundle',
    detail: 'Yedek PTFE ring seti',
    image: '/images/accessories/replacement-ptfe-ring-bundle.png',
  },
  {
    name: 'Piping Bag 53 x 28 cm - 100 Adet',
    detail: '100’lü piping bag paketi',
    image: '/images/accessories/piping-bag-53x28-100-adet.jpg',
  },
];

const upgradeProducts = [
  {
    name: 'Basic Syringe Heater (Basic Syringe Included)',
    detail: 'Basic şırınga dahil ısıtıcı yükseltmesi',
    image: '/images/accessories/basic-syringe-heater.png',
  },
  {
    name: 'Premium Syringe Heater (Premium Syringe Included)',
    detail: 'Premium şırınga dahil ısıtıcı yükseltmesi',
    image: '/images/accessories/premium-syringe-heater.png',
  },
];

export default function ProductsPage() {
  const products = getProducts().map((product) =>
    product.slug === 'felix-food-1-6-single-head'
      ? { ...product, image: '/images/products/felix-food-1-6-single-head/02.png' }
      : product
  );

  return (
    <div className="w-full">
      {/* ─── HERO ─── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#e8eef9] via-mist to-[#dce6f6] pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -right-16 bottom-0 h-[320px] w-[320px] rounded-full bg-accent/10 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Ürün Portföyü
              </div>
              <h1 className="mt-6 text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Ürünler
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-steel">
                Distribütörlüğünü yürüttüğümüz FELIX Food 1.6 ailesi, farklı üretim senaryoları için endüstriyel 3D gıda yazıcılar ve uyumlu aksesuar çözümleri sunar.
              </p>

              <div className="mt-10 flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">3</span>
                  <span className="mt-0.5 text-xs font-medium uppercase tracking-widest text-steel">Yazıcı Modeli</span>
                </div>
                <div className="h-10 w-px bg-slate-300" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">30+</span>
                  <span className="mt-0.5 text-xs font-medium uppercase tracking-widest text-steel">Uyumlu Aksesuar</span>
                </div>
                <div className="h-10 w-px bg-slate-300" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">CE</span>
                  <span className="mt-0.5 text-xs font-medium uppercase tracking-widest text-steel">Uygun Platform</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex lg:justify-end">
              <div className="relative w-80">
                <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-primary/15 bg-white/60 backdrop-blur-sm" />
                <div className="absolute -right-2 -top-2 h-full w-full rounded-2xl border border-primary/20 bg-white/70 backdrop-blur-sm" />
                <div className="relative rounded-2xl border border-primary/20 bg-white p-8 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5h10.5m-10.5 4.5h10.5m-10.5 4.5h6.75M3.75 5.25A2.25 2.25 0 016 3h12a2.25 2.25 0 012.25 2.25v13.5A2.25 2.25 0 0118 21H6a2.25 2.25 0 01-2.25-2.25V5.25z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-ink">Ürün Grupları</span>
                  </div>
                  <div className="mt-6 space-y-3">
                    {['3D Gıda Yazıcılar', 'Şırıngalar ve Nozzle Uçları', 'Ek Aksesuarlar ve Upgrades'].map((topic) => (
                      <div key={topic} className="flex items-center gap-3 rounded-lg bg-mist px-3 py-2.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-xs text-steel">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 h-px bg-slate-200" />
                  <p className="mt-4 text-xs text-slate-400">Del Mondo Food ürün ekosistemi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRODUCT GRID ─── */}
      <div className="mx-auto w-full max-w-7xl px-6 pb-20 pt-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 2xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>

      {/* ─── ACCESSORIES GRID ─── */}
      <section className="border-t border-[#e9eef7] bg-[#f8fbff]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            kicker="Aksesuarlar"
            title="Şırıngalar"
            description="FELIX Food 1.6 serisi için uyumlu şırınga, plunger ve set seçenekleri. Fiyat bilgisi için ekibimizle iletişime geçebilirsiniz."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {accessoryProducts.map((item) => (
              <article
                key={item.name}
                className="group rounded-2xl border border-[#dde5f4] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(17,42,122,0.28)]"
              >
                {item.image ? (
                  <div className="relative mb-4 h-44 overflow-hidden rounded-xl border border-[#e7edf7] bg-white">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-4" />
                  </div>
                ) : null}
                <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  Uyumlu Aksesuar
                </div>
                <h3 className="text-xl font-semibold leading-tight text-ink">{item.name}</h3>
                <p className="mt-3 text-sm text-steel">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── NEEDLES GRID ─── */}
      <section className="border-t border-[#e9eef7] bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            kicker="Aksesuarlar"
            title="İğneler"
            description="Premium ve basic yazıcı konfigürasyonları için uyumlu nozzle, luer ve adaptör ürünleri. Uygun set seçimi için bizimle iletişime geçin."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {needleProducts.map((item) => (
              <article
                key={item.name}
                className="group rounded-2xl border border-[#dde5f4] bg-[#fbfdff] p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(17,42,122,0.28)]"
              >
                {item.image ? (
                  <div className="relative mb-4 h-44 overflow-hidden rounded-xl border border-[#e7edf7] bg-white">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-4" />
                  </div>
                ) : null}
                <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  Nozzle / İğne
                </div>
                <h3 className="text-xl font-semibold leading-tight text-ink">{item.name}</h3>
                <p className="mt-3 text-sm text-steel">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── EXTRA ACCESSORIES GRID ─── */}
      <section className="border-t border-[#e9eef7] bg-[#f8fbff]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            kicker="Aksesuarlar"
            title="Ek Aksesuarlar"
            description="Kurulum, temizlik ve günlük operasyon süreçlerinde ihtiyaç duyulan tamamlayıcı ekipmanlar."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {extraAccessoryProducts.map((item) => (
              <article
                key={item.name}
                className="group rounded-2xl border border-[#dde5f4] bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(17,42,122,0.28)]"
              >
                {item.image ? (
                  <div className="relative mb-4 h-44 overflow-hidden rounded-xl border border-[#e7edf7] bg-white">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-4" />
                  </div>
                ) : null}
                <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  Ek Aksesuar
                </div>
                <h3 className="text-xl font-semibold leading-tight text-ink">{item.name}</h3>
                <p className="mt-3 text-sm text-steel">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── UPGRADES GRID ─── */}
      <section className="border-t border-[#e9eef7] bg-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle
            kicker="Konfigürasyon"
            title="Upgrades"
            description="Yazıcınızı kullanım amacınıza göre yükseltmek için ısıtıcı ve şırınga tabanlı upgrade seçenekleri."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {upgradeProducts.map((item) => (
              <article
                key={item.name}
                className="group rounded-2xl border border-[#dde5f4] bg-[#fbfdff] p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(17,42,122,0.28)]"
              >
                {item.image ? (
                  <div className="relative mb-4 h-44 overflow-hidden rounded-xl border border-[#e7edf7] bg-white">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-4" />
                  </div>
                ) : null}
                <div className="mb-4 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                  Upgrade
                </div>
                <h3 className="text-xl font-semibold leading-tight text-ink">{item.name}</h3>
                <p className="mt-3 text-sm text-steel">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
