"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import InfluencerCard from "@/components/influencers/InfluencerCard";
import { influencers } from "@/data/influencers";

const categories = ["All", ...Array.from(new Set(influencers.map((i) => i.category)))];

export default function ExploreInfluencersPage() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("All");

  const filtered = influencers.filter((influencer) => {
    const matchesSearch = influencer.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || influencer.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Explore Influencers
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Discover amazing creators across different niches and find the right fit for your brand.
          </Typography>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 4 }}>
          <TextField
            fullWidth
            placeholder="Search influencers by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
          />
          <TextField
            select
            fullWidth
            label="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            sx={{ maxWidth: { sm: 240 } }}
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
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
