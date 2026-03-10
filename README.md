# Del Mondo Food - Kurumsal Web Sitesi

Next.js (statik export) ve TinaCMS ile hazırlanmış, tamamen Türkçe kurumsal B2B web sitesi.

## Teknoloji
- Next.js 14 (App Router)
- Tailwind CSS
- TinaCMS
- Markdown tabanlı blog altyapısı

## Geliştirme
```bash
npm install
npm run dev
```

## TinaCMS ile düzenleme
1. `.env.example` dosyasını `.env.local` olarak kopyalayın.
2. Tina Cloud'dan aldığınız değerleri girin:
   - `NEXT_PUBLIC_TINA_CLIENT_ID`
   - `TINA_TOKEN`
   - `NEXT_PUBLIC_TINA_BRANCH`
3. Görsel içerik düzenleme için çalıştırın:
```bash
npm run tina:dev
```
4. Admin paneli: `http://localhost:3000/admin`

## Üretim build
```bash
npm run tina:build
```
Çıktı statik olarak `out/` klasörüne alınır.

## İçerik dosyaları
- Anasayfa: `content/site/home.json`
- Hakkımızda: `content/site/about.json`
- İletişim: `content/site/contact.json`
- Ürünler: `content/products/*.json`
- Blog: `content/blog/*.md`

## GitHub'a push (kısa)
```bash
git init
git add .
git commit -m "Del Mondo Food kurumsal site + TinaCMS"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADI/REPO_ADI.git
git push -u origin main
```

## GitHub Actions'ta Tina build
1. GitHub repo ayarlarından `Settings > Secrets and variables > Actions` bölümüne girin.
2. Aşağıdaki secret'ları ekleyin:
   - `NEXT_PUBLIC_TINA_CLIENT_ID`
   - `TINA_TOKEN`
3. `main` branch'ine push yaptığınızda `.github/workflows/tina-build.yml` otomatik çalışır.

## GitHub Pages yayını
1. GitHub'da `Settings > Pages` bölümüne girin.
2. `Source` olarak `GitHub Actions` seçin.
3. `Settings > Secrets and variables > Actions` altında aşağıdaki secret'ları ekleyin:
   - `NEXT_PUBLIC_TINA_CLIENT_ID`
   - `TINA_TOKEN`
4. `main` branch'ine push yapın.
5. `.github/workflows/deploy-pages.yml` otomatik çalışır ve siteyi Pages'e deploy eder.
6. Yayın adresiniz: `https://KULLANICI_ADI.github.io/REPO_ADI/`..
