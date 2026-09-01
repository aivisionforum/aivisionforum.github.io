import BilingualDocument, { type DocumentSection } from "@/components/BilingualDocument";

const sections: DocumentSection[] = [
  {
    title: { zh: "共同承诺", en: "Our shared pledge" },
    paragraphs: [
      { zh: "AI Vision Forum 的成员、贡献者与组织者承诺，为所有人提供不受骚扰的参与体验，不因年龄、身体状况、残障、族裔、性别身份与表达、经验、教育、社会经济地位、国籍、外貌、种族、宗教、性取向或其他个人特征而区别对待。", en: "Members, contributors and organisers of AI Vision Forum pledge to provide a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, sex characteristics, gender identity or expression, experience, education, socio-economic status, nationality, appearance, race, religion, sexual identity or orientation, or other personal characteristics." },
      { zh: "我们以开放、友善、尊重差异并有益于共同体健康的方式交流。", en: "We act and interact in ways that support an open, welcoming, diverse and healthy community." },
    ],
  },
  {
    title: { zh: "我们鼓励的行为", en: "Behaviour we encourage" },
    items: [
      { zh: "对他人保持同理心与善意。", en: "Showing empathy and kindness toward others." },
      { zh: "尊重不同意见、背景与经验。", en: "Respecting different opinions, backgrounds and experiences." },
      { zh: "提出并从容接受建设性反馈。", en: "Giving and receiving constructive feedback gracefully." },
      { zh: "承认错误、承担影响并真诚改正。", en: "Acknowledging mistakes, taking responsibility for their impact and making amends." },
      { zh: "关注整个社区的长期利益，以及人工智能开发可能带来的伦理影响。", en: "Considering the long-term health of the community and the ethical consequences of AI development." },
    ],
  },
  {
    title: { zh: "不可接受的行为", en: "Unacceptable behaviour" },
    items: [
      { zh: "带有性意味的语言、图像或不受欢迎的性关注。", en: "Sexualised language or imagery, or unwelcome sexual attention." },
      { zh: "恶意挑衅、侮辱、贬损评论、人身攻击或政治攻击。", en: "Trolling, insults, derogatory comments, or personal or political attacks." },
      { zh: "公开或私下骚扰、威胁或恐吓。", en: "Public or private harassment, threats or intimidation." },
      { zh: "未经明确许可发布他人的私人信息。", en: "Publishing another person’s private information without explicit permission." },
      { zh: "在专业环境中可被合理认为不当的行为，或鼓励不负责任地使用人工智能。", en: "Conduct reasonably considered inappropriate in a professional setting, or advocacy of irresponsible uses of AI." },
    ],
  },
  {
    title: { zh: "适用范围", en: "Scope" },
    paragraphs: [{ zh: "本准则适用于论坛的 GitHub 仓库与讨论、邮件组、线上和线下活动、工作组会议，以及代表 AI Vision Forum 参与的公开空间。", en: "This code applies to forum GitHub repositories and discussions, mailing lists, online and in-person events, working-group meetings and public spaces where someone is representing AI Vision Forum." }],
  },
  {
    title: { zh: "执行责任", en: "Enforcement responsibilities" },
    paragraphs: [{ zh: "社区组织者负责解释并执行本准则，并对不当、威胁性、冒犯性或有害行为采取适当且公平的措施。为保护社区，组织者可以删除、编辑或拒绝不符合本准则的评论、提交、议题及其他贡献。", en: "Community organisers are responsible for interpreting and enforcing this code, and for taking appropriate, fair action in response to inappropriate, threatening, offensive or harmful behaviour. To protect the community, organisers may remove, edit or reject comments, commits, issues and other contributions that do not align with this code." }],
  },
  {
    title: { zh: "举报与处理", en: "Reporting and response" },
    paragraphs: [
      { zh: "如遇骚扰、威胁或其他不可接受的行为，请发送邮件至 contact@visionforum.ai。", en: "To report harassment, threats or other unacceptable behaviour, email contact@visionforum.ai." },
      { zh: "我们将及时、公平地审查举报，尊重举报人的隐私与安全。根据行为的性质、影响和重复程度，处理措施可能包括私下提醒、正式警告、暂时限制参与或永久禁止参与。", en: "Reports will be reviewed promptly and fairly, with respect for the reporter’s privacy and safety. Depending on the nature, impact and repetition of the behaviour, responses may include a private correction, formal warning, temporary restriction or permanent ban." },
    ],
  },
  {
    title: { zh: "来源", en: "Attribution" },
    paragraphs: [{ zh: "本准则参考 Contributor Covenant 2.1 版，并结合 AI Vision Forum 的跨学科与人工智能伦理讨论场景进行调整。", en: "This code is adapted from Contributor Covenant version 2.1 and adjusted for the interdisciplinary and AI-ethics context of AI Vision Forum." }],
  },
];

export default function CodeOfConduct() {
  return <BilingualDocument label="COMMUNITY 01" title={{ zh: "行为准则", en: "Code of Conduct" }} updated={{ zh: "版本 2.0 · 2026 年 8 月", en: "Version 2.0 · August 2026" }} sections={sections} />;
}
