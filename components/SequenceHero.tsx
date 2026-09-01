"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import RotatingVisionLine from "./RotatingVisionLine";

const clips = ["1.mp4", "2.mp4", "3.mp4", "4.mp4", "5.mp4", "6.mp4", "7.mp4", "8.mp4"];
const CLIP_DURATION_MS = 5000;
const CLIP_VERSION = "folder-20260831-720";

export default function SequenceHero() {
  const { text } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      if (index === activeIndex) {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
      } else {
        video.pause();
      }
    });

    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % clips.length);
    }, CLIP_DURATION_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => () => {
    videoRefs.current.forEach((video) => video?.pause());
  }, []);

  return (
    <section className="avf-fisheye-hero avf-sequence-hero">
      <div className="avf-sequence-hero__videos" aria-hidden="true">
        {clips.map((clip, index) => (
          <video
            key={clip}
            ref={(node) => { videoRefs.current[index] = node; }}
            className={`avf-sequence-hero__video ${activeIndex === index ? "is-active" : ""}`}
            src={`/hero-sequence/${clip}?v=${CLIP_VERSION}`}
            autoPlay={index === 0}
            loop
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
          />
        ))}
      </div>
      <div className="avf-fisheye-hero__texture" aria-hidden="true" />
      <div className="avf-fisheye-hero__heading">
        <p><span /> {text("战略愿景 · 2025–2030", "STRATEGIC VISION · 2025–2030")}</p>
        <h1>AI VISION FORUM</h1>
        <RotatingVisionLine />
        <p className="avf-fisheye-hero__intro">{text("下一站：AI Vision Forum 深圳 2026，将于 2026 年 10 月 14–15 日举行。论坛以“构建人机协同新范式”为主题，连接开源、移动智能体系统、企业治理与 AI 原生组织。", "Next: AI Vision Forum Shenzhen 2026, taking place October 14–15, 2026. Under the theme “Architecting Human-AI Synergy,” the forum connects open source, mobile agentic systems, enterprise governance, and AI-native organizations.")}</p>
        <div className="avf-fisheye-hero__actions">
          <a href="https://paris2026.visionforum.ai/report/" target="_blank" rel="noopener noreferrer">
            {text("阅读巴黎论坛报告", "Read the Paris report")} <ArrowRight />
          </a>
          <a href="https://shenzhen2026.visionforum.ai/" target="_blank" rel="noopener noreferrer">
            {text("深圳 2026 · 10.14–15", "Shenzhen 2026 · Oct 14–15")} <ArrowUpRight />
          </a>
        </div>
      </div>
      <div className="avf-fisheye-hero__metrics">
        <div><strong>20+</strong><span>{text("全球伙伴", "Global Partners")}</span></div>
        <div><strong>6</strong><span>{text("战略倡议", "Strategic Initiatives")}</span></div>
        <div><strong>100%</strong><span>{text("开源承诺", "Open Source Commitment")}</span></div>
      </div>
    </section>
  );
}
