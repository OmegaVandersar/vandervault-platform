"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } =
    useLanguage();

  return (
    <div className="flex gap-2">

      <button
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-lg ${
          language === "en"
            ? "bg-amber-500 text-black"
            : "bg-zinc-900 text-white"
        }`}
      >
        EN
      </button>

      <button
        onClick={() => setLanguage("de")}
        className={`px-3 py-1 rounded-lg ${
          language === "de"
            ? "bg-amber-500 text-black"
            : "bg-zinc-900 text-white"
        }`}
      >
        DE
      </button>

      <button
        onClick={() => setLanguage("fr")}
        className={`px-3 py-1 rounded-lg ${
          language === "fr"
            ? "bg-amber-500 text-black"
            : "bg-zinc-900 text-white"
        }`}
      >
        FR
      </button>

    </div>
  );
}
