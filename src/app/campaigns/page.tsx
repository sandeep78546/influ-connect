"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CampaignCard from "@/components/campaigns/CampaignCard";
import PageHeader from "@/components/common/PageHeader";
import SearchBar from "@/components/common/SearchBar";
import FilterSelect from "@/components/common/FilterSelect";
import { campaigns } from "@/data/campaigns";
import { matchesCampaignSearch, matchesBudget } from "@/utils/filters";

const categoryOptions = [
  { label: "All Categories", value: "All" },
  ...Array.from(new Set(campaigns.map((c) => c.category))).map((category) => ({
    label: category,
    value: category,
  })),
];

const budgetOptions = [
  { label: "Any Budget", value: "0-Infinity" },
  { label: "Under ₹10,000", value: "0-10000" },
  { label: "₹10,000 – ₹25,000", value: "10000-25000" },
  { label: "₹25,000 – ₹50,000", value: "25000-50000" },
  { label: "₹50,000+", value: "50000-Infinity" },
];

export default function CampaignsPage() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");
  const [budget, setBudget] = React.useState("0-Infinity");

  const [budgetMin, budgetMax] = budget.split("-").map(Number);

  const filtered = campaigns.filter((campaign) => {
    const matchesCategory = category === "All" || campaign.category === category;
    return (
      matchesCampaignSearch(campaign, search) &&
      matchesCategory &&
      matchesBudget(campaign, budgetMin, budgetMax)
    );
  });

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <PageHeader
          title="Explore Campaigns"
          subtitle="Discover exciting brand collaborations and partnership opportunities."
        />

        <Stack spacing={2} sx={{ mb: 4 }}>
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search campaigns..."
          />
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <FilterSelect
              label="Category"
              value={category}
              onChange={setCategory}
              options={categoryOptions}
            />
            <FilterSelect
              label="Budget"
              value={budget}
              onChange={setBudget}
              options={budgetOptions}
            />
          </Stack>
        </Stack>

        {filtered.length === 0 ? (
          <Typography color="text.secondary">No campaigns match your search.</Typography>
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

