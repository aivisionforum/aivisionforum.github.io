import BilingualDocument, { type DocumentSection } from "@/components/BilingualDocument";

const sections: DocumentSection[] = [
  {
    title: { zh: "说明", en: "Introduction" },
    paragraphs: [{ zh: "AI Vision Forum 重视你的隐私。本政策说明当你访问网站、订阅通讯或参与论坛活动时，我们可能如何收集、使用与保护信息。", en: "AI Vision Forum respects your privacy. This policy explains how information may be collected, used and protected when you visit this site, subscribe to updates or take part in forum activities." }],
  },
  {
    title: { zh: "我们收集的信息", en: "Information we collect" },
    paragraphs: [{ zh: "我们只收集提供服务所需的信息。", en: "We collect only the information needed to provide our services." }],
    items: [
      { zh: "你在报名活动或订阅通讯时主动提供的姓名、电子邮箱与机构信息。", en: "Your name, email address and affiliation when you register for an event or mailing list." },
      { zh: "网站访问与使用方式等基本技术信息。", en: "Basic technical information about how the site is accessed and used." },
      { zh: "你通过 GitHub、邮件组或论坛讨论主动提交的内容。", en: "Content you choose to contribute through GitHub, mailing lists or forum discussions." },
    ],
  },
  {
    title: { zh: "信息用途", en: "How information is used" },
    items: [
      { zh: "支持你参与论坛、工作组与相关活动。", en: "To support your participation in forums, working groups and events." },
      { zh: "发送你选择接收的报告、活动与社区动态。", en: "To send reports, event notices and community updates you have chosen to receive." },
      { zh: "维护并改进网站与社区服务。", en: "To maintain and improve the site and community services." },
    ],
  },
  {
    title: { zh: "共享与披露", en: "Sharing and disclosure" },
    paragraphs: [
      { zh: "AI Vision Forum 不会出售或出租你的个人信息。", en: "AI Vision Forum does not sell or rent personal information." },
      { zh: "在共同组织活动、提供必要技术服务或法律明确要求时，信息可能与合作机构、服务供应商或有关机关共享。我们只提供完成相应事项所需的信息。", en: "Information may be shared with event partners, essential service providers or relevant authorities when legally required. We limit sharing to what is needed for that purpose." },
    ],
  },
  {
    title: { zh: "数据安全", en: "Data security" },
    paragraphs: [{ zh: "我们采取合理的技术与组织措施，防止信息被未经授权地访问、更改、披露或销毁。任何网络服务都无法承诺绝对安全。", en: "We use reasonable technical and organisational measures to guard against unauthorised access, alteration, disclosure or destruction. No online service can promise absolute security." }],
  },
  {
    title: { zh: "你的选择与权利", en: "Your choices and rights" },
    items: [
      { zh: "查询我们持有的与你有关的个人信息。", en: "Ask what personal information we hold about you." },
      { zh: "要求更正不准确的信息或删除适用范围内的信息。", en: "Request correction of inaccurate information or deletion where applicable." },
      { zh: "通过邮件中的退订链接停止接收通讯。", en: "Stop receiving updates through the unsubscribe link in any mailing." },
    ],
  },
  {
    title: { zh: "联系我们", en: "Contact" },
    paragraphs: [{ zh: "如对本政策或个人信息处理有疑问，请发送邮件至 contact@visionforum.ai。", en: "For questions about this policy or the handling of personal information, email contact@visionforum.ai." }],
  },
];

export default function PrivacyPolicy() {
  return <BilingualDocument label="POLICY 01" title={{ zh: "隐私政策", en: "Privacy Policy" }} updated={{ zh: "更新日期：2026 年 8 月", en: "Updated August 2026" }} sections={sections} />;
}
