"use client";

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

const emptyForm = {
  influencerName: "",
  instagramUsername: "",
  message: "",
  portfolioLink: "",
};

export default function ApplicationModal({
  open,
  brandName,
  onClose,
  onSubmitted,
}: {
  open: boolean;
  brandName: string;
  onClose: () => void;
  onSubmitted: () => void;
}) {
  const defaultMessage = `Hi ${brandName}! I am interested in collaborating on this campaign. My audience is highly interested in this space.`;
  const [form, setForm] = React.useState({ ...emptyForm, message: defaultMessage });

  const handleClose = () => {
    setForm({ ...emptyForm, message: defaultMessage });
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setForm({ ...emptyForm, message: defaultMessage });
    onClose();
    onSubmitted();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle sx={{ fontWeight: 800 }}>
          Apply for Campaign
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 12, top: 12 }}
            aria-label="close"
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2.5} sx={{ mt: 1 }}>
            <TextField
              label="Influencer Name"
              placeholder="Enter your name"
              value={form.influencerName}
              onChange={(e) => setForm((f) => ({ ...f, influencerName: e.target.value }))}
              fullWidth
              required
            />
            <TextField
              label="Instagram Username"
              placeholder="@yourusername"
              value={form.instagramUsername}
              onChange={(e) => setForm((f) => ({ ...f, instagramUsername: e.target.value }))}
              fullWidth
              required
            />
            <TextField
              label="Message"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              fullWidth
              multiline
              minRows={3}
              required
            />
            <TextField
              label="Portfolio / Instagram Link"
              placeholder="https://instagram.com/yourusername (optional)"
              value={form.portfolioLink}
              onChange={(e) => setForm((f) => ({ ...f, portfolioLink: e.target.value }))}
              fullWidth
            />
            <Typography variant="caption" color="text.secondary">
              This is a demo form. No application is actually sent.
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit Application
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
