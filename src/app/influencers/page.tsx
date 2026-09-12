"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InfluencerCard from "@/components/influencers/InfluencerCard";
import PageHeader from "@/components/common/PageHeader";
import SearchBar from "@/components/common/SearchBar";
import FilterSelect from "@/components/common/FilterSelect";
import { influencers } from "@/data/influencers";
import { matchesInfluencerSearch, matchesFollowers, matchesLocation } from "@/utils/filters";

const categoryOptions = [
  { label: "All Categories", value: "All" },
  ...Array.from(new Set(influencers.map((i) => i.category))).map((category) => ({
    label: category,
    value: category,
  })),
];

const followerOptions = [
  { label: "Any Followers", value: "0" },
  { label: "10K+", value: "10000" },
  { label: "50K+", value: "50000" },
  { label: "100K+", value: "100000" },
  { label: "500K+", value: "500000" },
];

const locationOptions = [
  { label: "All Locations", value: "All" },
  { label: "India", value: "India" },
  { label: "Mumbai", value: "Mumbai" },
  { label: "Delhi", value: "Delhi" },
  { label: "Bangalore", value: "Bangalore" },
  { label: "Indore", value: "Indore" },
];

export default function ExploreInfluencersPage() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");
  const [followers, setFollowers] = React.useState("0");
  const [location, setLocation] = React.useState("All");

  const filtered = influencers.filter((influencer) => {
    const matchesCategory = category === "All" || influencer.category === category;
    return (
      matchesInfluencerSearch(influencer, search) &&
      matchesCategory &&
      matchesFollowers(influencer, Number(followers)) &&
      matchesLocation(influencer, location)
    );
  });

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <PageHeader
          title="Explore Influencers"
          subtitle="Discover creators who can help promote your brand."
        />

        <Stack spacing={2} sx={{ mb: 4 }}>
          <SearchBar
            value={search}
            onChange={setSearch}
            placeholder="Search influencers..."
          />
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <FilterSelect
              label="Category"
              value={category}
              onChange={setCategory}
              options={categoryOptions}
            />
            <FilterSelect
              label="Followers"
              value={followers}
              onChange={setFollowers}
              options={followerOptions}
            />
            <FilterSelect
              label="Location"
              value={location}
              onChange={setLocation}
              options={locationOptions}
            />
          </Stack>
        </Stack>

        {filtered.length === 0 ? (
          <Typography color="text.secondary">No influencers match your search.</Typography>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((influencer) => (
              <Grid key={influencer.id} size={{ xs: 12, sm: 6, md: 3 }}>
                <InfluencerCard influencer={influencer} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

