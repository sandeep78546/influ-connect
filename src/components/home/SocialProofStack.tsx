"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { keyframes } from "@mui/material/styles";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import VolumeOffRoundedIcon from "@mui/icons-material/VolumeOffRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import NearMeIcon from "@mui/icons-material/NearMe";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const AUTOPLAY_MS = 5000;
const ADVANCE_GUARD_MS = 400;
const CARD_TRANSITION = "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease";
const MAX_TILT_DEG = 10;

interface Profile {
  handle: string;
  location: string;
  avatarInitials: string;
  avatarColor: string;
  image: string;
  fallbackGradient: string;
  niche: string;
  engagement: string;
  reach: string;
  likes: string;
  caption: string;
  carousel?: string;
  isVideo?: boolean;
}

const PROFILES: Profile[] = [
  {
    handle: "stylewithsana",
    location: "Mumbai, India",
    avatarInitials: "SW",
    avatarColor: "#EC4899",
    image: "https://picsum.photos/seed/influ-connect-beauty/420/520",
    fallbackGradient: "linear-gradient(160deg, #F9A8D4 0%, #C4B5FD 100%)",
    niche: "Beauty",
    engagement: "+15%",
    reach: "1.2M",
    likes: "2,491",
    caption: "New skincare range! ✨",
    isVideo: true,
  },
  {
    handle: "wanderlust_maya",
    location: "Manali, India",
    avatarInitials: "WM",
    avatarColor: "#7C3AED",
    image: "https://picsum.photos/seed/influ-connect-travel/420/520",
    fallbackGradient: "linear-gradient(160deg, #67E8F9 0%, #818CF8 100%)",
    niche: "Travel",
    engagement: "+22%",
    reach: "890K",
    likes: "2,931",
    caption: "Bucket list, checked. 😍",
    carousel: "1/2",
  },
  {
    handle: "fit_with_ria",
    location: "Goa, India",
    avatarInitials: "FR",
    avatarColor: "#F97316",
    image: "https://picsum.photos/seed/influ-connect-fitness/420/520",
    fallbackGradient: "linear-gradient(160deg, #FDBA74 0%, #F472B6 100%)",
    niche: "Fitness",
    engagement: "+18%",
    reach: "640K",
    likes: "1,847",
    caption: "Beach day workout 💪",
  },
];

const STACK_OFFSETS = [
  { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1, z: 30 },
  { x: 18, y: -16, scale: 0.94, rotate: 5, opacity: 1, z: 20 },
  { x: 32, y: -30, scale: 0.88, rotate: 9, opacity: 0.9, z: 10 },
];

function getStackTransform(relativeIndex: number) {
  if (relativeIndex < STACK_OFFSETS.length) return STACK_OFFSETS[relativeIndex];
  return { ...STACK_OFFSETS[STACK_OFFSETS.length - 1], opacity: 0, z: 0 };
}

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const shimmerSweep = keyframes`
  0% { transform: translateX(-140%) rotate(12deg); }
  100% { transform: translateX(140%) rotate(12deg); }
`;

const badgePop = keyframes`
  0% { transform: scale(0.6) translateY(8px); opacity: 0; }
  60% { transform: scale(1.06) translateY(-2px); opacity: 1; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
`;

const glassBadgeSx = {
  position: "absolute" as const,
  zIndex: 40,
  bgcolor: "rgba(30, 27, 46, 0.65)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  borderRadius: 3,
  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.35)",
};

/**
 * A fanned stack of influencer post cards (real photos with graceful gradient
 * fallback) that smoothly shuffles to the next profile automatically, on
 * hover (desktop), or on tap (touch). Includes a cursor-following 3D tilt,
 * a rotating gradient glow ring, and a light "shine" sweep for extra polish.
 * Fully responsive — badges scale down instead of disappearing on mobile.
 */
