"use client";

import * as React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import { brandGradient } from "@/theme/theme";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Explore Influencers", href: "/influencers" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "How It Works", href: "/#how-it-works" },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{ borderBottom: "1px solid", borderColor: "divider" }}
    >
      <Toolbar sx={{ maxWidth: 1280, width: "100%", mx: "auto", px: { xs: 2, md: 3 } }}>
        <Box
          component={Link}
          href="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            mr: 4,
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: brandGradient,
              color: "#fff",
            }}
          >
            <PhotoCameraIcon fontSize="small" />
          </Box>
          <Typography variant="h6" component="span" sx={{ fontWeight: 800, color: "text.primary" }}>
            Influ
            <Box
              component="span"
              sx={{
                background: brandGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Connect
            </Box>
          </Typography>
        </Box>

        <Stack
          direction="row"
          spacing={3}
          sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}
        >
          {navLinks.map((link) => (
            <Typography
              key={link.href}
              component={Link}
              href={link.href}
              variant="body2"
              sx={{
                fontWeight: 500,
                color: "text.primary",
                textDecoration: "none",
                "&:hover": { color: "primary.main" },
              }}
            >
              {link.label}
            </Typography>
          ))}
        </Stack>

        <Box sx={{ flexGrow: { xs: 1, md: 0 } }} />

        <Stack direction="row" spacing={1.5} sx={{ alignItems: "center", display: { xs: "none", md: "flex" } }}>
          <IconButton size="small" aria-label="search">
            <SearchIcon fontSize="small" />
          </IconButton>
          <Button component={Link} href="/login" color="inherit" sx={{ borderRadius: 999 }}>
            Login
          </Button>
          <Button component={Link} href="/signup" variant="contained" color="primary">
            Get Started
          </Button>
        </Stack>

        <IconButton
          sx={{ display: { xs: "inline-flex", md: "none" } }}
          onClick={() => setDrawerOpen(true)}
          aria-label="open menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 260 }} role="presentation" onClick={() => setDrawerOpen(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItemButton key={link.href} component={Link} href={link.href}>
                <ListItemText primary={link.label} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <List>
            <ListItemButton component={Link} href="/login">
              <ListItemText primary="Login" />
            </ListItemButton>
            <ListItemButton component={Link} href="/signup">
              <ListItemText primary="Get Started" />
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}
