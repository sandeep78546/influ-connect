import { Campaign } from "@/types";

export const campaigns: Campaign[] = [
  {
    id: "glow-beauty",
    brandName: "Glow Beauty",
    description: "Looking for beauty and skincare influencers to promote our new product.",
    category: "Beauty",
    budgetMin: 10000,
    budgetMax: 25000,
    avatarColor: "#EC4899",
    fullDescription:
      "Glow Beauty is launching a new skincare serum and is looking for beauty and skincare creators to produce authentic review and tutorial content for their followers. We're looking for creators who can showcase real before/after results and speak honestly about the product experience.",
  },
  {
    id: "fitlife",
    brandName: "FitLife",
    description: "Promote our new running shoes to fitness and lifestyle creators.",
    category: "Fashion & Fitness",
    budgetMin: 15000,
    budgetMax: 35000,
    avatarColor: "#F59E0B",
    fullDescription:
      "FitLife is releasing a new line of running shoes designed for everyday athletes. We're seeking fitness and lifestyle creators to share workout content, running routines, and honest performance reviews wearing our latest release.",
  },
  {
    id: "wandermore",
    brandName: "WanderMore",
    description: "Travel influencers needed for upcoming resort launch.",
    category: "Travel",
    budgetMin: 20000,
    budgetMax: 50000,
    avatarColor: "#0EA5E9",
    fullDescription:
      "WanderMore is opening a new beachside resort and wants travel creators to document the guest experience — rooms, amenities, activities, and local attractions — through photos, reels, and stories.",
  },
  {
    id: "techworld",
    brandName: "TechWorld",
    description: "Looking for tech reviewers to promote our latest wireless earbuds.",
    category: "Tech",
    budgetMin: 8000,
    budgetMax: 20000,
    avatarColor: "#7C3AED",
    fullDescription:
      "TechWorld just launched a new pair of wireless earbuds with active noise cancellation. We want tech reviewers to create unboxing videos, sound quality comparisons, and day-in-the-life usage content.",
  },
];
