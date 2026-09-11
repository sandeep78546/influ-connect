import { notFound } from "next/navigation";
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
import { influencers } from "@/data/influencers";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default async function InfluencerProfilePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const influencer = influencers.find((i) => i.id === id);

  if (!influencer) {
    notFound();
  }

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ p: { xs: 3, md: 5 }, borderRadius: 4 }}>
          <Grid container spacing={4} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: "center" }}>
              <Avatar
                sx={{
                  bgcolor: influencer.avatarColor,
                  width: 120,
                  height: 120,
                  fontSize: "2rem",
                  fontWeight: 700,
                  mx: "auto",
                  mb: 2,
                }}
              >
                {initials(influencer.name)}
              </Avatar>
              <Button variant="contained" color="primary" fullWidth>
                Collaborate
              </Button>
            </Grid>
            <Grid size={{ xs: 12, sm: 8 }}>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <Typography variant="h4" sx={{ fontWeight: 800 }}>
                  {influencer.name}
                </Typography>
                {influencer.verified && <VerifiedIcon color="primary" />}
              </Stack>
              <Chip label={influencer.category} size="small" sx={{ mt: 1, mb: 2 }} />
              <Stack direction="row" spacing={3} sx={{ mb: 2 }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                  <PeopleAltIcon sx={{ fontSize: 18, color: "text.secondary" }} />
                  <Typography variant="body2" color="text.secondary">
                    {influencer.followers} Followers
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
              <Typography variant="body1" color="text.secondary">
                {influencer.bio}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
