import { Campaign, Influencer } from "@/types";

export function matchesInfluencerSearch(influencer: Influencer, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    influencer.name.toLowerCase().includes(q) ||
    influencer.category.toLowerCase().includes(q) ||
    influencer.location.toLowerCase().includes(q)
  );
}

export function matchesFollowers(influencer: Influencer, minFollowers: number) {
  return influencer.followers >= minFollowers;
}

export function matchesLocation(influencer: Influencer, location: string) {
  if (location === "All") return true;
  return influencer.location.toLowerCase().includes(location.toLowerCase());
}

export function matchesCampaignSearch(campaign: Campaign, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    campaign.brandName.toLowerCase().includes(q) ||
    campaign.title.toLowerCase().includes(q) ||
    campaign.category.toLowerCase().includes(q)
  );
}

export function matchesBudget(campaign: Campaign, min: number, max: number) {
  return campaign.budgetMin <= max && campaign.budgetMax >= min;
}
