export interface AlignedSection {
  leftTitle?: string;
  leftDescription?: string;
  leftSubtitle?: string;
  leftImage?: string;
  rightHeading: string;
  rightDescription?: string;
  rightBullets?: string[];
  rightConclusion?: string;
}

export const alignedSections: AlignedSection[] = [
  {
    leftTitle: "Cubos AI",
    leftSubtitle:
      "Leveraging artificial intelligence to transform how news is organised and understood.",
    rightHeading: "Project Overview",
    rightDescription: `Cubos is an AI-powered news classification platform that's transforming how individuals and organizations consume, personalize, and engage with digital news. Using advanced machine learning models, Cubos delivers a customized news feed curated around each user's interests and reading behavior. The platform intelligently categorizes and identifies article topics, ensuring users always access the most relevant, insightful, and meaningful stories in real time.

Cubos is a SaaS platform designed to help users navigate and understand large volumes of online news content through the power of artificial intelligence. By intelligently classifying and personalizing articles, Cubos aims to reduce information overload and provide a focused, relevant, and streamlined news experience. Its AI-driven recommendation system ensures users engage only with the most meaningful and interest-based content, enhancing both efficiency and user satisfaction.`,
  },
  {
    leftTitle: "Role and Responsibilities",
    leftImage: "/cubos/cubos-people.png",
    rightHeading: "My role & the team",
    rightDescription:
      "As the Product Designer on the Cubos AI-powered news platform, I collaborated within a cross-functional team of engineers, a QA tester, and a product manager to deliver an intuitive, scalable, and visually engaging product experience. I led the end-to-end visual design process, transforming early concepts into high-fidelity interactive prototypes.",
    rightBullets: [
      "Designing intuitive user flows for core features such as classification creation, content testing, and dashboard management, ensuring seamless interaction and usability.",
      "Facilitating stakeholder feedback sessions to validate design decisions and iterating rapidly based on user and business insights.",
      "Building a modular design system to enhance UI consistency, accelerate development, and maintain a cohesive brand identity across the platform.",
    ],
    rightConclusion:
      "This collaborative and user-centered approach helped shape Cubos into a modern, efficient, and AI-driven SaaS product tailored for smarter news consumption.",
  },
];
