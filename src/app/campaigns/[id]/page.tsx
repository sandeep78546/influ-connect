import { notFound } from "next/navigation";
import { campaigns } from "@/data/campaigns";
import CampaignDetailsView from "@/components/campaigns/CampaignDetailsView";

export default async function CampaignDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const campaign = campaigns.find((c) => c.id === id);

  if (!campaign) {
    notFound();
  }

  return <CampaignDetailsView campaign={campaign} />;
}

