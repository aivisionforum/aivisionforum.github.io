"use client";

import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { useLanguage, type Language } from "./LanguageProvider";
import SequenceHero from "./SequenceHero";

type Bilingual = { zh: string; en: string };

const workingGroups: Array<{
  title: Bilingual;
  description: Bilingual;
  status: Bilingual;
  link?: string;
}> = [
  {
    title: { zh: "伦理与治理", en: "Ethics & Governance" },
    description: { zh: "为大规模负责任地部署人工智能建立稳健的治理框架。", en: "Establishing robust governance frameworks for responsible AI deployment at scale." },
    status: { zh: "框架开发", en: "Framework Development" },
    link: "https://github.com/aivisionforum/ai-ethics-governance",
  },
  {
    title: { zh: "全球数字基础设施", en: "Global Digital Infrastructure" },
    description: { zh: "通过分布式基础设施，将人工智能建设为全球数字公共产品。", en: "Building AI as a global digital public good through distributed infrastructure." },
    status: { zh: "开源倡议", en: "Open Source Initiative" },
    link: "https://github.com/aivisionforum/ai-global-digital-public-good",
  },
  {
    title: { zh: "AI 成熟度", en: "AI Maturity" },
    description: { zh: "制定用于人工智能能力分类与评估的 IEEE P3514 标准。", en: "Developing IEEE P3514 standards for AI capability classification and evaluation." },
    status: { zh: "IEEE P3514 标准", en: "IEEE P3514 Standard" },
    link: "https://github.com/aivisionforum/ai-maturity",
  },
  {
    title: { zh: "AI 与教育", en: "AI & Education" },
    description: { zh: "通过 AI 增强的教学框架与自适应系统，革新学习范式。", en: "Revolutionizing learning paradigms through AI-enhanced pedagogical frameworks and adaptive systems." },
    status: { zh: "研究倡议", en: "Research Initiative" },
  },
  {
    title: { zh: "人机协同", en: "Human-AI Synergy" },
    description: { zh: "为增强智能与人机协作探索新的框架。", en: "Pioneering frameworks for augmented intelligence and human-machine collaboration." },
    status: { zh: "协作研究", en: "Collaborative Research" },
  },
  {
    title: { zh: "创造智能", en: "Creative Intelligence" },
    description: { zh: "探索数字领域中人工创造力与人类创造力的交汇。", en: "Exploring the intersection of artificial and human creativity in digital realms." },
    status: { zh: "探索阶段", en: "Exploratory Phase" },
  },
];

