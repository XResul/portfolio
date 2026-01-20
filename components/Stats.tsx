// components/Stats.tsx
// İstatistikler bölümü - Sayılarla başarılar

"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { number: 10, suffix: "+", label: "Tamamlanan Proje" },
  { number: 2, suffix: "+", label: "Yıl Deneyim" },
  { number: 500, suffix: "+", label: "Commit" },
  { number: 15, suffix: "+", label: "Teknoloji" },
];

// Sayı animasyonu hook'u
function useCountUp(end: number, duration: number = 2000, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

function StatItem({ number, suffix, label }: { number: number; suffix: string; label: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(number, 2000, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-5xl md:text-6xl font-bold text-cyan-400 mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400 text-lg">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-16 bg-slate-900 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <StatItem
              key={stat.label}
              number={stat.number}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
