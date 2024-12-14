"use client";

import { useState } from "react";

export const useCreateForm = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [accordionOpen, setAccordionOpen] = useState<Map<string, boolean>>(
    new Map<string, boolean>([["group", false]])
  );
  const handleClickOpen = () => {
    setDrawerOpen(true);
  };

  const handleClickClose = () => {
    setAccordionOpen((prev) => {
      const newMap = new Map();

      prev.forEach((_, mapKey) => {
        newMap.set(mapKey, false);
      });

      return newMap;
    });
      
    setDrawerOpen(false);
  };

  const handleClickShortcut = (key: string) => {
    setAccordionOpen((prev) => {
      const newMap = new Map();

      prev.forEach((value, mapKey) => {
        newMap.set(mapKey, mapKey === key);
      });

      return newMap;
    });

    setDrawerOpen(true);
  };

  return {
    drawerOpen,
    accordionOpen,
    handleClickOpen,
    handleClickClose,
    handleClickShortcut,
  };
};
