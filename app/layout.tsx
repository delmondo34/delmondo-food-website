import type { Metadata } from 'next';
import './globals.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/sora/600.css';
import '@fontsource/sora/700.css';
import '@fontsource/sora/800.css';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Del Mondo Food | Endüstriyel 3D Gıda Yazıcı Çözümleri',
  description:
    'Del Mondo Food, FELIXprinters 3D gıda yazıcı çözümleri ile endüstriyel mutfak ve üretim tesislerine kurumsal teknoloji desteği sunar.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