const summits = [
  {
    title: "AI VISION SUMMIT PARIS",
    subtitle: { zh: "开源 AI 战略论坛", en: "Open Source AI Strategy Forum" },
    date: { zh: "2025 年 5 月", en: "MAY 2025" },
    location: { zh: "法国 · 巴黎", en: "Paris, France" },
    attendees: { zh: "200+ 位代表", en: "200+ Delegates" },
    description: { zh: "围绕下一代人工智能开发的协作框架展开战略讨论。", en: "Strategic discussions on collaborative frameworks for next-generation AI development." },
    status: { zh: "已结束", en: "COMPLETED" },
    link: "https://paris2025.gosim.org/os-ai-strategy-forum/",
    upcoming: false,
  },
  {
    title: "GLOBAL AI COOPERATION SUMMIT",
    subtitle: { zh: "杭州年度论坛", en: "Annual Forum Hangzhou" },
    date: { zh: "2025 年 9 月", en: "SEPTEMBER 2025" },
    location: { zh: "中国 · 杭州", en: "Hangzhou, China" },
    attendees: { zh: "300+ 位代表", en: "300+ Delegates" },
    description: { zh: "来自二十多个国家的全球 AI 领袖、研究者与政策制定者在此汇聚。", en: "Convergence of global AI leaders, researchers, and policymakers from 20+ nations." },
    status: { zh: "已结束", en: "COMPLETED" },
    link: "https://hangzhou2025.visionforum.ai/",
    upcoming: false,
  },
  {
    title: "GOSIM AI VISION FORUM 2024",
    subtitle: { zh: "首届峰会", en: "Inaugural Summit" },
    date: { zh: "2024 年 10 月", en: "OCTOBER 2024" },
    location: { zh: "线上与混合形式", en: "Virtual & Hybrid" },
    attendees: { zh: "500+ 位代表", en: "500+ Delegates" },
    description: { zh: "奠基峰会确立了六个人本人工智能战略工作组。", en: "Foundation summit establishing six strategic working groups for human-centered AI." },
    status: { zh: "已结束", en: "COMPLETED" },
    upcoming: false,
  },
  {
    title: "AI VISION FORUM PARIS 2026",
    subtitle: { zh: "构建人与 AI 的协同关系", en: "Architecting Human-AI Synergy" },
    date: { zh: "2026 年 5 月 4 日", en: "MAY 4, 2026" },
    location: { zh: "法国 · 巴黎", en: "Paris, France" },
    attendees: { zh: "100 位代表", en: "100 Delegates" },
    description: { zh: "围绕智能体转型举办的一日论坛，议题包括智能体 AI 系统、AI 教育、可信智能体 AI，以及开放通证与数字公共产品。论坛报告与《巴黎倡议》已经发布。", en: "Concluded one-day forum on the agentic transition — Agentic AI Systems, AI in Education, Trusted Agentic AI, and Open Token & Digital Public Goods. The Forum Report and Paris Initiative are now published." },
    status: { zh: "已结束", en: "COMPLETED" },
    link: "https://paris2026.visionforum.ai/report/",
    upcoming: false,
  },
  {
    title: "AI VISION FORUM SHENZHEN 2026",
    subtitle: { zh: "构建人机协同新范式", en: "Architecting Human-AI Synergy." },
    date: { zh: "2026 年 10 月 14–15 日", en: "OCTOBER 14–15, 2026" },
    location: { zh: "深圳 2026", en: "Shenzhen 2026" },
    attendees: { zh: "100–150 位受邀参与者", en: "100–150 Invited Participants" },
    description: { zh: "围绕智能体构建软件时代的人类能动性，论坛以两天、四个相互关联的议题，连接开源、移动智能体操作系统、企业治理与 AI 原生组织。邀请制，遵循查塔姆研究所规则，并提供中英同传。", en: "Centered on human agency in the age of agent-built software, the forum connects four topics across two days: open source, mobile agentic OS, enterprise governance, and AI-native organizations. Invitation-only, under the Chatham House Rule, with English–Chinese interpretation." },
    status: { zh: "即将举行", en: "COMING SOON" },
    link: "https://shenzhen2026.visionforum.ai/",
    upcoming: true,
  },
];

