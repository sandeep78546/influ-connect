import { notFound } from "next/navigation";
import { influencers } from "@/data/influencers";
import InfluencerProfileView from "@/components/influencers/InfluencerProfileView";

export default async function InfluencerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const influencer = influencers.find((i) => i.id === id);

  if (!influencer) {
    notFound();
  }

  return <InfluencerProfileView influencer={influencer} />;
}

