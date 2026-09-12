export interface Influencer {
  id: string;
  name: string;
  username: string;
  category: string;
  followers: number;
  displayFollowers: string;
  location: string;
  verified: boolean;
  avatarColor: string;
  bio: string;
  services: string[];
  engagementRate: string;
  completedCampaigns: number;
}

export interface Campaign {
  id: string;
  brandName: string;
  title: string;
  description: string;
  category: string;
  budgetMin: number;
  budgetMax: number;
  displayBudget: string;
  location: string;
  avatarColor: string;
  fullDescription: string;
  requirements: string[];
  deliverables: string[];
}