const resourceCategories: Array<{
  title: Bilingual;
  items: Array<{ title: string; subtitle: Bilingual; description: Bilingual; link: string; format: string }>;
}> = [
  {
    title: { zh: "报告与出版物", en: "Reports & Publications" },
    items: [
      {
        title: "AI Vision Forum Paris 2026 — Forum Report",
        subtitle: { zh: "构建人机协同 · 专题信息图及音视频回顾", en: "Architecting Human–AI Synergy · panel infographics + audio/video recap" },
        description: { zh: "包含执行摘要、七项主要发现、四场专题讨论记录（每场均含摘要与建议图示），以及闭幕发布的《巴黎开放通证倡议》。", en: "Executive summary, seven headline findings, four panel writeups (each with its own summary and recommendations infographics), and the closing Paris Initiative on Open Token." },
        link: "https://paris2026.visionforum.ai/report/",
        format: "WEB · PDF · AUDIO · VIDEO",
      },
      {
        title: "GOSIM AI Strategy Forum 2025 Paris",
        subtitle: { zh: "Linux Foundation 报告", en: "Linux Foundation Report" },
        description: { zh: "关于巴黎峰会全球 AI 战略的综合报告，涵盖治理、创新与合作。", en: "Comprehensive report on global AI strategy from the Paris summit, covering governance, innovation, and cooperation." },
        link: "https://www.linuxfoundation.org/research/GOSIM-2025?hsLang=en",
        format: "WEB",
      },
      {
        title: "Global Digital Collaboration 2025 Geneva",
        subtitle: { zh: "AI For Humanity 专题报告", en: "AI For Humanity Track Report" },
        description: { zh: "来自 GDC 会议的人本 AI 发展与全球协作观察。", en: "Insights on human-centered AI development and global collaboration from the GDC conference." },
        link: "https://ai4humanity.ai/pdf/GDC%20AI%20For%20Humanity%20Track%20Report%20-%20v2.0.pdf",
        format: "PDF",
      },
      {
        title: "Global Cooperation for Human-Centered AI",
        subtitle: { zh: "GOSIM AI Vision Forum 2025 报告", en: "GOSIM AI Vision Forum 2025 Report" },
        description: { zh: "论坛围绕 AI 教育、创造力、治理与数字公共产品形成的主要观察。", en: "Key insights from the forum covering AI education, creativity, governance, and digital public goods." },
        link: "#resources",
        format: "PDF",
      },
    ],
  },
  {
    title: { zh: "开源项目", en: "Open Source Projects" },
    items: [
      {
        title: "AI Ethics & Governance",
        subtitle: { zh: "工作组代码仓库", en: "Working Group Repository" },
        description: { zh: "面向负责任 AI 开发的研究、框架与工具。", en: "Research, frameworks, and tools for responsible AI development." },
        link: "https://github.com/aivisionforum/ai-ethics-governance",
        format: "GITHUB",
      },
      {
        title: "AI as Global Digital Public Good",
        subtitle: { zh: "工作组代码仓库", en: "Working Group Repository" },
        description: { zh: "通过开源与共享基础设施推动人工智能普惠化的倡议。", en: "Initiatives for democratizing AI through open source and shared infrastructure." },
        link: "https://github.com/aivisionforum/ai-global-digital-public-good",
        format: "GITHUB",
      },
      {
        title: "CodeCommons Project",
        subtitle: { zh: "面向大语言模型的伦理数据集", en: "Ethical datasets for LLMs" },
        description: { zh: "为负责任的大语言模型开发提供高质量、透明且可追溯的数据集。", en: "High-quality, transparent, and traceable datasets for responsible LLM development." },
        link: "https://codecommons.org",
        format: "WEB",
      },
    ],
  },
  {
    title: { zh: "社区与协作", en: "Community & Collaboration" },
    items: [
      {
        title: "AI Ethics Mailing List",
        subtitle: { zh: "加入讨论", en: "Join the discussion" },
        description: { zh: "参与关于 AI 伦理与治理的持续讨论。", en: "Participate in ongoing conversations about AI ethics and governance." },
        link: "https://aivisionforum.groups.io/g/ai-ethics-governance",
        format: "MAILING LIST",
      },
      {
        title: "AI for Global Digital Public Good",
        subtitle: { zh: "协作社区", en: "Collaborative community" },
        description: { zh: "连接以 AI 公共产品为研究与实践方向的同行。", en: "Connect with researchers and practitioners working on AI as a public good." },
        link: "https://aivisionforum.groups.io/g/ai4gdpg",
        format: "MAILING LIST",
      },
      {
        title: "GOSIM Community",
        subtitle: { zh: "开源 AI 生态", en: "Open source AI ecosystem" },
        description: { zh: "加入更广泛的 GOSIM 社区，共同推进开源 AI 解决方案。", en: "Join the broader GOSIM community working on open source AI solutions." },
        link: "https://gosim.org",
        format: "WEB",
      },
    ],
  },
];

