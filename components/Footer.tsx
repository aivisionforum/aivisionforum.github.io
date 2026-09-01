"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { language, text } = useLanguage();
  const quickLinks = [
    ["工作组", "Working Groups", "/#working-groups"],
    ["峰会", "Events", "/#events"],
    ["资源", "Resources", "/#resources"],
    ["关于", "About", "/#about"],
  ];
  const resourceLinks = [
    ["报告", "Reports", "/#resources"],
    ["开源项目", "Open Source Projects", "https://github.com/aivisionforum"],
    ["文档", "Documentation", "/#resources"],
  ];

  return (
    <footer className="avf-footer">
      <div className="avf-footer__top">
        <div>
          <p className="avf-footer__name">AI Vision Forum</p>
          {language === "zh" ? <p className="avf-footer__cn">人工智能愿景论坛</p> : null}
        </div>
        <p className="avf-footer__statement">
          {text("全球 AI 治理与以人为本创新的战略枢纽。", "Strategic nexus for global AI governance and human-centered innovation.")}
        </p>
      </div>
      <div className="avf-footer__status"><i /> {text("网络运行中", "Network Active")}<span>·</span><a href="https://github.com/aivisionforum" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a><a href="https://aivisionforum.groups.io" target="_blank" rel="noopener noreferrer">{text("邮件列表", "Mailing List")} <ArrowUpRight /></a><a href="https://aivisionforum.org" target="_blank" rel="noopener noreferrer">{text("备用网址", "Alt Website")} <ArrowUpRight /></a></div>
      <div className="avf-footer__grid">
        <div>
          <span>{text("快速链接", "Quick Links")}</span>
          {quickLinks.map(([zh, en, href]) => <Link key={href} href={href}>{language === "zh" ? zh : en}</Link>)}
        </div>
        <div>
          <span>{text("社区", "Community")}</span>
          <a href="https://github.com/aivisionforum" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight /></a>
          <a href="https://aivisionforum.groups.io" target="_blank" rel="noopener noreferrer">{text("邮件列表", "Mailing Lists")} <ArrowUpRight /></a>
          <a href="mailto:contact@visionforum.ai">{text("联系我们", "Contact Us")}</a>
        </div>
        <div>
          <span>{text("资源", "Resources")}</span>
          {resourceLinks.map(([zh, en, href]) => href.startsWith("http") ? <a key={href} href={href} target="_blank" rel="noopener noreferrer">{language === "zh" ? zh : en}<ArrowUpRight /></a> : <Link key={href + en} href={href}>{language === "zh" ? zh : en}</Link>)}
        </div>
      </div>
      <div className="avf-footer__bottom">
        <span>© {new Date().getFullYear()} AI Vision Forum. {text("战略倡议。", "Strategic Initiative.")}</span>
        <span className="avf-footer__legal"><Link href="/privacy">{text("隐私政策", "Privacy Policy")}</Link><Link href="/terms">{text("使用条款", "Terms of Service")}</Link><Link href="/code-of-conduct">{text("行为准则", "Code of Conduct")}</Link></span>
        <span>{text("备用网址：", "Alternative Access:")} <a href="https://aivisionforum.org">aivisionforum.org</a></span>
      </div>
    </footer>
  );
}