export default function SocialProofStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const guardRef = useRef(false);
  const tiltRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % PROFILES.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [activeIndex]);

  function handleAdvance() {
    if (guardRef.current) return;
    guardRef.current = true;
    setActiveIndex((prev) => (prev + 1) % PROFILES.length);
    window.setTimeout(() => {
      guardRef.current = false;
    }, ADVANCE_GUARD_MS);
  }

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const node = tiltRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(1200px) rotateX(${(-py * MAX_TILT_DEG).toFixed(2)}deg) rotateY(${(px * MAX_TILT_DEG).toFixed(2)}deg)`;
  }

  function handleMouseLeave() {
    const node = tiltRef.current;
    if (!node) return;
    node.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
  }

  const active = PROFILES[activeIndex];

  return (
    <Box
      ref={tiltRef}
      onMouseEnter={handleAdvance}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleAdvance}
      role="button"
      aria-label="Show next influencer post"
      sx={{
        position: "relative",
        width: { xs: 220, sm: 280, md: 300 },
        height: { xs: 340, sm: 410 },
        cursor: "pointer",
        touchAction: "manipulation",
        transformStyle: "preserve-3d",
        transition: "transform 0.35s ease-out",
        willChange: "transform",
      }}
    >
      {PROFILES.map((profile, index) => {
        const relativeIndex = (index - activeIndex + PROFILES.length) % PROFILES.length;
        if (relativeIndex >= STACK_OFFSETS.length) return null;

        const { x, y, scale, rotate, opacity, z } = getStackTransform(relativeIndex);
        const isFront = relativeIndex === 0;

        return (
          <Box
            key={profile.handle}
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              transform: `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`,
              opacity,
              zIndex: z,
              transition: CARD_TRANSITION,
              display: { xs: isFront ? "block" : "none", sm: "block" },
            }}
          >
            {isFront && (
              <Box
                aria-hidden
                sx={{
                  position: "absolute",
                  inset: -3,
                  borderRadius: 6,
                  background: "conic-gradient(from 0deg, #EC4899, #A855F7, #38BDF8, #EC4899)",
                  filter: "blur(10px)",
                  opacity: 0.7,
                  animation: `${spin} 5s linear infinite`,
                  zIndex: -1,
                }}
              />
            )}

            <Box
              sx={{
                position: "relative",
                borderRadius: 5,
                overflow: "hidden",
                bgcolor: "#fff",
                boxShadow: isFront
                  ? "0 24px 48px rgba(0, 0, 0, 0.35)"
                  : "0 12px 28px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Stack direction="row" spacing={1} sx={{ alignItems: "center", p: 1.25 }}>
                <Avatar sx={{ width: 30, height: 30, bgcolor: profile.avatarColor, fontSize: 12, fontWeight: 700 }}>
                  {profile.avatarInitials}
                </Avatar>
                <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, display: "block", lineHeight: 1.1 }}>
                    {profile.handle}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ fontSize: "0.65rem" }}>
                    {profile.location}
                  </Typography>
                </Box>
                {isFront && <MoreHorizIcon sx={{ fontSize: 18, color: "text.secondary" }} />}
              </Stack>

              <Box sx={{ position: "relative", height: { xs: 175, sm: 220 }, overflow: "hidden" }}>
                <Box sx={{ position: "absolute", inset: 0, background: profile.fallbackGradient }} />
                <Box
                  component="img"
                  src={profile.image}
                  alt={`${profile.handle} content preview`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                  sx={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
                />

                {isFront && (
                  <Box
                    key={`sweep-${activeIndex}`}
                    aria-hidden
                    sx={{
                      position: "absolute",
                      top: "-50%",
                      left: 0,
                      width: "35%",
                      height: "200%",
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
                      animation: `${shimmerSweep} 2.8s ease-in-out infinite`,
                    }}
                  />
                )}

                {isFront && profile.isVideo && (
                  <IconButton
                    size="small"
                    sx={{
                      position: "absolute",
                      bottom: 8,
                      right: 8,
                      bgcolor: "rgba(0, 0, 0, 0.45)",
                      color: "#fff",
                      "&:hover": { bgcolor: "rgba(0, 0, 0, 0.6)" },
                    }}
                  >
                    <VolumeOffRoundedIcon sx={{ fontSize: 16 }} />
                  </IconButton>
                )}
                {isFront && profile.carousel && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 8,
                      right: 8,
                      bgcolor: "rgba(0, 0, 0, 0.55)",
                      color: "#fff",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      px: 0.75,
                      py: 0.25,
                      borderRadius: 999,
                    }}
                  >
                    {profile.carousel}
                  </Box>
                )}
              </Box>

              {isFront && (
                <>
                  <Stack direction="row" spacing={1} sx={{ px: 1, pt: 1, alignItems: "center" }}>
                    <IconButton size="small">
                      <FavoriteBorderIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small">
                      <ChatBubbleOutlineIcon fontSize="small" />
                    </IconButton>
                    <IconButton size="small">
                      <NearMeIcon fontSize="small" />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton size="small">
                      <BookmarkBorderIcon fontSize="small" />
                    </IconButton>
                  </Stack>
                  <Box sx={{ px: 1.5, pb: 1.5 }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, display: "block" }}>
                      {profile.likes} likes
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      <Box component="span" sx={{ fontWeight: 700, color: "text.primary" }}>
                        {profile.handle}
                      </Box>{" "}
                      {profile.caption}
                    </Typography>
                  </Box>
                </>
              )}
            </Box>
          </Box>
        );
      })}

      {/* floating glass stat badges — always visible, scaled down on small screens */}
      <Box
        key={`engagement-${activeIndex}`}
        sx={{
          ...glassBadgeSx,
          top: { xs: -12, sm: -16, md: -18 },
          left: { xs: -8, sm: -24, md: -44 },
          display: "flex",
          alignItems: "center",
          gap: { xs: 0.5, sm: 1 },
          px: { xs: 1, sm: 1.5, md: 1.75 },
          py: { xs: 0.5, sm: 0.75, md: 1 },
          animation: `${badgePop} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both`,
        }}
      >
        <ArrowUpwardRoundedIcon sx={{ color: "#34D399", fontSize: { xs: 16, sm: 20, md: 24 } }} />
        <Box>
          <Typography sx={{ color: "#fff", fontWeight: 800, lineHeight: 1.1, fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" } }}>
            {active.engagement}
          </Typography>
          <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: { xs: "0.55rem", sm: "0.7rem" } }}>
            Engagement
          </Typography>
        </Box>
      </Box>

      <Box
        key={`reach-${activeIndex}`}
        sx={{
          ...glassBadgeSx,
          top: { xs: "36%", sm: "40%" },
          right: { xs: -6, sm: -20, md: -36 },
          px: { xs: 1, sm: 1.5, md: 1.75 },
          py: { xs: 0.5, sm: 0.75, md: 1 },
          animation: `${badgePop} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both`,
          animationDelay: "80ms",
        }}
      >
        <Typography sx={{ color: "#fff", fontWeight: 800, lineHeight: 1.1, fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1rem" } }}>
          {active.reach}
        </Typography>
        <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", fontSize: { xs: "0.55rem", sm: "0.7rem" } }}>
          Reach
        </Typography>
      </Box>

      <Stack
        key={`niche-${activeIndex}`}
        direction="row"
        spacing={1}
        sx={{
          ...glassBadgeSx,
          bottom: { xs: 32, sm: 48, md: 54 },
          left: { xs: -6, sm: -18, md: -32 },
          borderRadius: 999,
          alignItems: "center",
          pl: 0.5,
          pr: { xs: 1, sm: 1.5, md: 1.75 },
          py: 0.5,
          animation: `${badgePop} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both`,
          animationDelay: "160ms",
        }}
      >
        <Avatar sx={{ width: { xs: 20, sm: 26 }, height: { xs: 20, sm: 26 }, bgcolor: "secondary.main", fontSize: { xs: 9, sm: 12 }, fontWeight: 700 }}>
          N+
        </Avatar>
        <Box>
          <Typography sx={{ color: "rgba(255, 255, 255, 0.7)", display: "block", lineHeight: 1.1, fontSize: { xs: "0.55rem", sm: "0.7rem" } }}>
            Niche
          </Typography>
          <Typography sx={{ color: "#fff", fontWeight: 700, fontSize: { xs: "0.65rem", sm: "0.8rem" } }}>
            {active.niche}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

