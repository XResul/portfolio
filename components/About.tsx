// components/About.tsx
// Hakkımda bölümü - Kendini tanıttığın yer

import Image from "next/image";
import ScrollAnimation from "./ScrollAnimation";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Bölüm Başlığı */}
        <ScrollAnimation>
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
            Hakkımda
          </h2>
        </ScrollAnimation>

        {/* İçerik - İki sütun */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Sol Taraf - Resim (Yuvarlak) */}
          <ScrollAnimation delay={100}>
            <div className="relative flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Dış çerçeve - Gradient border */}
                <div className="absolute inset-0 bg-linear-to-br from-cyan-400 via-teal-500 to-cyan-600 rounded-full" />
                {/* İç resim */}
                <div className="absolute inset-2 rounded-full overflow-hidden">
                  {/* Arka plan */}
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
                      maskImage:
                        "radial-gradient(circle, black 50%, transparent 80%)",
                      WebkitMaskImage:
                        "radial-gradient(circle, black 50%, transparent 80%)",
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
                <div className="absolute -inset-4 bg-cyan-500/20 blur-2xl rounded-full -z-10" />
              </div>
            </div>
          </ScrollAnimation>

          {/* Sağ Taraf - Yazılar */}
          <ScrollAnimation delay={200}>
            <div className="text-gray-300">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Ben Kimim?
              </h3>

              <p className="mb-4 leading-relaxed">
                {/* leading-relaxed: Satır arası boşluk */}
                Merhaba! Ben Resul, tutkulu bir Full Stack Developer'ım. Web
                teknolojileri ile modern ve kullanıcı dostu uygulamalar
                geliştirmeyi seviyorum.
              </p>

              <p className="mb-6 leading-relaxed">
                Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum. Yeni
                teknolojileri keşfetmek ve projelerimde uygulamak benim için
                heyecan verici.
              </p>

              {/* Bilgi Kartları */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800 p-4 rounded-lg">
                  <span className="text-cyan-400 font-semibold">Konum</span>
                  <p className="text-white">Türkiye</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <span className="text-cyan-400 font-semibold">Deneyim</span>
                  <p className="text-white">2+ Yıl</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <span className="text-cyan-400 font-semibold">Email</span>
                  <p className="text-white text-sm">resulbinici222@gmail.com</p>
                </div>
                <div className="bg-slate-800 p-4 rounded-lg">
                  <span className="text-cyan-400 font-semibold">Durum</span>
                  <p className="text-white">Açık İşlere</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
