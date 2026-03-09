import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type KVSpec = {
  label: string;
  value: string;
};

export type Product = {
  slug: string;
  name: string;
  shortDescription: string;
  heroNote: string;
  useCases: string[];
  boxContents: string[];
  image: string;
  specs: KVSpec[];
  videoUrl?: string;
};

export type HomeContent = {
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  heroButtonLink: string;
  benefits: { title: string; description: string }[];
  socialProof: string[];
};

export type AboutContent = {
  intro: string;
  visionTitle: string;
  vision: string;
  missionTitle: string;
  mission: string;
  whyUsTitle: string;
  whyUs: string[];
  coffeeConnectionTitle: string;
  coffeeConnection: string;
};

export type ContactContent = {
  title: string;
  description: string;
  address: string;
  email: string;
  phone: string;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

const root = process.cwd();

function readJSON<T>(filePath: string): T {
  const fullPath = path.join(root, filePath);
  return JSON.parse(fs.readFileSync(fullPath, 'utf-8')) as T;
}

export function getHomeContent(): HomeContent {
  return readJSON<HomeContent>('content/site/home.json');
}

export function getAboutContent(): AboutContent {
  return readJSON<AboutContent>('content/site/about.json');
}

export function getContactContent(): ContactContent {
  return readJSON<ContactContent>('content/site/contact.json');
}

export function getProducts(): Product[] {
  const productsDir = path.join(root, 'content/products');
  return fs
    .readdirSync(productsDir)
    .filter((file) => file.endsWith('.json'))
    .map((file) => readJSON<Product>(`content/products/${file}`))
    .sort((a, b) => a.name.localeCompare(b.name, 'tr'));
}

export function getProductBySlug(slug: string): Product | null {
  const filePath = path.join(root, 'content/products', `${slug}.json`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return readJSON<Product>(`content/products/${slug}.json`);
}

export function getBlogPosts(): BlogPostMeta[] {
  const blogDir = path.join(root, 'content/blog');
  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
      const { data } = matter(raw);
      return {
        slug: file.replace(/\.md$/, ''),
        title: String(data.title || ''),
        excerpt: String(data.excerpt || ''),
        date: String(data.date || ''),
        author: String(data.author || ''),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(root, 'content/blog', `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: String(data.title || ''),
    excerpt: String(data.excerpt || ''),
    date: String(data.date || ''),
    author: String(data.author || ''),
    tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
    content,
  };
}

export function getProductGalleryImages(slug: string): string[] {
  const galleryDir = path.join(root, 'public/images/products', slug);
  if (!fs.existsSync(galleryDir)) {
    return [];
  }

  return fs
    .readdirSync(galleryDir)
    .filter((file) => /\.(png|jpe?g|webp|avif)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, 'tr'))
    .map((file) => `/images/products/${slug}/${file}`);
}
