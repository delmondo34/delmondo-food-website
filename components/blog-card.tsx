import Link from 'next/link';
import type { BlogPostMeta } from '@/lib/content';

export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="group relative flex h-[320px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_20px_40px_-15px_rgba(13,148,136,0.3)]">
      {/* Subtle top border accent on hover */}
      <div className="absolute left-0 top-0 h-1.5 w-full scale-x-0 bg-gradient-to-r from-primary to-[#5eead4] transition-transform duration-500 origin-left group-hover:scale-x-100" />

      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center rounded-md bg-mist px-3 py-1 text-xs font-semibold text-navy transition-colors group-hover:bg-primary/10 group-hover:text-primary">
          Sektörel Analiz
        </span>
        <span className="text-xs font-medium text-steel/80 tracking-wide">{post.date}</span>
      </div>

      <div className="mt-6 flex-1">
        <h3 className="text-2xl font-bold leading-snug text-navy transition-colors duration-300 group-hover:text-primary line-clamp-2">
          <Link href={`/blog/${post.slug}`}>
            <span className="absolute inset-0" />
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-steel">
          {post.excerpt}
        </p>
      </div>

      <div className="mt-8 flex items-center text-[15px] font-bold text-primary transition-colors duration-300 group-hover:text-primary-dark">
        Makaleyi İncele
        <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </article>
  );
}
