import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/content';

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: 'Yazı Bulunamadı | Del Mondo Food' };
  }

  return {
    title: `${post.title} | Del Mondo Food`,
    description: post.excerpt,
  };
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="w-full bg-surface min-h-screen pb-24">
      {/* ─── PREMIUM ARTICLE HEADER ─── */}
      <header className="relative bg-white py-16 sm:py-24 border-b border-slate-100">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-mist/50 blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm font-medium text-slate-500">
            <Link href="/" className="transition-colors hover:text-primary">Anasayfa</Link>
            <span className="text-slate-300">/</span>
            <Link href="/blog" className="transition-colors hover:text-primary">Blog Merkezi</Link>
            <span className="text-slate-300">/</span>
            <span className="text-navy line-clamp-1">{post.title}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex rounded-md bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary border border-primary/20">
              Sektörel İnceleme
            </span>
            <span className="text-sm font-medium text-slate-500 tracking-wide">{post.date}</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-navy sm:text-5xl lg:text-[3.5rem] leading-tight sm:leading-[1.1]">
            {post.title}
          </h1>

          {post.author && (
            <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-primary font-bold text-lg border border-slate-200">
                {post.author.charAt(0)}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-navy">{post.author}</span>
                <span className="text-xs text-slate-500 font-medium tracking-wide border-t border-transparent">Del Mondo Food Research</span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ─── ARTICLE CONTENT ─── */}
      <div className="mx-auto w-full max-w-5xl px-6 lg:px-8 py-12 relative z-20">
        <article className="rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden">
          <div className="p-8 sm:p-14">
            {post.excerpt && (
              <p className="text-xl leading-relaxed text-slate-600 font-medium italic border-l-4 border-primary pl-6 mb-12 bg-mist/50 py-4 pr-4 rounded-r-lg">
                {post.excerpt}
              </p>
            )}

            <div className="prose prose-lg prose-slate max-w-none 
              prose-headings:font-bold prose-headings:text-navy prose-headings:tracking-tight 
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-slate-100 prose-h2:pb-4
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:text-navy-light
              prose-p:leading-8 prose-p:text-slate-600
              prose-a:text-primary prose-a:font-semibold prose-a:no-underline prose-a:transition hover:prose-a:text-primary-dark
              prose-li:text-slate-600 prose-li:marker:text-primary
              prose-strong:text-navy prose-strong:font-bold
              prose-blockquote:border-primary prose-blockquote:bg-surface prose-blockquote:py-3 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-slate-700 prose-blockquote:shadow-sm
              prose-img:rounded-xl prose-img:shadow-soft">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
