import { defineConfig } from 'tinacms';

const branch = process.env.NEXT_PUBLIC_TINA_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'images',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'home',
        label: 'Anasayfa',
        path: 'content/site',
        format: 'json',
        match: {
          include: 'home',
        },
        ui: {
          router: () => '/',
        },
        fields: [
          { name: 'heroTitle', label: 'Hero Başlık', type: 'string', required: true },
          { name: 'heroSubtitle', label: 'Hero Alt Başlık', type: 'string', required: true },
          { name: 'heroButtonText', label: 'Buton Metni', type: 'string', required: true },
          { name: 'heroButtonLink', label: 'Buton Linki', type: 'string', required: true },
          {
            name: 'benefits',
            label: 'Faydalar',
            type: 'object',
            list: true,
            fields: [
              { name: 'title', label: 'Başlık', type: 'string', required: true },
              { name: 'description', label: 'Açıklama', type: 'string', required: true },
            ],
          },
          { name: 'socialProof', label: 'Sosyal Kanıtlar', type: 'string', list: true, required: true },
        ],
      },
      {
        name: 'about',
        label: 'Hakkımızda',
        path: 'content/site',
        format: 'json',
        match: {
          include: 'about',
        },
        ui: {
          router: () => '/about',
        },
        fields: [
          { name: 'intro', label: 'Giriş', type: 'string', required: true },
          { name: 'visionTitle', label: 'Vizyon Başlık', type: 'string', required: true },
          { name: 'vision', label: 'Vizyon Metni', type: 'string', required: true },
          { name: 'missionTitle', label: 'Misyon Başlık', type: 'string', required: true },
          { name: 'mission', label: 'Misyon Metni', type: 'string', required: true },
          { name: 'whyUsTitle', label: 'Neden Biz Başlık', type: 'string', required: true },
          { name: 'whyUs', label: 'Neden Biz Maddeleri', type: 'string', list: true, required: true },
          { name: 'coffeeConnectionTitle', label: 'Coffee Bölüm Başlığı', type: 'string', required: true },
          { name: 'coffeeConnection', label: 'Coffee Bölüm Metni', type: 'string', required: true },
        ],
      },
      {
        name: 'contact',
        label: 'İletişim',
        path: 'content/site',
        format: 'json',
        match: {
          include: 'contact',
        },
        ui: {
          router: () => '/contact',
        },
        fields: [
          { name: 'title', label: 'Başlık', type: 'string', required: true },
          { name: 'description', label: 'Açıklama', type: 'string', required: true },
          { name: 'address', label: 'Adres', type: 'string', required: true },
          { name: 'email', label: 'E-posta', type: 'string', required: true },
          { name: 'phone', label: 'Telefon', type: 'string', required: true },
        ],
      },
      {
        name: 'products',
        label: 'Ürünler',
        path: 'content/products',
        format: 'json',
        ui: {
          router: ({ document }) => `/products/${document._sys.filename}`,
        },
        fields: [
          { name: 'slug', label: 'Slug', type: 'string', required: true },
          { name: 'name', label: 'Ürün Adı', type: 'string', required: true },
          { name: 'shortDescription', label: 'Kısa Açıklama', type: 'string', required: true },
          { name: 'heroNote', label: 'Hero Notu', type: 'string', required: true },
          { name: 'useCases', label: 'Kullanım Alanları', type: 'string', list: true, required: true },
          { name: 'boxContents', label: 'Kutu İçeriği', type: 'string', list: true, required: true },
          { name: 'image', label: 'Görsel Yolu', type: 'string', required: true },
          {
            name: 'specs',
            label: 'Teknik Özellikler',
            type: 'object',
            list: true,
            fields: [
              { name: 'label', label: 'Özellik', type: 'string', required: true },
              { name: 'value', label: 'Değer', type: 'string', required: true },
            ],
          },
        ],
      },
      {
        name: 'blog',
        label: 'Blog',
        path: 'content/blog',
        format: 'md',
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
        fields: [
          { name: 'title', label: 'Başlık', type: 'string', required: true },
          { name: 'excerpt', label: 'Özet', type: 'string', required: true },
          { name: 'date', label: 'Tarih', type: 'datetime', required: true },
          { name: 'author', label: 'Yazar', type: 'string', required: true },
          { name: 'tags', label: 'Etiketler', type: 'string', list: true },
          { name: 'body', label: 'İçerik', type: 'string', isBody: true, required: true },
        ],
      },
    ],
  },
});
