import glassesFolded from "@/assets/glassesFolded.png";

export const teal = "#2ECBBE";

export const imageSet = {
  darkHero:
    "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1800&auto=format&fit=crop",
  macroOne: glassesFolded.src,
  macroTwo: glassesFolded.src,
  macroThree: glassesFolded.src,
  patternGlass:
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1600&auto=format&fit=crop",
  edgeHero:
    "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1800&auto=format&fit=crop",
  innovationHero:
    "https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=1800&auto=format&fit=crop",
  brandHero:
    "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1800&auto=format&fit=crop",
};

export const featureTabs = {
  lens: {
    label: "LENS",
    title: "Lens Technology",
    description:
      "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    image:
      "https://images.unsplash.com/photo-1509695507497-903c140c43b0?q=80&w=1800&auto=format&fit=crop",
  },
  frame: {
    label: "FRAME",
    title: "Frame Material",
    description:
      "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1800&auto=format&fit=crop",
  },
  design: {
    label: "DESIGN",
    title: "Performance Driven Design",
    description:
      "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.",
    image:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?q=80&w=1800&auto=format&fit=crop",
  },
} as const;

export type FeatureKey = keyof typeof featureTabs;
