"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SendIcon from "@mui/icons-material/NearMe";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import InstagramIcon from "@mui/icons-material/Instagram";
import { brandGradient, heroBackground } from "@/theme/theme";

export default function HeroSection() {
  return (
    <Box sx={{ background: heroBackground, py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                bgcolor: "rgba(236, 72, 153, 0.1)",
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
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, mb: 4 }}>
              Connect with influencers, promote your brand, and reach the right audience.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Button
                component={Link}
                href="/signup"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<span>&rarr;</span>}
              >
                I&apos;m a Brand
              </Button>
              <Button
                component={Link}
                href="/signup"
                variant="outlined"
                color="secondary"
                size="large"
                endIcon={<span>&rarr;</span>}
              >
                I&apos;m an Influencer
              </Button>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", display: "flex", justifyContent: "center", py: 3 }}>
              <Paper
                elevation={6}
                sx={{
                  width: 280,
                  borderRadius: 6,
                  overflow: "hidden",
                  border: "8px solid #111827",
                  zIndex: 2,
                }}
              >
                <Stack direction="row" spacing={1} sx={{ alignItems: "center", p: 1.25 }}>
                  <Avatar sx={{ width: 28, height: 28, bgcolor: "primary.main" }}>SW</Avatar>
                  <Box>
                    <Typography variant="caption" sx={{ fontWeight: 700, display: "block", lineHeight: 1.1 }}>
                      stylewithsana
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.65rem" }}>
                      Mumbai, India
                    </Typography>
                  </Box>
                </Stack>
                <Box
                  sx={{
                    height: 220,
                    background: "linear-gradient(160deg, #F9A8D4 0%, #C4B5FD 100%)",
                  }}
                />
                <Stack direction="row" spacing={1} sx={{ px: 1, pt: 1 }}>
                  <IconButton size="small">
                    <FavoriteIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <ChatBubbleOutlineIcon fontSize="small" />
                  </IconButton>
                  <IconButton size="small">
                    <SendIcon fontSize="small" />
                  </IconButton>
                  <Box sx={{ flexGrow: 1 }} />
                  <IconButton size="small">
                    <BookmarkBorderIcon fontSize="small" />
                  </IconButton>
                </Stack>
                <Box sx={{ px: 1.5, pb: 1.5 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, display: "block" }}>
                    2,481 likes
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    stylewithsana New skincare range! #skincare #beauty #glowingskin
                  </Typography>
                </Box>
              </Paper>

              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: { xs: 8, md: 0 },
                  width: 56,
                  height: 56,
                  borderRadius: "16px",
                  background: brandGradient,
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 3,
                  zIndex: 3,
                }}
              >
                <InstagramIcon sx={{ color: "#fff" }} />
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
                    elevation={4}
                    sx={{
                      width: 88,
                      height: 88,
                      borderRadius: 3,
                      background: `linear-gradient(160deg, ${color} 0%, #ffffff 130%)`,
                      transform: `translateX(${index * 10}px)`,
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
