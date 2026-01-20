// components/ScrollToTop.tsx
// Sayfa yüklendiğinde en başa scroll yap

"use client";

import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    // Sayfa yüklendiğinde en başa git
    window.scrollTo(0, 0);

    // History'de geri/ileri yapılınca da en başa git
    window.history.scrollRestoration = "manual";
  }, []);

  return null;
}
