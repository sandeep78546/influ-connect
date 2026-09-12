"use client";

import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlaceIcon from "@mui/icons-material/Place";
import { Campaign } from "@/types";
import ApplicationModal from "@/components/campaigns/ApplicationModal";
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

export default function CampaignDetailsView({ campaign }: { campaign: Campaign }) {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { open, message, showToast, closeToast } = useToast();

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Button
          component={Link}
          href="/campaigns"
          startIcon={<ArrowBackIcon />}
          color="inherit"
          sx={{ mb: 3, pl: 0 }}
        >
          Back to Campaigns
        </Button>

        <Paper variant="outlined" sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, mb: 3 }}>
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: "center" }}>
              <Avatar
                variant="rounded"
                sx={{
                  bgcolor: campaign.avatarColor,
                  width: 120,
                  height: 120,
                  fontSize: "2rem",
                  fontWeight: 700,
                  mx: "auto",
                  mb: 2,
                  borderRadius: 3,
                }}
              >
                {initials(campaign.brandName)}
              </Avatar>
              <Button variant="contained" color="primary" fullWidth onClick={() => setModalOpen(true)}>
                Apply for Campaign
              </Button>
            </Grid>
            <Grid size={{ xs: 12, sm: 8 }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600 }}>
                {campaign.brandName}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                {campaign.title}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center", flexWrap: "wrap", mb: 2 }}>
                <Chip label={campaign.category} size="small" />
                {campaign.location && (
                  <Stack direction="row" spacing={0.5} sx={{ alignItems: "center", ml: 1 }}>
                    <PlaceIcon sx={{ fontSize: 16, color: "text.secondary" }} />
                    <Typography variant="body2" color="text.secondary">
                      {campaign.location}
                    </Typography>
                  </Stack>
                )}
              </Stack>
              <Typography variant="body1" sx={{ fontWeight: 700, mb: 2, color: "primary.main" }}>
                Budget: {campaign.displayBudget}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
                About the Campaign
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {campaign.fullDescription}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper variant="outlined" sx={{ p: { xs: 3, md: 4 }, borderRadius: 4, height: "100%" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5 }}>
                Requirements
              </Typography>
              <Stack spacing={1}>
                {campaign.requirements.map((requirement) => (
                  <Stack key={requirement} direction="row" spacing={1} sx={{ alignItems: "center" }}>
                    <CheckCircleIcon color="primary" sx={{ fontSize: 18 }} />
                    <Typography variant="body2">{requirement}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <Paper variant="outlined" sx={{ p: { xs: 3, md: 4 }, borderRadius: 4, height: "100%" }}>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1.5 }}>
                Deliverables
              </Typography>
              <Stack spacing={1}>
                {campaign.deliverables.map((deliverable) => (
                  <Typography key={deliverable} variant="body2" color="text.secondary">
                    • {deliverable}
                  </Typography>
                ))}
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <ApplicationModal
        open={modalOpen}
        brandName={campaign.brandName}
        onClose={() => setModalOpen(false)}
        onSubmitted={() => showToast("🎉 Your application has been submitted successfully!")}
      />
      <Toast open={open} message={message} onClose={closeToast} />
    </Box>
  );
}
