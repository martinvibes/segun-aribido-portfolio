export interface AlignedSection {
  leftTitle?: string;
  leftDescription?: string;
  leftSubtitle?: string;
  rightHeading: string;
  rightDescription?: string;
  rightBullets?: string[];
  rightConclusion?: string;
}

export const alignedSections: AlignedSection[] = [
  {
    leftTitle: "Farely",
    leftSubtitle:
      "Designing a seamless ride-hailing experience that simplifies fare comparison.",
    rightHeading: "Project Overview",
    rightDescription: `Farely is a ride-hailing mobile app designed to make city transportation simpler, faster, and more delightful. Inspired by Duolingo's playful design language, Farely focuses on friendly onboarding, engaging micro-interactions, and trust-building visual communication to redefine how people book rides in emerging markets.

My goal as the Product Designer was to craft a fun, intuitive, and emotionally engaging experience that reduces cognitive load and increases user confidence, especially for first-time riders in digital mobility apps.`,
  },
  {
    leftTitle: "Problem",
    leftDescription:
      "In many cities, ride-hailing experiences can feel transactional and confusing.",
    rightHeading: "Users often face challenges such as:",
    rightBullets: [
      "Complicated sign-up or verification processes",
      "Poor feedback loops during ride booking or payment",
      "A lack of emotional engagement or trust-building in the interface",
    ],
    rightConclusion:
      "Farely set out to solve this by creating a lightweight, human-centered alternative that's both functional and emotionally rewarding.",
  },
  {
    leftTitle: "Design Goal",
    leftDescription:
      "In many cities, ride-hailing experiences can feel transactional and confusing.",
    rightHeading:
      "Create a delightful, intuitive ride-hailing experience that:",
    rightBullets: [
      "Simplifies onboarding and booking in under 30 seconds",
      "Uses micro-interactions to provide feedback and emotion",
      "Builds trust and familiarity through clear visuals and tone of voice",
      "Encourages users to explore features without feeling overwhelmed",
    ],
  },
  {
    leftTitle: "Research",
    leftDescription:
      "I conducted comparative UX research on platforms like Bolt, Uber, and inDriver to understand what frustrates or delights users.",
    rightHeading: "Key insights included:",
    rightBullets: [
      "Users want quick access to booking without lengthy registration.",
      "Animated feedback (like confirmations, progress bars, or icons) helps build confidence.",
      "A friendly tone and playful visuals increase trust and memorability.",
    ],
  },
];

export const userPersonasSection = {
  leftTitle: "User Personas",
  rightIntro: "Based on research, two key personas were developed:",
  rightDescription:
    "Through this research, I identified three primary user groups commonly involved in the fundraising journey:",
  personas: [
    {
      icon: "/savePlus/user1.svg",
      title: "The Everyday Commuter",
      description: "values speed, convenience, and reliability.",
    },
    {
      icon: "/savePlus/user2.svg",
      title: "The First-Time User",
      description:
        "needs reassurance, clear instructions, and positive reinforcement.",
    },
  ],
};

export const designApproachSection = {
  leftTitle: "Design Approach",
  items: [
    {
      number: "1",
      title: "Seamless Onboarding",
      bullets: [
        "Eliminated the mandatory sign-up barrier, users can start exploring without logging in.",
        "Integrated progressive onboarding tips, inspired by Duolingo's gamified approach, introducing features naturally as users interact.",
      ],
      image: "/farely/designApproach1.svg",
    },
    {
      number: "2",
      title: "Intuitive Ride Flow",
      bullets: [
        "Designed a three-step booking process: (1) Pick location → (2) Choose ride → (3) Confirm fare.",
        "Added animated feedback for searching, confirmation, and arrival states, making waiting moments feel engaging, not empty.",
      ],
      image: "/farely/designApproach2.svg",
    },
    {
      number: "3",
      title: "Trust & Transparency",
      bullets: [
        "Integrated real-time driver tracking, fare breakdown visibility, and in-app chat.",
        "Designed a driver card layout highlighting name, vehicle details, and rating, making riders feel informed and safe.",
      ],
      image: "/farely/designApproach3.svg",
    },
  ],
};

export const outcomeSection = {
  leftTitle: "Outcome",
  bullets: [
    "Faster booking time: reduced from 5 screens to 3 steps.",
    "Increased engagement: testers revisited the prototype 2-3 times more than competitors.",
    "Positive emotional feedback: playful tone and visuals created an inviting experience.",
  ],
  conclusion:
    "Farely demonstrates how human-centered design, motion, and simplicity can transform everyday mobility apps into experiences that people actually enjoy using.",
};

export const reflectionSection = {
  leftTitle: "Reflection",
  description:
    "Designing Farely taught me the power of emotion-driven interaction in functional products. A ride-hailing app doesn't just need to be efficient, it should make users feel in control, safe, and delighted. By blending usability with personality, Farely reimagines what digital mobility can feel like.",
};
