"use client";

import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import { Campaign } from "@/types";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  return (
    <Card variant="outlined" sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", mb: 1.5 }}>
          <Avatar
            variant="rounded"
            sx={{ bgcolor: campaign.avatarColor, width: 40, height: 40, fontWeight: 700 }}
          >
            {initials(campaign.brandName)}
          </Avatar>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {campaign.brandName}
          </Typography>
        </Stack>

        <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>
          {campaign.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1 }}>
          {campaign.description}
        </Typography>

        <Chip label={campaign.category} size="small" sx={{ mb: 1, alignSelf: "flex-start" }} />

        <Typography variant="body2" sx={{ fontWeight: 600, mb: 2 }}>
          Budget: {campaign.displayBudget}
        </Typography>

        <Button
          component={Link}
          href={`/campaigns/${campaign.id}`}
          variant="contained"
          color="primary"
          fullWidth
        >
          View Campaign
        </Button>
      </CardContent>
    </Card>
  );
}
