"use client";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <Stack spacing={1} sx={{ mb: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 800 }}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {subtitle}
      </Typography>
    </Stack>
  );
}
