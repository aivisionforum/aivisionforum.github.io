"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const visionLines = [
  {
    zh: "构建人机协同新范式",
    en: "Architecting Human-AI Synergy.",
  },
  {
    zh: "构建合乎伦理的 AI 治理框架",
    en: "Building ethical AI governance frameworks",
  },
  {
    zh: "开拓开源 AI 创新，塑造未来智能图景",
    en: "Pioneering open source AI innovation shaping tomorrow's intelligent landscape",
  },
] as const;

export default function RotatingVisionLine({ as = "span", className = "" }: { as?: "span" | "p"; className?: string }) {
  const { language } = useLanguage();
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const line = visionLines[index][language];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % visionLines.length);
    }, 4400);

    return () => window.clearInterval(timer);
  }, []);

  const content = (
    <AnimatePresence mode="wait" initial={false}>
      <motion.span
        key={`${language}-${index}`}
        className="avf-rotating-vision__line"
        initial={reducedMotion ? false : { opacity: 0, y: 10, filter: "blur(3px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8, filter: "blur(3px)" }}
        transition={{ duration: reducedMotion ? 0.12 : 0.48, ease: [0.22, 1, 0.36, 1] }}
      >
        {line}
      </motion.span>
    </AnimatePresence>
  );

  const classes = `avf-rotating-vision ${className}`.trim();
  return as === "p" ? <p className={classes}>{content}</p> : <span className={classes}>{content}</span>;
}
