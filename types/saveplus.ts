export interface RoleItem {
  icon: string;
  title: string;
  description: string;
}

export const rolesFindings: RoleItem[] = [
  {
    icon: "/savePlus/user1.svg",
    title: "The Creator",
    description:
      "This is the individual who initiates and manages a fundraising campaign. They may be organizing the effort on behalf of someone else and are not always the direct beneficiary of the funds raised. Their role is central to shaping the campaign’s message, building trust, and driving engagement throughout the crowdfunding process.",
  },
  {
    icon: "/savePlus/user2.svg",
    title: "The Donor",
    description:
      "An individual who contributes financially to support a cause or campaign they care about. Donors play a vital role in the crowdfunding ecosystem, helping individuals and communities achieve their goals through trust, generosity, and meaningful engagement.",
  },
  {
    icon: "/savePlus/user3.svg",
    title: "The Beneficiary",
    description:
      "The individual or organization that receives the funds raised through donations. Beneficiaries are the end recipients of financial support, and their stories help build trust, transparency, and emotional connection within the crowdfunding platform.",
  },
];

export const designProcess = [
  {
    icon: "/savePlus/designProblem.svg",
    title: "Synthesising the Problem",
    description:
      "How might we design a secure, user-centred crowdfunding platform that helps people in East Africa easily raise and receive funds for personal or community causes, built for speed, trust, and local relevance?",
  },
  {
    icon: "/savePlus/designIdea.svg",
    title: "Ideas & Solution",
    description:
      "Design a web-based crowdfunding platform that allows users to create fundraising campaigns, donate to meaningful causes, and receive contributions seamlessly. The platform needed to be intuitive, accessible, and integrated with local payment systems, ensuring a smooth, reliable, and inclusive experience for users across East Africa.",
  },
  {
    icon: "/savePlus/designTarget.svg",
    title: "Impacts",
    description: `We successfully empowered individuals to raise funds for a wide range of personal and community causes, providing timely financial support when it mattered most.
For instance, one family raised $1,440 to cover funeral expenses for a loved one, demonstrating the platform’s real-world impact and ability to connect communities through generosity.`,
  },
];

export interface FeatureSection {
  title: string;
  description: string;
  image?: string;
  reverse?: boolean;
  features?: string[];
  conclusion?: string;
  link?: {
    text: string;
    url: string;
  };
}

export const featureSections: FeatureSection[] = [
  {
    title: "Landing Page",
    description: `I designed the landing page with a focus on cultural relevance, emotional connection, and user trust. Every visual element, from the carefully selected imagery to the integration of Imigongo, a traditional East African design pattern, was chosen to create a familiar and authentic user experience that resonates with local audiences.
This culturally inspired design approach not only fosters trust but also encourages users to support meaningful causes within their communities.
To enhance usability, I included a brief onboarding walkthrough that helps first-time users quickly understand how the crowdfunding platform works, making the experience accessible, engaging, and easy to navigate from the very first interaction.`,
    image: "/savePlus/pc1.svg",
  },
  {
    title: "Cause Card View",
    description: `I designed the cause card to give donors essential information at a glance, making it easier for them to make informed and confident giving decisions. Each card includes a beneficiary image, a short cause description, and a category label, all crafted to provide context, clarity, and emotional connection.
To strengthen trust and transparency, I added a progress indicator that displays how much has been raised toward the campaign goal, along with a verified badge confirming that the cause has been reviewed and approved by the platform.
Additionally, donors can easily share campaigns across channels, helping to increase visibility, reach, and community participation. This thoughtful design ensures the crowdfunding experience feels credible, engaging, and user-centered from discovery to donation.`,
    image: "/savePlus/pc2.svg",
    reverse: true,
  },
  {
    title: "Donate to a Cause",
    description: "",
    image: "/savePlus/pc3.svg",
    features: [
      "Designed a seamless donation flow to minimize friction, enhance usability, and encourage more contributions.",
      "Integrated multiple payment options, including debit cards and Mobile Money, to cater to diverse user preferences across East Africa.",
      "Added an option for donors to contribute anonymously or share selected personal details, promoting privacy, trust, and transparency.",
      "Enabled easy social sharing of causes with friends and family to boost visibility, reach, and community engagement across networks.",
    ],
    conclusion:
      "This user-centered approach ensured the donation experience was intuitive, inclusive, and optimized for conversion.",
  },
  {
    title: "Cash Out",
    description: `At the end of each campaign, the creator can seamlessly withdraw the funds raised, ensuring a smooth and transparent payout process...`,
    image: "/savePlus/pc4.svg",
    features: [
      "At the end of each campaign, the creator can seamlessly withdraw the funds raised, ensuring a smooth and transparent payout process.",
      "All funds are securely transferred to the verified bank account provided during the cause setup, guaranteeing safe, reliable, and traceable disbursement.",
      "This process reinforces trust, accountability, and financial transparency, key pillars of a user-centered crowdfunding experience.",
    ],
    reverse: true,
  },
  {
    title: "Developer Handoff",
    description: `I developed a structured, component-based design system to ensure visual consistency, scalability, and efficiency across the platform. This system streamlined collaboration between design and engineering, enabling faster development and easier maintenance. I facilitated a smooth design-to-development handoff using Figma, providing detailed documentation and specifications to ensure accurate implementation. This approach minimized communication gaps, improved team efficiency, and maintained pixel-perfect alignment, thereby strengthening the overall UX and product delivery workflow.`,
  },
  {
    title: "Learning & Achievement",
    description: `The platform has helped users raise over $400,000, making a tangible impact in East Africa. Specific examples include Jules Karitanyi's family raising $1,400 for a father's burial and Ubuhamya using SavePlus for cancer treatment.
The platform's real-world value in empowering communities through digital crowdfunding during critical moments reinforces SavePlus's mission as a trusted, inclusive, and impactful platform for human stories and meaningful change.`,
    link: {
      text: "Video here",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  },
];
