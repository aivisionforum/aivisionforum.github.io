"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function JoinMailingList() {
  const { text } = useLanguage();
  const joinUrl = "https://aivisionforum.groups.io/g/members/join";
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(joinUrl)}`;

  return (
    <main className="avf-page">
      <div className="avf-page__shell">
        <Link href="/" className="avf-page__back"><ArrowLeft /> {text("返回首页", "Back to home")}</Link>
        <section className="avf-join">
          <div className="avf-join__intro">
            <p className="avf-eyebrow">{text("加入论坛通讯", "Join the forum list")}</p>
            <h1>{text("保持联系，不制造噪音。", "Stay in touch, without the noise.")}</h1>
            <p className="avf-join__lead">{text("我们只在有新报告、活动或值得继续的讨论时发信。你也可以通过邮件组加入具体议题。", "We write when there is a new report, a gathering or a conversation worth continuing. You can also join topic-specific mailing lists.")}</p>
            <div className="avf-join__benefits">
              <div><strong>{text("新报告", "New reports")}</strong><span>{text("论坛记录、研究成果与公开倡议。", "Forum records, research and public initiatives.")}</span></div>
              <div><strong>{text("活动通知", "Gathering notes")}</strong><span>{text("即将举行的论坛与报名信息。", "Upcoming forums and registration information.")}</span></div>
              <div><strong>{text("工作组进展", "Working-group updates")}</strong><span>{text("开放项目、邮件组与参与机会。", "Open projects, mailing lists and ways to contribute.")}</span></div>
            </div>
          </div>

          <aside className="avf-join__card">
            <h2>{text("订阅 AI Vision Forum", "Subscribe to AI Vision Forum")}</h2>
            <p>{text("点击后将前往 Groups.io 完成订阅。你可以随时退订。", "You’ll continue to Groups.io to confirm your subscription. You can unsubscribe at any time.")}</p>
            <a href={joinUrl} target="_blank" rel="noopener noreferrer" className="avf-button avf-button--paper">{text("前往订阅页面", "Continue to subscribe")} <ArrowRight /></a>
            <small>{text("订阅即表示你同意本站的隐私政策与使用条款。", "By subscribing, you agree to this site’s Privacy Policy and Terms of Service.")}</small>
            <div className="avf-join__qr">
              <Image src={qrCodeUrl} alt={text("加入 AI Vision Forum 邮件组的二维码", "QR code for joining the AI Vision Forum mailing list")} width={94} height={94} unoptimized />
              <div><p>{text("也可以扫码加入", "Or scan to join")}</p><span>aivisionforum.groups.io/g/members/join</span></div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
