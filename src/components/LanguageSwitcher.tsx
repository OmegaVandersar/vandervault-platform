"use client";

import { useState } from "react";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState("English");

  const languages = [
    "English",
    "Deutsch",
    "Français",
    "Español",
    "العربية",
    "Русский",
    "中文",
  ];

  return (
    <div className="bg-zinc-950 border border-white/10 rounded-2xl p-4 flex items-center justify-between">

      <div>
        <p className="text-zinc-500 text-sm">
          Platform Language
        </p>

        <p className="font-semibold mt-1">
          {language}
        </p>
      </div>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="bg-black border border-white/10 rounded-xl px-4 py-2 text-white outline-none"
      >
        {languages.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>

    </div>
  );
        }
