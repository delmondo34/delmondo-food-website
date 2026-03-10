// tina/config.ts
import { defineConfig } from "tinacms";
var branch = "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "home",
        label: "Anasayfa",
        path: "content/site",
        format: "json",
        match: {
          include: "home"
        },
        ui: {
          router: () => "/"
        },
        fields: [
          { name: "heroTitle", label: "Hero Ba\u015Fl\u0131k", type: "string", required: true },
          { name: "heroSubtitle", label: "Hero Alt Ba\u015Fl\u0131k", type: "string", required: true },
          { name: "heroButtonText", label: "Buton Metni", type: "string", required: true },
          { name: "heroButtonLink", label: "Buton Linki", type: "string", required: true },
          {
            name: "benefits",
            label: "Faydalar",
            type: "object",
            list: true,
            fields: [
              { name: "title", label: "Ba\u015Fl\u0131k", type: "string", required: true },
              { name: "description", label: "A\xE7\u0131klama", type: "string", required: true }
            ]
          },
          { name: "socialProof", label: "Sosyal Kan\u0131tlar", type: "string", list: true, required: true }
        ]
      },
      {
        name: "about",
        label: "Hakk\u0131m\u0131zda",
        path: "content/site",
        format: "json",
        match: {
          include: "about"
        },
        ui: {
          router: () => "/about"
        },
        fields: [
          { name: "intro", label: "Giri\u015F", type: "string", required: true },
          { name: "visionTitle", label: "Vizyon Ba\u015Fl\u0131k", type: "string", required: true },
          { name: "vision", label: "Vizyon Metni", type: "string", required: true },
          { name: "missionTitle", label: "Misyon Ba\u015Fl\u0131k", type: "string", required: true },
          { name: "mission", label: "Misyon Metni", type: "string", required: true },
          { name: "whyUsTitle", label: "Neden Biz Ba\u015Fl\u0131k", type: "string", required: true },
          { name: "whyUs", label: "Neden Biz Maddeleri", type: "string", list: true, required: true },
          { name: "coffeeConnectionTitle", label: "Coffee B\xF6l\xFCm Ba\u015Fl\u0131\u011F\u0131", type: "string", required: true },
          { name: "coffeeConnection", label: "Coffee B\xF6l\xFCm Metni", type: "string", required: true }
        ]
      },
      {
        name: "contact",
        label: "\u0130leti\u015Fim",
        path: "content/site",
        format: "json",
        match: {
          include: "contact"
        },
        ui: {
          router: () => "/contact"
        },
        fields: [
          { name: "title", label: "Ba\u015Fl\u0131k", type: "string", required: true },
          { name: "description", label: "A\xE7\u0131klama", type: "string", required: true },
          { name: "address", label: "Adres", type: "string", required: true },
          { name: "email", label: "E-posta", type: "string", required: true },
          { name: "phone", label: "Telefon", type: "string", required: true }
        ]
      },
      {
        name: "products",
        label: "\xDCr\xFCnler",
        path: "content/products",
        format: "json",
        ui: {
          router: ({ document }) => `/products/${document._sys.filename}`
        },
        fields: [
          { name: "slug", label: "Slug", type: "string", required: true },
          { name: "name", label: "\xDCr\xFCn Ad\u0131", type: "string", required: true },
          { name: "shortDescription", label: "K\u0131sa A\xE7\u0131klama", type: "string", required: true },
          { name: "heroNote", label: "Hero Notu", type: "string", required: true },
          { name: "useCases", label: "Kullan\u0131m Alanlar\u0131", type: "string", list: true, required: true },
          { name: "boxContents", label: "Kutu \u0130\xE7eri\u011Fi", type: "string", list: true, required: true },
          { name: "image", label: "G\xF6rsel Yolu", type: "string", required: true },
          {
            name: "specs",
            label: "Teknik \xD6zellikler",
            type: "object",
            list: true,
            fields: [
              { name: "label", label: "\xD6zellik", type: "string", required: true },
              { name: "value", label: "De\u011Fer", type: "string", required: true }
            ]
          },
          { name: "videoUrl", label: "Video URL", type: "string" }
        ]
      },
      {
        name: "blog",
        label: "Blog",
        path: "content/blog",
        format: "md",
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`
        },
        fields: [
          { name: "title", label: "Ba\u015Fl\u0131k", type: "string", required: true },
          { name: "excerpt", label: "\xD6zet", type: "string", required: true },
          { name: "date", label: "Tarih", type: "datetime", required: true },
          { name: "author", label: "Yazar", type: "string", required: true },
          { name: "tags", label: "Etiketler", type: "string", list: true },
          { name: "body", label: "\u0130\xE7erik", type: "string", isBody: true, required: true }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
