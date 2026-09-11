export interface Influencer {
  id: string;
  name: string;
  category: string;
  followers: string;
  location: string;
  verified: boolean;
  avatarColor: string;
  bio: string;
}

export interface Campaign {
  id: string;
  brandName: string;
  description: string;
  category: string;
  budgetMin: number;
  budgetMax: number;
  avatarColor: string;
  fullDescription: string;
}
