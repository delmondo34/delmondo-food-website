import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  { href: '/', label: 'Anasayfa' },
  { href: '/products', label: 'Ürünler' },
  { href: '/about', label: 'Hakkımızda' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'İletişim' },
];

export function Footer() {
  return (
    <footer className="border-t border-[#e4eaf5] bg-white text-slate-600">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-8">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Image
            src="/images/del-mondo-food-logo.svg"
            alt="Del Mondo Food Logo"
            width={700}
            height={240}
            className="h-16 w-auto max-w-none"
          />
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Endüstriyel gıda üretiminde 3D yazıcı teknolojileri için kurumsal çözüm ortağınız.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-800">Menü</h3>
          <ul className="mt-4 space-y-3">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-600 transition-colors duration-200 hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-800">Ürünler</h3>
          <ul className="mt-4 space-y-3">
            <li>
              <Link
                href="/products/felix-food-1-6-single-head"
                className="text-sm text-slate-600 transition-colors duration-200 hover:text-primary"
              >
                FELIX Food 1.6 - Single Head
              </Link>
            </li>
            <li>
              <Link
                href="/products/felix-food-1-6-switch-head"
                className="text-sm text-slate-600 transition-colors duration-200 hover:text-primary"
              >
                FELIX Food 1.6 - Switch Head
              </Link>
            </li>
            <li>
              <Link
                href="/products/felix-food-1-6-twin-head"
                className="text-sm text-slate-600 transition-colors duration-200 hover:text-primary"
              >
                FELIX Food 1.6 - Twin Head
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-800">İletişim</h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Caferağa Mah. Muratbey Sok. Seven No: 1 -3C Kadıköy/İSTANBUL
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <a href="mailto:info@delmondofood.com" className="transition-colors hover:text-primary">
                info@delmondofood.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +90 539 825 15 00
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#e4eaf5]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Del Mondo Food. Tüm hakları saklıdır.
          </p>
          <a
            href="https://coffeedelmondo.com"
            target="_blank"
            rel="noreferrer"
            className="text-xs text-slate-500 transition-colors hover:text-primary"
          >
            Kahve tutkumuzu keşfedin → Coffee Del Mondo
          </a>
        </div>
      </div>
    </footer>
  );
}
