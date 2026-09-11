"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import CampaignCard from "@/components/campaigns/CampaignCard";
import { campaigns } from "@/data/campaigns";

const categories = ["All", ...Array.from(new Set(campaigns.map((c) => c.category)))];

export default function CampaignsPage() {
  const [category, setCategory] = React.useState("All");

  const filtered = campaigns.filter(
    (campaign) => category === "All" || campaign.category === category
  );

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Campaigns
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Explore exciting brand campaigns and collaborate with your favorite brands.
          </Typography>
        </Stack>

        <TextField
          select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ mb: 4, maxWidth: 240 }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

        {filtered.length === 0 ? (
          <Typography color="text.secondary">No campaigns match this category.</Typography>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((campaign) => (
              <Grid key={campaign.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <CampaignCard campaign={campaign} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
