"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage, type Language } from "./LanguageProvider";

export type DocumentSection = {
  title: Record<Language, string>;
  paragraphs?: Record<Language, string>[];
  items?: Record<Language, string>[];
};

export default function BilingualDocument({
  label,
  title,
  updated,
  sections,
}: {
  label: string;
  title: Record<Language, string>;
  updated: Record<Language, string>;
  sections: DocumentSection[];
}) {
  const { language, text } = useLanguage();

  return (
    <main className="avf-page">
      <div className="avf-page__shell">
        <Link href="/" className="avf-page__back"><ArrowLeft /> {text("返回首页", "Back to home")}</Link>
        <div className="avf-document">
          <header className="avf-document__title">
            <span>{label}</span>
            <h1>{title[language]}</h1>
            <p>{title[language === "zh" ? "en" : "zh"]}</p>
            <p className="avf-document__updated">{updated[language]}</p>
          </header>
          <div className="avf-document__body">
            {sections.map((section, index) => <section key={section.title.en}>
              <h2>{index + 1}. {section.title[language]}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph.en}>{paragraph[language]}</p>)}
              {section.items && <ul>{section.items.map((item) => <li key={item.en}>{item[language]}</li>)}</ul>}
            </section>)}
          </div>
        </div>
      </div>
    </main>
  );
}
