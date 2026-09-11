import { notFound } from "next/navigation";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import { campaigns } from "@/data/campaigns";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default async function CampaignDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const campaign = campaigns.find((c) => c.id === id);

  if (!campaign) {
    notFound();
  }

  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Paper variant="outlined" sx={{ p: { xs: 3, md: 5 }, borderRadius: 4 }}>
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
              <Button variant="contained" color="primary" fullWidth>
                Apply / Collaborate
              </Button>
            </Grid>
            <Grid size={{ xs: 12, sm: 8 }}>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                {campaign.brandName}
              </Typography>
              <Chip label={campaign.category} size="small" sx={{ mb: 2 }} />
              <Typography variant="body1" sx={{ fontWeight: 700, mb: 2 }}>
                Budget: ₹{campaign.budgetMin.toLocaleString("en-IN")} – ₹
                {campaign.budgetMax.toLocaleString("en-IN")}
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Typography variant="body1" color="text.secondary">
                {campaign.fullDescription}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