const pillars = [
  { title: { zh: "以人为本", en: "Human-Centered" }, body: { zh: "AI 应增强并赋能人的能力，而不是取代人。", en: "AI should augment and empower human capabilities, not replace them." } },
  { title: { zh: "透明", en: "Transparency" }, body: { zh: "人工智能系统需要开放的开发过程与清晰的问责机制。", en: "Open development and clear accountability in AI systems." } },
  { title: { zh: "包容", en: "Inclusivity" }, body: { zh: "确保全人类都能获得人工智能带来的益处。", en: "Ensuring AI benefits are accessible to all of humanity." } },
  { title: { zh: "协作", en: "Collaboration" }, body: { zh: "推动跨文化、跨行业与跨学科的全球合作。", en: "Global cooperation across cultures, sectors, and disciplines." } },
];

const strategicIntelligence: Bilingual[] = [
  { zh: "教育必须从知识传递转向培养批判性思维、创造力与情感智能。", en: "Education must shift from knowledge transmission to fostering critical thinking, creativity, and emotional intelligence." },
  { zh: "AI 应补充并增强人类创造力，而不是取代它。", en: "AI should complement and empower human creativity, not replace it." },
  { zh: "治理需要整体性的风险管理与国际合作。", en: "Governance requires holistic risk management and international collaboration." },
  { zh: "开源通过包容性参与，为人工智能普惠化创造路径。", en: "Open source creates pathways for democratizing AI through inclusive participation." },
  { zh: "人工智能领域的数字公共产品需要多方投资与中立机构。", en: "Digital public goods in AI require multi-stakeholder investment and neutral institutions." },
  { zh: "在高风险的 AI 应用中，必须保留人的控制权与决策权。", en: "Human control and decision-making authority must be maintained in high-stakes AI applications." },
];

const partners = [
  ["Linux Foundation", "https://www.linuxfoundation.org"], ["Eclipse Foundation", "https://www.eclipse.org"],
  ["BAAI", "https://www.baai.ac.cn/english.html"], ["Moxin", "https://www.moxin.app/"],
  ["PyTorch Foundation", "https://pytorch.org/foundation"], ["Hugging Face", "https://huggingface.co"],
  ["CSDN", "https://www.csdn.net"], ["WasmEdge", "https://wasmedge.org"],
];

