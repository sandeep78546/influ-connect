"use client";

import * as React from "react";

export function useToast() {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const showToast = React.useCallback((msg: string) => {
    setMessage(msg);
    setOpen(true);
  }, []);

  const closeToast = React.useCallback(() => {
    setOpen(false);
  }, []);

  return { open, message, showToast, closeToast };
}
