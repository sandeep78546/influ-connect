"use client";

import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { heroBackground } from "@/theme/theme";

export default function LoginPage() {
  return (
    <Box sx={{ background: heroBackground, py: { xs: 8, md: 10 }, flexGrow: 1, display: "flex", alignItems: "center" }}>
      <Container maxWidth="xs">
        <Paper variant="outlined" sx={{ p: { xs: 3, md: 4 }, borderRadius: 4 }}>
          <Stack spacing={0.5} sx={{ mb: 3, textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: 800 }}>
              Welcome back
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Log in to your InfluConnect account.
            </Typography>
          </Stack>

          <Stack
            component="form"
            spacing={2.5}
            onSubmit={(e) => e.preventDefault()}
          >
            <TextField label="Email address" type="email" required fullWidth />
            <TextField label="Password" type="password" required fullWidth />
            <Button type="submit" variant="contained" color="primary" size="large" fullWidth>
              Login
            </Button>
          </Stack>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary" component="span">
              Don&apos;t have an account?{" "}
            </Typography>
            <Typography
              component={Link}
              href="/signup"
              variant="body2"
              sx={{ color: "primary.main", fontWeight: 700, textDecoration: "none" }}
            >
              Sign up
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
