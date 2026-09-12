"use client";

import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { campaigns } from "@/data/campaigns";

const budgetOptions = [
  "₹5,000 – ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000+",
];

const emptyForm = {
  brandName: "",
  campaign: "",
  message: "",
  budget: "",
};

export default function CollaborationModal({
  open,
  influencerName,
  onClose,
  onSubmitted,
}: {
  open: boolean;
  influencerName: string;
  onClose: () => void;
  onSubmitted: () => void;
}) {
  const defaultMessage = `Hi ${influencerName.split(" ")[0]}, we would love to collaborate with you for our upcoming campaign.`;
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
          Collaborate with {influencerName}
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
              label="Brand Name"
              placeholder="Enter your brand name"
              value={form.brandName}
              onChange={(e) => setForm((f) => ({ ...f, brandName: e.target.value }))}
              fullWidth
              required
            />
            <TextField
              select
              label="Campaign"
              value={form.campaign}
              onChange={(e) => setForm((f) => ({ ...f, campaign: e.target.value }))}
              fullWidth
              required
            >
              {campaigns.map((campaign) => (
                <MenuItem key={campaign.id} value={campaign.title}>
                  {campaign.title}
                </MenuItem>
              ))}
            </TextField>
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
              select
              label="Budget"
              value={form.budget}
              onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
              fullWidth
              required
            >
              {budgetOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <Typography variant="caption" color="text.secondary">
              This is a demo form. No message is actually sent.
            </Typography>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={handleClose} color="inherit">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Send Collaboration Request
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
