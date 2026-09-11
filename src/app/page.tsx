"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import InfluencerCard from "@/components/influencers/InfluencerCard";
import CampaignCard from "@/components/campaigns/CampaignCard";
import { influencers } from "@/data/influencers";
import { campaigns } from "@/data/campaigns";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorks />

      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "grey.50" }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-end", mb: 3 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                Top Instagram Influencers
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover amazing creators across different niches.
              </Typography>
            </Box>
            <Typography
              component={Link}
              href="/influencers"
              variant="body2"
              sx={{ fontWeight: 700, color: "primary.main", textDecoration: "none", whiteSpace: "nowrap" }}
            >
              View All &rarr;
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {influencers.slice(0, 4).map((influencer) => (
              <Grid key={influencer.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <InfluencerCard influencer={influencer} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Stack direction="row" sx={{ justifyContent: "space-between", alignItems: "flex-end", mb: 3 }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                Featured Campaigns
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Explore exciting brand campaigns and collaborate with your favorite influencers.
              </Typography>
            </Box>
            <Typography
              component={Link}
              href="/campaigns"
              variant="body2"
              sx={{ fontWeight: 700, color: "primary.main", textDecoration: "none", whiteSpace: "nowrap" }}
            >
              View All &rarr;
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {campaigns.slice(0, 4).map((campaign) => (
              <Grid key={campaign.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <CampaignCard campaign={campaign} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
