"use client";

import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import VerifiedIcon from "@mui/icons-material/Verified";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PlaceIcon from "@mui/icons-material/Place";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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

export default function InfluencerProfileView({ influencer }: { influencer: Influencer }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { open, message, showToast, closeToast } = useToast();

  const contentCategories = influencer.category.split("&").map((tag) => tag.trim());

  const stats = [
    { label: "Followers", value: `${influencer.displayFollowers}` },
    { label: "Engagement Rate", value: influencer.engagementRate },
    { label: "Completed Collaborations", value: `${influencer.completedCampaigns}` },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Button
          component={Link}
          href="/influencers"
          startIcon={<ArrowBackIcon />}
          color="inherit"
          sx={{ mb: 3, pl: 0 }}
        >
          Back to Influencers
        </Button>

        <Paper variant="outlined" sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, mb: 3 }}>
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: "center" }}>
              <Avatar
                sx={{
                  bgcolor: influencer.avatarColor,
                  width: 140,
                  height: 140,
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  mx: "auto",
                  mb: 2,
                }}
              >
                {initials(influencer.name)}
              </Avatar>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => setModalOpen(true)}
              >
                Collaborate with {influencer.name.split(" ")[0]}
              </Button>
            </Grid>
            <Grid size={{ xs: 12, sm: 8 }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  {influencer.name}
                </Typography>
                {influencer.verified && <VerifiedIcon color="primary" />}
              </Stack>
              <Stack direction="row" spacing={0.5} sx={{ alignItems: "center", mt: 0.5, mb: 1.5 }}>
                <InstagramIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                <Typography variant="body2" color="text.secondary">
                  {influencer.username}
                </Typography>
              </Stack>
              <Chip label={influencer.category} size="small" sx={{ mb: 2 }} />
              <Stack direction="row" spacing={3} sx={{ mb: 2, flexWrap: "wrap" }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                  <PeopleAltIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                  <Typography variant="body2" color="text.secondary">
                    {influencer.displayFollowers} Followers
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                  <PlaceIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                  <Typography variant="body2" color="text.secondary">
                    {influencer.location}
                  </Typography>
                </Stack>
              </Stack>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                About
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {influencer.bio}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={3} sx={{ mb: 3 }}>
          {stats.map((stat) => (
            <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
              <Paper variant="outlined" sx={{ p: 3, borderRadius: 3, textAlign: "center" }}>
                <Typography variant="h5" sx={{ fontWeight: 800, color: "primary.main" }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper variant="outlined" sx={{ p: { xs: 3, md: 4 }, borderRadius: 4, mb: 3 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5 }}>
            Content Categories
          </Typography>
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
            {contentCategories.map((tag) => (
              <Chip key={tag} label={tag} size="small" />
            ))}
          </Stack>
        </Paper>

        <Paper variant="outlined" sx={{ p: { xs: 3, md: 4 }, borderRadius: 4 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5 }}>
            Services Offered
          </Typography>
          <Grid container spacing={1}>
            {influencer.services.map((service) => (
              <Grid key={service} size={{ xs: 12, sm: 6 }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                  <CheckCircleIcon color="primary" sx={{ fontSize: 18 }} />
                  <Typography variant="body2">{service}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>

      <CollaborationModal
        open={modalOpen}
        influencerName={influencer.name}
        onClose={() => setModalOpen(false)}
        onSubmitted={() => showToast("🎉 Collaboration request sent successfully!")}
      />
      <Toast open={open} message={message} onClose={closeToast} />
    </Box>
  );
}
