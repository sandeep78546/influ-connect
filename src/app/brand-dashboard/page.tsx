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
  { label: "Active Campaigns", value: "3", icon: <CampaignIcon color="primary" /> },
  { label: "Influencers Reached", value: "128", icon: <PeopleAltIcon color="primary" /> },
  { label: "Total Spend", value: "₹1,20,000", icon: <PaidIcon color="primary" /> },
];

export default function BrandDashboardPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Brand Dashboard
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage your campaigns and track influencer collaborations.
          </Typography>
        </Stack>

        <Alert severity="info" sx={{ mb: 4 }}>
          Full campaign management, analytics, and messaging are coming soon. This is a preview of
          your future dashboard.
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
