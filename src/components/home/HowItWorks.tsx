import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const brandSteps = [
  { icon: <AddIcon fontSize="small" />, title: "Create your campaign", description: "Tell us about your product and your goals." },
  { icon: <SearchIcon fontSize="small" />, title: "Find relevant influencers", description: "Discover creators who match your brand." },
  { icon: <HandshakeIcon fontSize="small" />, title: "Collaborate & promote", description: "Work with influencers and see your brand grow." },
];

const influencerSteps = [
  { icon: <PersonIcon fontSize="small" />, title: "Create your profile", description: "Showcase your Instagram and your niche." },
  { icon: <SearchIcon fontSize="small" />, title: "Discover campaigns", description: "Find brands that match your style and audience." },
  { icon: <HandshakeIcon fontSize="small" />, title: "Collaborate & earn", description: "Work with brands and grow your income." },
];

function StepPanel({
  title,
  subtitle,
  icon,
  iconBg,
  steps,
}: {
  title: string;
  subtitle: string;
  icon: ReactNode;
  iconBg: string;
  steps: { icon: ReactNode; title: string; description: string }[];
}) {
  return (
    <Paper variant="outlined" sx={{ p: { xs: 3, md: 4 }, height: "100%", borderRadius: 4 }}>
      <Stack direction="row" spacing={2} sx={{ alignItems: "center", mb: 3 }}>
        <Avatar sx={{ bgcolor: iconBg, width: 48, height: 48 }}>{icon}</Avatar>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>
      </Stack>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ alignItems: { sm: "flex-start" } }}>
        {steps.map((step, index) => (
          <Stack key={step.title} direction="row" spacing={2} sx={{ alignItems: "center", flex: 1 }}>
            <Stack spacing={1} sx={{ alignItems: "center", minWidth: 0 }}>
              <Avatar
                sx={{
                  width: 28,
                  height: 28,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  bgcolor: "primary.light",
                }}
              >
                {index + 1}
              </Avatar>
              <Avatar variant="rounded" sx={{ bgcolor: "grey.100", color: "text.secondary", width: 36, height: 36 }}>
                {step.icon}
              </Avatar>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  {step.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {step.description}
                </Typography>
              </Box>
            </Stack>
            {index < steps.length - 1 && (
              <ArrowForwardIcon sx={{ display: { xs: "none", sm: "block" }, color: "text.disabled", mb: 5 }} />
            )}
          </Stack>
        ))}
      </Stack>
    </Paper>
  );
}

export default function HowItWorks() {
  return (
    <Box id="how-it-works" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={1} sx={{ alignItems: "center", mb: 5, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            How It Works
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Simple steps to get your products in front of the right audience.
          </Typography>
        </Stack>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <StepPanel
              title="For Brands"
              subtitle="Grow your brand with authentic voices."
              icon={<BusinessCenterIcon />}
              iconBg="#FCE7F3"
              steps={brandSteps}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <StepPanel
              title="For Influencers"
              subtitle="Turn your passion into opportunities."
              icon={<PersonIcon />}
              iconBg="#EDE9FE"
              steps={influencerSteps}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
