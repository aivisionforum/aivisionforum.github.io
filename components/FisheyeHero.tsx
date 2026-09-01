"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import RotatingVisionLine from "./RotatingVisionLine";

type ClipName = string;

const clipGroups: Array<{ id: string; clips: ClipName[] }> = [
  {
    id: "urban-systems",
    clips: [
      "13536982_2160_3840_30fps.mp4",
      "13552596_2160_3840_120fps.mp4",
      "13636309_2160_3840_30fps.mp4",
    ],
  },
  {
    id: "living-intelligence",
    clips: [
      "13670972_1080_1920_30fps.mp4",
      "13671196_1080_1920_30fps.mp4",
      "13564594_1080_1920_30fps.mp4",
      "13623613_2160_3840_30fps.mp4",
      "13738309_2160_3840_30fps.mp4",
    ],
  },
  {
    id: "future-horizons",
    clips: [
      "13671038_1080_1920_30fps.mp4",
      "13539482_1080_1920_30fps.mp4",
      "13552258_2160_3840_30fps.mp4",
      "13662366_2160_3840_28fps.mp4",
      "13671096_1080_1920_30fps.mp4",
      "13671248_1080_1920_30fps.mp4",
    ],
  },
];

const activeClipRegistry = new Map<number, ClipName>();

function clipUrl(filename: ClipName) {
  return `/fisheye/${filename}`;
}

function FisheyePanel({ panelIndex }: { panelIndex: number }) {
  const pool = clipGroups[panelIndex]?.clips ?? clipGroups[0].clips;
  const initialClip = pool[0];
  const secondInitial = pool[1] ?? initialClip;
  const [slotClips, setSlotClips] = useState<[ClipName, ClipName]>([initialClip, secondInitial]);
  const [activeSlot, setActiveSlot] = useState<0 | 1>(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const activeSlotRef = useRef<0 | 1>(0);
  const clipRefs = useRef<[ClipName, ClipName]>([initialClip, secondInitial]);
  const pendingSlotRef = useRef<0 | 1 | null>(null);
  const historyRef = useRef<ClipName[]>([initialClip]);

  const beginSwap = useCallback(() => {
    if (pendingSlotRef.current !== null) return;

    const nextSlot = (activeSlotRef.current === 0 ? 1 : 0) as 0 | 1;
    const recent = new Set(historyRef.current.slice(-4));
    const inUse = new Set(activeClipRegistry.values());
    const available = pool.filter((clip) => !recent.has(clip) && !inUse.has(clip));
    const candidates = available.length ? available : pool.filter((clip) => clip !== clipRefs.current[activeSlotRef.current]);
    const nextClip = candidates[Math.floor(Math.random() * candidates.length)] ?? initialClip;

    clipRefs.current[nextSlot] = nextClip;
    pendingSlotRef.current = nextSlot;
    setSlotClips([...clipRefs.current] as [ClipName, ClipName]);
  }, [initialClip, pool]);

  const playAtRandomPoint = useCallback((video: HTMLVideoElement) => {
    const usableDuration = Number.isFinite(video.duration) ? Math.max(0, video.duration - 2.4) : 0;
    video.currentTime = usableDuration > 0 ? Math.random() * usableDuration : 0;
    void video.play().catch(() => undefined);
  }, []);

  const handleCanPlay = useCallback((slot: 0 | 1) => {
    const video = videoRefs.current[slot];
    if (!video) return;

    if (pendingSlotRef.current !== slot) return;

    const previousSlot = activeSlotRef.current;
    playAtRandomPoint(video);
    activeSlotRef.current = slot;
    activeClipRegistry.set(panelIndex, clipRefs.current[slot]);
    pendingSlotRef.current = null;
    historyRef.current.push(clipRefs.current[slot]);
    setActiveSlot(slot);
    videoRefs.current[previousSlot]?.pause();
  }, [panelIndex, playAtRandomPoint]);

  useEffect(() => {
    activeClipRegistry.set(panelIndex, initialClip);
    return () => { activeClipRegistry.delete(panelIndex); };
  }, [initialClip, panelIndex]);

  useEffect(() => {
    const video = videoRefs.current[0];
    if (!video) return;

    const startPlayback = () => playAtRandomPoint(video);
    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      startPlayback();
    } else {
      video.addEventListener("loadedmetadata", startPlayback, { once: true });
    }

    return () => video.removeEventListener("loadedmetadata", startPlayback);
  }, [playAtRandomPoint]);

  useEffect(() => {
    const interval = 5600 + panelIndex * 780 + Math.random() * 5400;
    const timer = window.setTimeout(beginSwap, interval);
    return () => window.clearTimeout(timer);
  }, [activeSlot, beginSwap, panelIndex]);

  useEffect(() => () => {
    videoRefs.current.forEach((video) => video?.pause());
  }, []);

  return (
    <div className={`avf-fisheye-panel avf-fisheye-panel--${panelIndex + 1}`}>
      {[0, 1].map((slot) => (
        <video
          key={`${slot}-${slotClips[slot]}`}
          ref={(node) => { videoRefs.current[slot] = node; }}
          className={`avf-fisheye-panel__video ${activeSlot === slot ? "is-active" : ""}`}
          src={clipUrl(slotClips[slot])}
          autoPlay={activeSlot === slot && pendingSlotRef.current === null}
          loop
          muted
          playsInline
          preload={activeSlot === slot || pendingSlotRef.current === slot ? "auto" : "metadata"}
          onCanPlay={() => handleCanPlay(slot as 0 | 1)}
          onEnded={() => {
            if (activeSlotRef.current === slot) beginSwap();
          }}
          aria-hidden="true"
        />
      ))}
      <div className="avf-fisheye-panel__reticle" aria-hidden="true"><i /><i /></div>
    </div>
  );
}

export default function FisheyeHero() {
  const { text } = useLanguage();

  return (
    <section className="avf-fisheye-hero">
      <div className="avf-fisheye-hero__panels" aria-hidden="true">
        {[0, 1, 2].map((panelIndex) => <FisheyePanel key={panelIndex} panelIndex={panelIndex} />)}
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
