export interface AlignedSection {
  leftTitle?: string;
  leftDescription?: string;
  leftSubtitle?: string;
  leftImage?: string;
  rightHeading: string;
  rightDescription?: string;
  rightBullets?: string[];
  rightConclusion?: string;
  rightHeading2?: string;
  rightDescription2?: string;
  rightBullets2?: string[];
}

export const alignedSections: AlignedSection[] = [
  {
    leftTitle: "CouponVouch",
    leftSubtitle:
      "Making online shopping smarter, with verified deals you can actually trust.",
    rightHeading: "Project Overview",
    rightDescription: `CouponVouch is a deals and voucher aggregation platform that helps users discover trusted coupon codes, discounts, and promos all in one place. By aggregating offers from major brands and retailers, CouponVouch enables smart shopping, cost savings, and better deal discovery.`,
  },
  {
    leftTitle: "The Challenge",
    leftDescription:
      "In many cities, ride-hailing experiences can feel transactional and confusing.",
    rightHeading: "Users often face challenges such as:",
    rightBullets: [
      "Many shoppers struggle to find valid, working coupons across different stores and waste time hunting them down.",
      "Platforms often display expired or invalid codes, undermining trust and frustrating users.",
      "Aggregator sites typically have cluttered layouts and poor discoverability, making it hard to filter and find relevant deals.",
      "Users want a fast, reliable, and trustworthy way to access discounts without sifting through noise.",
    ],
  },
  {
    leftTitle: "My Role",
    leftDescription:
      "As the Product Designer, I took on the responsibility of transforming CouponVouch into a user-centric coupon platform.",
    rightHeading: "My key responsibilities included:",
    rightBullets: [
      "Researching competitive coupon sites and user behaviour around coupon use",
      "Defining user flows and information architecture",
      "Designing wireframes, high-fidelity mockups, and interactive prototypes",
      "Building a modular design system for consistency",
      "Conducting usability tests and iterating designs based on feedback",
    ],
  },
  {
    leftTitle: "Research & Discovery",
    leftImage: "/coupvouch/researchDis.svg",
    rightHeading: "User Interviews",
    rightDescription: `I spoke with users who frequently search for coupons, asking about frustrations when codes don't work, how they verify discounts, and what features would make saving easier. Key insights included:`,
    rightBullets: [
      "Users want quick confirmation that a code is still valid",
      "They prefer minimal friction (e.g. not too many clicks)",
      "Trust is critical — they want assurance the platform is reliable",
    ],
    rightHeading2: "Persona & Problem Definition",
    rightDescription2: "Based on research, I defined primary user groups:",
    rightBullets2: [
      "Deal Hunters: Frequent shoppers always on the lookout for discounts",
      "Occasional Savers: Users who search for deals only before big purchases",
      "Skeptical Users: People who often doubt whether a coupon will actually work",
    ],
  },
  {
    leftTitle: "Design & Iteration",
    rightHeading: "High-Fidelity Design",
    rightDescription: `Building on the defined structure, I designed clean, high-fidelity UI screens that emphasize clarity, visual hierarchy, and trust. Each interface element was crafted to make browsing and discovering coupons effortless and reliable.

I focused on incorporating key trust signals such as "Verified" badges, clear expiry indicators, and easy-to-scan coupon cards. Additionally, I designed intuitive search, filtering, and bookmarking features to help users quickly find and save deals that matter most to them.

The overall design reflects a modern, minimal, and trustworthy shopping experience, ensuring users feel confident every time they interact with the platform.`,
  },
];

export const outcomeSection = {
  leftTitle: "Outcome",
  bullets: [
    "Users reported higher confidence that coupon codes would work.",
    "The platform experienced increased engagement and higher click-through rates on deals.",
    "Bookmarking and sharing of deals grew, boosting overall reach.",
    "The modular design system made it easier for the engineering team to maintain consistency.",
    'Trust signals like "Verified" and expiration dates reduced user frustration and abandonment.',
  ],
};

export const reflectionSection = {
  leftTitle: "Reflection & Learnings",
  bullets: [
    "Trust indicators (verification badges, expiry status, source labels) are essential in a deals platform.",
    "Simplicity and clarity outperform feature-heavy interfaces.",
    "Early testing and iteration prevent major usability issues down the line.",
    "A solid design system is a long-term investment that pays off in scalability and faster development.",
  ],
  link: {
    text: "Link to site",
    url: "https://www.couponvouch.com",
  },
};
