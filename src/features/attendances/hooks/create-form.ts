"use client";

import { useState } from "react";

export const useCreateForm = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return {
    open,
    handleClickOpen,
    handleClickClose,
  };
};
