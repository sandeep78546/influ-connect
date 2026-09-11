"use client";

import * as React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { heroBackground } from "@/theme/theme";

export default function SignupPage() {
  const [role, setRole] = React.useState<"brand" | "influencer">("brand");

  return (
    <Box sx={{ background: heroBackground, py: { xs: 8, md: 10 }, flexGrow: 1, display: "flex", alignItems: "center" }}>
      <Container maxWidth="xs">
        <Paper variant="outlined" sx={{ p: { xs: 3, md: 4 }, borderRadius: 4 }}>
          <Stack spacing={0.5} sx={{ mb: 3, textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: 800 }}>
              Create your account
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Join InfluConnect as a brand or an influencer.
            </Typography>
          </Stack>

          <ToggleButtonGroup
            value={role}
            exclusive
            fullWidth
            onChange={(_, value) => value && setRole(value)}
            sx={{ mb: 3 }}
          >
            <ToggleButton value="brand">I&apos;m a Brand</ToggleButton>
            <ToggleButton value="influencer">I&apos;m an Influencer</ToggleButton>
          </ToggleButtonGroup>

          <Stack component="form" spacing={2.5} onSubmit={(e) => e.preventDefault()}>
            <TextField
              label={role === "brand" ? "Brand name" : "Full name"}
              required
              fullWidth
            />
            <TextField label="Email address" type="email" required fullWidth />
            <TextField label="Password" type="password" required fullWidth />
            <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
              Create Account
            </Button>
          </Stack>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary" component="span">
              Already have an account?{" "}
            </Typography>
            <Typography
              component={Link}
              href="/login"
              variant="body2"
              sx={{ color: "primary.main", fontWeight: 700, textDecoration: "none" }}
            >
              Login
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
