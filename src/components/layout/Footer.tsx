"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LogoMark from "@/components/layout/LogoMark";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Influencers", href: "/influencers" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "How It Works", href: "/#how-it-works" },
];

const forBrands = [
  { label: "Create Campaign", href: "/brand-dashboard" },
  { label: "Brand Dashboard", href: "/brand-dashboard" },
  { label: "Pricing", href: "/campaigns" },
];

const forInfluencers = [
  { label: "Join as Influencer", href: "/signup" },
  { label: "Influencer Dashboard", href: "/influencer-dashboard" },
  { label: "Resources", href: "/influencers" },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#0F172A", color: "rgba(255,255,255,0.85)", mt: "auto" }}>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center", mb: 1.5 }}>
              <LogoMark size={32} />
              <Typography variant="h6" sx={{ fontWeight: 800, color: "#fff" }}>
                InfluConnect
              </Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.6)" }}>
              Bridging Brands &amp; Influencers.
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: "#fff" }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link) => (
                <Typography
                  key={link.href}
                  component={Link}
                  href={link.href}
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", "&:hover": { color: "#fff" } }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: "#fff" }}>
              For Brands
            </Typography>
            <Stack spacing={1}>
              {forBrands.map((link) => (
                <Typography
                  key={link.label}
                  component={Link}
                  href={link.href}
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", "&:hover": { color: "#fff" } }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 6, md: 3 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: "#fff" }}>
              For Influencers
            </Typography>
            <Stack spacing={1}>
              {forInfluencers.map((link) => (
                <Typography
                  key={link.label}
                  component={Link}
                  href={link.href}
                  variant="body2"
                  sx={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", "&:hover": { color: "#fff" } }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
            © 2026 InfluConnect. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1}>
            <IconButton size="small" sx={{ color: "rgba(255,255,255,0.7)" }} aria-label="Instagram">
              <InstagramIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "rgba(255,255,255,0.7)" }} aria-label="YouTube">
              <YouTubeIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "rgba(255,255,255,0.7)" }} aria-label="X">
              <XIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ color: "rgba(255,255,255,0.7)" }} aria-label="LinkedIn">
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
