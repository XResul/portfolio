// components/Navbar.tsx
// Navigasyon çubuğu - Sabit üstte, scroll olunca arka plan değişir

"use client";

import { useState, useEffect } from "react";

// Menü linkleri
const navLinks = [
  { name: "Ana Sayfa", href: "#" },
  { name: "Hakkımda", href: "#about" },
  { name: "Yetenekler", href: "#skills" },
  { name: "Projeler", href: "#projects" },
  { name: "İletişim", href: "#contact" },
];

export default function Navbar() {
  // Scroll durumu - arka plan için
  const [scrolled, setScrolled] = useState(false);
  // Mobil menü açık/kapalı
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // 50px'den fazla scroll olunca scrolled = true
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
      // fixed: Sabit pozisyon
      // z-50: En üstte
      // backdrop-blur-sm: Arkayı bulanıklaştır
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / İsim */}
          <a
            href="#"
            className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Resul
          </a>

          {/* Desktop Menü */}
          <div className="hidden md:flex items-center gap-8">
            {/* hidden md:flex: Mobilde gizle, orta ekranda göster */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            // md:hidden: Orta ekranda gizle
          >
            {mobileMenuOpen ? (
              // X ikonu - Menü açıkken
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger ikonu - Menü kapalıyken
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobil Menü */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          }`}
          // max-h ile açılıp kapanma animasyonu
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-lg font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
