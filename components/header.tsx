'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: 'Anasayfa' },
  { href: '/products', label: 'Ürünler' },
  { href: '/about', label: 'Hakkımızda' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'İletişim' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Sayfa değiştiğinde scroll state sıfırla
    setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Hangi sayfalarda şeffaf başlık kullanılacağını belirliyoruz
  // startsWith kullanarak trailing slash farkını engelliyoruz
  const isOverlayPage =
    pathname === '/' ||
    pathname.startsWith('/contact') ||
    pathname.startsWith('/about');
  const isTransparent = isOverlayPage && !isScrolled;

  const headerContainerClass = isOverlayPage
    ? 'fixed top-0 w-full z-50 transition-all duration-300'
    : 'sticky top-0 z-50 w-full transition-all duration-300';

  const headerBgStyle = isTransparent
    ? 'bg-transparent border-transparent'
    : 'border-b border-[#e4eaf5] bg-white/95 backdrop-blur-md shadow-sm';

  const navItemClass = isTransparent
    ? 'text-white/90 hover:bg-white/10 hover:text-white'
    : 'text-slate-700 hover:bg-[#f2f6ff] hover:text-ink';

  // Logonun şeffaf kısımda beyaz, normalde kendi renginde görünmesi
  const logoClass = `h-12 w-auto max-w-none transition-all duration-300 md:h-14 ${isTransparent ? 'brightness-0 invert' : 'group-hover:scale-[1.01]'
    }`;

  return (
    <header className={`${headerContainerClass} ${headerBgStyle}`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group shrink-0">
          <Image
            src="/images/del-mondo-food-logo.svg"
            alt="Del Mondo Food Logo"
            width={700}
            height={240}
            priority
            className={logoClass}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 ${navItemClass}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex h-10 w-10 items-center justify-center rounded-lg transition md:hidden ${isTransparent ? 'text-white hover:bg-white/10' : 'text-slate-600 hover:bg-[#f2f6ff]'
            }`}
          aria-label="Menüyü aç"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-[#e4eaf5] bg-white px-6 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-[#f2f6ff] hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
