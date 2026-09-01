"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Navigation() {
  const { language, setLanguage, text } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleLanguage = () => setLanguage(language === "zh" ? "en" : "zh");
  const links = [
    { zh: "战略倡议", en: "Initiatives", href: "/#working-groups" },
    { zh: "战略峰会", en: "Summits", href: "/#events" },
    { zh: "战略资源", en: "Resources", href: "/#resources" },
    { zh: "全球联盟", en: "Consortium", href: "/#about" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`avf-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="avf-nav__inner">
        <Link href="/" className="avf-wordmark" aria-label={text("AI Vision Forum 首页", "AI Vision Forum home")}>
          <span className="avf-wordmark__mark" aria-hidden="true"><i /></span>
          <span><strong>AI Vision Forum</strong>{language === "zh" ? <small>人工智能愿景论坛</small> : null}</span>
        </Link>

        <nav className="avf-nav__links" aria-label={text("主导航", "Main navigation")}>
          {links.map((link) => <Link key={link.en} href={link.href}>{language === "zh" ? link.zh : link.en}</Link>)}
        </nav>

        <div className="avf-nav__actions">
          <div className="avf-language">
            <button type="button" className="avf-language__switch" onClick={toggleLanguage} aria-label={text("切换为英文", "Switch to Chinese")}>
              <span className={language === "zh" ? "is-active" : ""}>中文</span>
              <i aria-hidden="true">/</i>
              <span className={language === "en" ? "is-active" : ""}>EN</span>
            </button>
          </div>
          <Link href="/join" className="avf-nav__join">{text("加入", "Join")} <ArrowUpRight /></Link>
          <a href="https://github.com/aivisionforum" target="_blank" rel="noopener noreferrer" className="avf-nav__portal">{text("访问项目", "Access portal")}</a>
        </div>

        <button type="button" className="avf-nav__toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? text("关闭导航", "Close navigation") : text("打开导航", "Open navigation")}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <div id="mobile-navigation" className={`avf-mobile-menu ${open ? "is-open" : ""}`}>
        <div className="avf-mobile-menu__language">
          <button type="button" className="avf-language__switch" onClick={toggleLanguage} aria-label={text("切换为英文", "Switch to Chinese")}>
            <span className={language === "zh" ? "is-active" : ""}>中文</span>
            <i aria-hidden="true">/</i>
            <span className={language === "en" ? "is-active" : ""}>EN</span>
          </button>
        </div>
        {links.map((link) => <Link key={link.en} href={link.href} onClick={() => setOpen(false)}>{language === "zh" ? link.zh : link.en}</Link>)}
        <Link href="/join" className="avf-mobile-menu__join" onClick={() => setOpen(false)}>{text("加入论坛通讯", "Join the forum list")} <ArrowUpRight /></Link>
        <a href="https://github.com/aivisionforum" target="_blank" rel="noopener noreferrer" className="avf-mobile-menu__portal">{text("访问 GitHub 项目", "Access GitHub portal")} <ArrowUpRight /></a>
      </div>
    </header>
  );
}