function pick(value: Bilingual, language: Language) {
  return value[language];
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-6%" }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}

function SectionHeading({ badge, zh, en, description }: { badge: Bilingual; zh: string; en: string; description: Bilingual }) {
  const { language } = useLanguage();
  return (
    <div className="avf-section-heading">
      <span>{pick(badge, language)}</span>
      <div><h2>{language === "zh" ? zh : en}</h2></div>
      <p>{pick(description, language)}</p>
    </div>
  );
}

export default function VisionHome() {
  const { language, text } = useLanguage();
  const [eventView, setEventView] = useState<"upcoming" | "past">("upcoming");
  const shownSummits = summits.filter((event) => eventView === "upcoming" ? event.upcoming : !event.upcoming);

  return (
    <main className="avf-site">
      <div className="avf-hero-stage" id="top">
        <SequenceHero />
      </div>

      <section className="avf-section avf-topics" id="working-groups">
        <SectionHeading badge={{ zh: "战略倡议", en: "Strategic Initiatives" }} zh="工作组" en="WORKING GROUPS" description={{ zh: "六个专业主题，推动人工智能关键领域的创新。", en: "Six specialized themes driving innovation across critical AI domains." }} />
        <div className="avf-topic-list">
          {workingGroups.map((group, index) => {
            const content = <><div className="avf-topic__title"><h3>{pick(group.title, language)}</h3></div><p className="avf-topic__note">{pick(group.status, language)}</p><p className="avf-topic__description">{pick(group.description, language)}</p>{group.link ? <ArrowUpRight className="avf-topic__arrow" /> : null}</>;
            return group.link ? <motion.a key={group.title.en} href={group.link} target="_blank" rel="noopener noreferrer" className="avf-topic" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>{content}</motion.a> : <motion.article key={group.title.en} className="avf-topic" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>{content}</motion.article>;
          })}
        </div>
        <Reveal className="avf-section-cta">
          <div><span>{text("参与倡议", "PARTICIPATE")}</span><h3>{text("加入这项倡议", "JOIN THE INITIATIVE")}</h3><p>{text("通过协作研究与开发，共同推动伦理人工智能。", "Contribute to the advancement of ethical AI through collaborative research and development.")}</p></div>
          <div><a href="https://aivisionforum.groups.io" target="_blank" rel="noopener noreferrer">{text("进入协作网络", "ACCESS NETWORKS")} <ArrowRight /></a><a href="https://github.com/aivisionforum" target="_blank" rel="noopener noreferrer">{text("贡献代码", "CONTRIBUTE CODE")} <ArrowUpRight /></a></div>
        </Reveal>
      </section>

      <section className="avf-section avf-gatherings" id="events">
        <SectionHeading badge={{ zh: "全球汇聚", en: "Global Convergence" }} zh="战略峰会" en="STRATEGIC SUMMITS" description={{ zh: "塑造人工智能治理走向的高层论坛。", en: "High-level forums shaping the trajectory of artificial intelligence governance." }} />
        <div className="avf-tabs" role="group" aria-label={text("峰会筛选", "Summit filter")}><button className={eventView === "upcoming" ? "is-active" : ""} onClick={() => setEventView("upcoming")}>{text("即将举行", "UPCOMING")}</button><button className={eventView === "past" ? "is-active" : ""} onClick={() => setEventView("past")}>{text("往届", "ARCHIVE")}</button></div>
        <motion.div className="avf-gathering-list" key={eventView} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {shownSummits.map((event) => <article className={`avf-gathering ${event.upcoming ? "avf-gathering--featured" : ""}`} key={event.title}>
            <div className="avf-gathering__when"><span>{pick(event.status, language)}</span><time>{pick(event.date, language)}</time><p>{pick(event.location, language)}</p></div>
            <div className="avf-gathering__body"><p>{pick(event.subtitle, language)}</p><h3>{event.title}</h3><div className="avf-gathering__meta">{pick(event.attendees, language)}</div><p>{pick(event.description, language)}</p></div>
            {event.link ? <a href={event.link} target="_blank" rel="noopener noreferrer" aria-label={`${text("打开活动页面", "Access portal")}: ${event.title}`}><ArrowUpRight /></a> : <span className="avf-gathering__no-link">—</span>}
          </article>)}
        </motion.div>

        <Reveal className="avf-regional">
          <div className="avf-regional__heading"><h3>{text("区域网络", "REGIONAL NETWORKS")}</h3><p>{text("在全球建立 AI Vision Forum 地方分会，持续开展交流与区域创新倡议。", "Establishing local AI Vision Forum chapters worldwide for continuous engagement and regional innovation initiatives.")}</p></div>
          <div className="avf-regional__stats"><div><strong>24/7</strong><span>{text("活跃论坛", "Active Forums")}</span></div><div><strong>6</strong><span>{text("活跃倡议", "Active Initiatives")}</span></div><div><strong>5K+</strong><span>{text("成员", "Members")}</span></div></div>
          <div className="avf-regional__links"><a href="mailto:contact@visionforum.ai">{text("查找地方分会", "FIND LOCAL CHAPTER")}</a><a href="mailto:contact@visionforum.ai">{text("建立地方分会", "ESTABLISH CHAPTER")}</a></div>
        </Reveal>
      </section>

      <section className="avf-section avf-reading" id="resources">
        <SectionHeading badge={{ zh: "知识中心", en: "Knowledge Hub" }} zh="战略资源" en="STRATEGIC RESOURCES" description={{ zh: "获取推动伦理人工智能未来发展的完整文档、研究报告与协作工具。", en: "Access comprehensive documentation, research papers, and collaborative tools driving the future of ethical artificial intelligence." }} />
        <div className="avf-resource-categories">
          {resourceCategories.map((category) => <div className="avf-resource-category" key={category.title.en}>
            <div className="avf-resource-category__heading"><h3>{pick(category.title, language)}</h3></div>
            <div className="avf-publications">{category.items.map((item) => <a key={item.title} href={item.link} target={item.link.startsWith("http") ? "_blank" : undefined} rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined} className="avf-publication"><div className="avf-publication__identity"><p>{pick(item.subtitle, language)}</p><h3>{item.title}</h3></div><p className="avf-publication__description">{pick(item.description, language)}</p><span className="avf-publication__format">{item.format}</span><ArrowUpRight /></a>)}</div>
          </div>)}
        </div>
        <Reveal className="avf-newsletter avf-newsletter--resources">
          <div><p>{text("保持联系", "STAY CONNECTED")}</p><h3>{text("获取战略动态", "ACCESS STRATEGIC UPDATES")}</h3><span>{text("加入我们的网络，获取 AI 治理框架、战略倡议与全球合作的最新信息。", "Join the network for exclusive insights on AI governance frameworks, strategic initiatives, and global cooperation efforts.")}</span></div>
          <div className="avf-newsletter__actions"><a href="https://aivisionforum.groups.io/g/members/join" target="_blank" rel="noopener noreferrer" className="avf-button avf-button--paper"><Mail /> {text("加入邮件列表", "JOIN OUR MAILING LIST")}</a><div className="avf-newsletter__qr"><img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https%3A%2F%2Faivisionforum.groups.io%2Fg%2Fmembers%2Fjoin" alt={text("加入 AI Vision Forum 邮件列表的二维码", "QR Code for joining AI Vision Forum mailing list")} /><span>{text("或扫码加入", "Or scan to join")}</span></div></div>
        </Reveal>
      </section>

      <section className="avf-section avf-about" id="about">
        <SectionHeading badge={{ zh: "全球联盟", en: "Global Consortium" }} zh="战略愿景" en="STRATEGIC VISION" description={{ zh: "联合全球富有远见的领导者，共同构建以人为本的人工智能未来。", en: "A global initiative uniting visionary leaders to architect the future of human-centered artificial intelligence." }} />
        <Reveal className="avf-mandate"><span>{text("核心使命", "MISSION CRITICAL")}</span><h3>{text("执行使命", "EXECUTIVE MANDATE")}</h3><p>{text("AI Vision Forum 是一个围绕人工智能发展、创新与治理开展战略对话的全球平台。通过高层次的跨学科合作，本倡议致力于构建相关框架，确保人的能动性、透明度与伦理要求始终处于人工智能社会融合的核心。", "The AI Vision Forum serves as a global platform for strategic dialogue on artificial intelligence development, innovation, and governance. Through high-level interdisciplinary collaboration, the initiative architects frameworks ensuring human agency, transparency, and ethical imperatives remain central to AI’s societal integration.")}</p></Reveal>
        <div className="avf-about-subheading"><h3>{text("战略支柱", "Strategic Pillars")}</h3></div>
        <div className="avf-principles">{pillars.map((pillar) => <article key={pillar.title.en}><h3>{pick(pillar.title, language)}</h3><p>{pick(pillar.body, language)}</p></article>)}</div>
        <div className="avf-about-subheading"><h3>{text("战略洞察", "Strategic Intelligence")}</h3></div>
        <div className="avf-intelligence">{strategicIntelligence.map((insight) => <article key={insight.en}><p>{pick(insight, language)}</p></article>)}</div>
        <div className="avf-about-stats"><div><strong>6</strong><span>{text("工作组", "Working Groups")}</span></div><div><strong>20+</strong><span>{text("全球伙伴", "Global Partners")}</span></div><div><strong>100%</strong><span>{text("开源", "Open Source")}</span></div></div>
        <div className="avf-partners"><p>{text("战略联盟", "Strategic Alliance")}</p><div>{partners.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noopener noreferrer">{name}<ArrowUpRight /></a>)}</div></div>
      </section>
    </main>
  );
}
