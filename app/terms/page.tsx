import BilingualDocument, { type DocumentSection } from "@/components/BilingualDocument";

const sections: DocumentSection[] = [
  {
    title: { zh: "接受条款", en: "Acceptance" },
    paragraphs: [{ zh: "访问或使用 AI Vision Forum 网站与服务，即表示你同意遵守本使用条款。如果你不同意，请停止使用相关服务。", en: "By accessing or using the AI Vision Forum site and services, you agree to these terms. If you do not agree, please do not use the services." }],
  },
  {
    title: { zh: "服务内容", en: "What we provide" },
    paragraphs: [{ zh: "论坛提供与人本人工智能相关的研究、开放项目、工作组、出版物与活动信息。部分内容或服务由合作机构和第三方平台提供。", en: "The forum provides research, open projects, working groups, publications and event information related to human-centered AI. Some content and services are provided by partners or third-party platforms." }],
  },
  {
    title: { zh: "使用者责任", en: "Your responsibilities" },
    items: [
      { zh: "在需要时提供准确、完整的信息。", en: "Provide accurate and complete information when required." },
      { zh: "遵守适用法律，并尊重他人的知识产权与隐私。", en: "Follow applicable law and respect the intellectual property and privacy of others." },
      { zh: "以专业、建设性的方式参与社区。", en: "Participate in a professional and constructive manner." },
      { zh: "妥善保护任何与你相关的账户凭证。", en: "Keep any account credentials associated with your participation secure." },
    ],
  },
  {
    title: { zh: "知识产权", en: "Intellectual property" },
    paragraphs: [{ zh: "论坛项目可能适用不同的开放许可，具体以相应项目或资料所标注的许可为准。参与者保留其贡献的权利，同时同意按照相关许可提供和使用这些贡献。", en: "Forum projects may use different open licences; the licence stated on each project or publication governs. Contributors retain rights in their work while making it available under the applicable terms." }],
  },
  {
    title: { zh: "禁止行为", en: "Prohibited conduct" },
    items: [
      { zh: "将服务用于违法、欺诈或伤害他人的目的。", en: "Use the services for unlawful, fraudulent or harmful purposes." },
      { zh: "骚扰、辱骂、冒充他人或歪曲与论坛的关系。", en: "Harass, abuse or impersonate others, or misrepresent an affiliation with the forum." },
      { zh: "传播恶意软件或试图未经授权访问系统与数据。", en: "Distribute malware or attempt unauthorised access to systems or data." },
    ],
  },
  {
    title: { zh: "免责声明", en: "Disclaimer" },
    paragraphs: [{ zh: "网站与服务按现状提供。在法律允许的范围内，论坛不对内容的完整性、准确性、持续可用性或特定用途适用性作出明示或默示保证。", en: "The site and services are provided as available. To the extent permitted by law, the forum makes no express or implied warranty about completeness, accuracy, continued availability or fitness for a particular purpose." }],
  },
  {
    title: { zh: "责任限制", en: "Limitation of liability" },
    paragraphs: [{ zh: "在法律允许的范围内，AI Vision Forum 不对因使用或无法使用网站与服务而产生的间接、附带、特殊或后果性损失承担责任。", en: "To the extent permitted by law, AI Vision Forum is not liable for indirect, incidental, special or consequential loss arising from the use of, or inability to use, the site or services." }],
  },
  {
    title: { zh: "条款变更", en: "Changes" },
    paragraphs: [{ zh: "我们可能根据服务变化更新本条款。更新后的内容在网站发布时生效，页面将标明更新日期。", en: "We may update these terms as the services change. Revised terms take effect when posted, and the page will show the update date." }],
  },
  {
    title: { zh: "联系我们", en: "Contact" },
    paragraphs: [{ zh: "如对本条款有疑问，请发送邮件至 contact@visionforum.ai。", en: "For questions about these terms, email contact@visionforum.ai." }],
  },
];

export default function TermsOfService() {
  return <BilingualDocument label="POLICY 02" title={{ zh: "使用条款", en: "Terms of Service" }} updated={{ zh: "生效日期：2026 年 8 月", en: "Effective August 2026" }} sections={sections} />;
}
