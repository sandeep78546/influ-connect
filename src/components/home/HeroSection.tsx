"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { keyframes } from "@mui/material/styles";
import Link from "next/link";
import { brandGradient, heroDarkBackground } from "@/theme/theme";
import ParticleNetworkBackground from "@/components/home/ParticleNetworkBackground";
import SocialProofStack from "@/components/home/SocialProofStack";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-14px);
  }
`;

const pulseGlow = keyframes`
  0%, 100% {
    opacity: 0.55;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.08);
  }
`;

function fadeInSx(delayMs: number) {
  return {
    opacity: 0,
    animation: `${fadeInUp} 0.7s ease forwards`,
    animationDelay: `${delayMs}ms`,
  };
}

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        background: heroDarkBackground,
        py: { xs: 10, md: 14 },
        minHeight: { xs: "auto", md: "88vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <ParticleNetworkBackground />

      {/* soft vignette so text stays legible over the particle field */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(60% 60% at 20% 40%, rgba(11, 7, 24, 0.35) 0%, rgba(11, 7, 24, 0) 100%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              sx={{
                ...fadeInSx(0),
                color: "#F9A8D4",
                fontWeight: 700,
                bgcolor: "rgba(236, 72, 153, 0.15)",
                border: "1px solid rgba(236, 72, 153, 0.35)",
                px: 1.5,
                py: 0.5,
                borderRadius: 999,
                display: "inline-block",
                mb: 2,
              }}
            >
              Your Brand. Their Audience.
            </Typography>
            <Typography
              variant="h2"
              sx={{
                ...fadeInSx(120),
                color: "#fff",
                fontSize: { xs: "2.25rem", md: "3rem" },
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              Promote Your Products Through{" "}
              <Box
                component="span"
                sx={{
                  background: brandGradient,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Instagram Influencers
              </Box>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                ...fadeInSx(240),
                color: "rgba(255, 255, 255, 0.7)",
                fontWeight: 400,
                mb: 4,
              }}
            >
              Connect with influencers, promote your brand, and reach the right audience.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={fadeInSx(360)}
            >
              <Button
                component={Link}
                href="/signup"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<span>&rarr;</span>}
                sx={{
                  boxShadow: "0 8px 24px rgba(236, 72, 153, 0.35)",
                  "&:hover": { boxShadow: "0 10px 28px rgba(236, 72, 153, 0.5)" },
                }}
              >
                I&apos;m a Brand
              </Button>
              <Button
                component={Link}
                href="/signup"
                variant="outlined"
                size="large"
                endIcon={<span>&rarr;</span>}
                sx={{
                  color: "#fff",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  "&:hover": {
                    borderColor: "#fff",
                    bgcolor: "rgba(255, 255, 255, 0.08)",
                  },
                }}
              >
                I&apos;m an Influencer
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                py: 3,
                ...fadeInSx(200),
              }}
            >
              {/* glow behind the phone mockup */}
              <Box
                sx={{
                  position: "absolute",
                  width: 260,
                  height: 260,
                  borderRadius: "50%",
                  background: brandGradient,
                  filter: "blur(60px)",
                  opacity: 0.55,
                  animation: `${pulseGlow} 4s ease-in-out infinite`,
                  zIndex: 0,
                }}
              />

              <Box sx={{ zIndex: 2, animation: `${float} 6s ease-in-out infinite` }}>
                <SocialProofStack />
              </Box>

              <Stack
                spacing={1.5}
                sx={{
                  position: "absolute",
                  right: { xs: -4, md: -16 },
                  bottom: 8,
                  display: { xs: "none", sm: "flex" },
                }}
              >
                {["#F472B6", "#A78BFA", "#FDBA74"].map((color, index) => (
                  <Paper
                    key={color}
                    elevation={6}
                    sx={{
                      width: 88,
                      height: 88,
                      borderRadius: 3,
                      background: `linear-gradient(160deg, ${color} 0%, #ffffff 130%)`,
                      transform: `translateX(${index * 10}px)`,
                      animation: `${float} ${5 + index}s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`,
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
