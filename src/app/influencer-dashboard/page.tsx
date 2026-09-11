import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import CampaignIcon from "@mui/icons-material/Campaign";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PaidIcon from "@mui/icons-material/Paid";

const stats = [
  { label: "Active Collaborations", value: "2", icon: <CampaignIcon color="primary" /> },
  { label: "Profile Followers", value: "120K", icon: <PeopleAltIcon color="primary" /> },
  { label: "Total Earnings", value: "₹45,000", icon: <PaidIcon color="primary" /> },
];

export default function InfluencerDashboardPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Influencer Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Track your collaborations and discover new brand campaigns.
          </Typography>
        </Stack>

        <Alert severity="info" sx={{ mb: 4 }}>
          Collaboration requests, messaging, and earnings tracking are coming soon. This is a
          preview of your future dashboard.
        </Alert>

        <Grid container spacing={3}>
          {stats.map((stat) => (
            <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
              <Paper variant="outlined" sx={{ p: 3, borderRadius: 3 }}>
                <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
                  {stat.icon}
                  <Box>
                    <Typography variant="h5" sx={{ fontWeight: 800 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
