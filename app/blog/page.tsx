import { BlogCard } from '@/components/blog-card';
import { getBlogPosts } from '@/lib/content';
import { AnimateOnScroll } from '@/components/animate-on-scroll';

export const metadata = {
  title: 'Blog | Del Mondo Food',
  description: 'Endüstriyel 3D gıda yazıcı teknolojileri, sektör analizleri ve operasyon ipuçları.',
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="w-full">

      {/* ─── HERO ─── */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#e8eef9] via-mist to-[#dce6f6] pt-28 pb-20 md:pt-36 md:pb-28">


        {/* Dekoratif ışık daireleri */}
        <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute -right-16 bottom-0 h-[320px] w-[320px] rounded-full bg-accent/10 blur-[100px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Sol — Metin */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Sektörel İçgörüler
              </div>
              <h1 className="mt-6 text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Blog
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-steel">
                Endüstriyel mutfaklarda operasyon verimliliği, 3D gıda yazıcı teknolojileri ve sektör dinamiklerine dair profesyonel analizler.
              </p>

              {/* Stat row */}
              <div className="mt-10 flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">3D</span>
                  <span className="mt-0.5 text-xs font-medium uppercase tracking-widest text-steel">Yazıcı Teknolojisi</span>
                </div>
                <div className="h-10 w-px bg-slate-300" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">B2B</span>
                  <span className="mt-0.5 text-xs font-medium uppercase tracking-widest text-steel">Sektör Analizleri</span>
                </div>
                <div className="h-10 w-px bg-slate-300" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">CE</span>
                  <span className="mt-0.5 text-xs font-medium uppercase tracking-widest text-steel">Sertifikalı Çözümler</span>
                </div>
              </div>
            </div>

            {/* Sağ — Dekoratif kart yığını */}
            <div className="hidden lg:flex lg:justify-end">
              <div className="relative w-80">
                {/* Arka kartlar */}
                <div className="absolute -right-4 -top-4 h-full w-full rounded-2xl border border-primary/15 bg-white/60 backdrop-blur-sm" />
                <div className="absolute -right-2 -top-2 h-full w-full rounded-2xl border border-primary/20 bg-white/70 backdrop-blur-sm" />
                {/* Ön kart */}
                <div className="relative rounded-2xl border border-primary/20 bg-white p-8 shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                      </svg>
                    </div>
                    <span className="text-sm font-semibold text-ink">Son Makaleler</span>
                  </div>
                  <div className="mt-6 space-y-3">
                    {['Endüstriyel 3D Baskı', 'Gıda Teknolojisi', 'Operasyon Verimliliği'].map((topic) => (
                      <div key={topic} className="flex items-center gap-3 rounded-lg bg-mist px-3 py-2.5">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="text-xs text-steel">{topic}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 h-px bg-slate-200" />
                  <p className="mt-4 text-xs text-slate-400">Del Mondo Food tarafından hazırlanmıştır</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLOG GRID ─── */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <AnimateOnScroll variant="fade-up">
          <div className="mb-12">
            <p className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              Makaleler
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Tüm Yazılar
            </h2>
          </div>
        </AnimateOnScroll>

        {posts.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <AnimateOnScroll key={post.slug} variant="fade-up" delay={i * 100}>
                <BlogCard post={post} />
              </AnimateOnScroll>
            ))}
          </div>
        ) : (
          <AnimateOnScroll variant="fade-up">
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-mist/50 py-24 text-center">
              <svg className="h-12 w-12 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
              <p className="mt-4 text-base font-medium text-steel">Henüz makale yayınlanmadı.</p>
              <p className="mt-1 text-sm text-slate-400">Yakında yeni içerikler burada olacak.</p>
            </div>
          </AnimateOnScroll>
        )}
      </section>

    </div>
  );
}
