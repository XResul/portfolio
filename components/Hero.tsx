// components/Hero.tsx
// Su temalı Hero section

"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

// Typing effect için roller
const roles = [
  "Full Stack Developer",
  "C# Developer",
  ".NET Developer",
  "React Developer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Sayfa yüklenince animasyonu başlat
  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Yazıyı yaz
        setText(currentRole.substring(0, text.length + 1));
        if (text === currentRole) {
          // Yazı bitti, 2 saniye bekle ve silmeye başla
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Yazıyı sil
        setText(currentRole.substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Arka Plan Resmi */}
      <Image
        src="/image/suResmi-4.jpg"
        alt="Water Background"
        fill
        className="object-cover"
        priority
      />

      {/* Koyu Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/90" />

      {/* İçerik - Yan Yana Layout */}
      <div className="relative z-10 px-4 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Sol Taraf - Profil Resmi (Yuvarlak & Büyük) */}
          <div
            className={`relative w-72 h-72 md:w-[500px] md:h-[500px] flex-shrink-0 transition-all duration-1000 ${
              imageLoaded
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-50 rotate-12"
            }`}
          >
            {/* Dış çerçeve - Gradient border + dönen animasyon */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-teal-500 to-cyan-600 rounded-full animate-spin-slow" />
            {/* İç resim */}
            <div className="absolute inset-2 rounded-full overflow-hidden">
              {/* Arka plan - Hero ile aynı + blur */}
              <Image
                src="/image/suResmi-4.jpg"
                alt="Background"
                fill
                className="object-cover blur-md scale-125"
              />
              {/* Koyu overlay */}
              <div className="absolute inset-0 bg-cyan-900/30" />
              {/* Profil resmi - kenarları yumuşak */}
              <div
                className="absolute inset-0 z-10"
                style={{
                  maskImage: "radial-gradient(circle, black 50%, transparent 80%)",
                  WebkitMaskImage: "radial-gradient(circle, black 50%, transparent 80%)",
                }}
              >
                <Image
                  src="/image/ResulResim.jpg"
                  alt="Resul"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            {/* Glow efekti */}
            <div className="absolute -inset-6 bg-cyan-500/30 blur-3xl rounded-full -z-10" />
          </div>

          {/* Sağ Taraf - Yazılar */}
          <div className="text-center md:text-left">
            <p
              className={`text-xl text-cyan-300 mb-2 tracking-widest uppercase transition-all duration-700 delay-300 ${
                imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Merhaba, Ben
            </p>

            <h1
              className={`text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg bg-gradient-to-r from-cyan-200 via-white to-teal-200 bg-clip-text text-transparent transition-all duration-700 delay-500 ${
                imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Resul
            </h1>

            <p
              className={`text-2xl md:text-3xl text-cyan-100 mb-8 h-10 transition-all duration-700 delay-700 ${
                imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              {text}
              <span className="animate-pulse">|</span>
            </p>

            <div
              className={`flex gap-6 justify-center md:justify-start flex-wrap transition-all duration-700 delay-1000 ${
                imageLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="#projects"
                className="group relative px-10 py-4 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-xl text-lg font-semibold shadow-xl shadow-cyan-600/40 hover:shadow-cyan-500/60 transition-all hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10">Projelerim</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="#contact"
                className="px-10 py-4 border-2 border-cyan-400 rounded-xl text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all hover:scale-105 backdrop-blur-sm bg-white/5"
              >
                İletişim
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Aşağı kaydır ikonu */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-cyan-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
