"use client";

import * as React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import VerifiedIcon from "@mui/icons-material/Verified";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PlaceIcon from "@mui/icons-material/Place";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Influencer } from "@/types";
import CollaborationModal from "@/components/influencers/CollaborationModal";
import Toast from "@/components/common/Toast";
import { useToast } from "@/hooks/useToast";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function InfluencerCard({ influencer }: { influencer: Influencer }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { open, message, showToast, closeToast } = useToast();

  return (
    <Card variant="outlined" sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 2 }}>
          <Avatar sx={{ bgcolor: influencer.avatarColor, width: 56, height: 56, fontWeight: 700 }}>
            {initials(influencer.name)}
          </Avatar>
          <Box>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {influencer.name}
              </Typography>
              {influencer.verified && (
                <VerifiedIcon color="primary" sx={{ fontSize: 18 }} />
              )}
            </Stack>
            <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
              <InstagramIcon sx={{ fontSize: 14, color: "text.secondary" }} />
              <Typography variant="caption" color="text.secondary">
                {influencer.username}
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Stack spacing={0.75} sx={{ mb: 2.5, flexGrow: 1 }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <PhotoCameraIcon sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
              {influencer.category}
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <PeopleAltIcon sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
              {influencer.displayFollowers} Followers
            </Typography>
          </Stack>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <PlaceIcon sx={{ fontSize: 16, color: "text.secondary" }} />
            <Typography variant="body2" color="text.secondary">
              {influencer.location}
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={1.5}>
          <Button
            component={Link}
            href={`/influencers/${influencer.id}`}
            variant="outlined"
            size="small"
            fullWidth
          >
            View Profile
          </Button>
          <Button
            onClick={() => setModalOpen(true)}
            variant="contained"
            color="primary"
            size="small"
            fullWidth
          >
            Collaborate
          </Button>
        </Stack>
      </CardContent>

      <CollaborationModal
        open={modalOpen}
        influencerName={influencer.name}
        onClose={() => setModalOpen(false)}
        onSubmitted={() => showToast("🎉 Collaboration request sent successfully!")}
      />
      <Toast open={open} message={message} onClose={closeToast} />
    </Card>
  );
}

