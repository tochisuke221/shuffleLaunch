"use client";

import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import { MuiDrawer, MuiBox, MuiTypography } from "@/components/mui";


const drawerWidth = "50%";
const closedDrawerWidth = 70;

export const CreateForm = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <MuiBox>
      {/* トグルボタンをDrawerの外に配置 */}
      <button onClick={toggleDrawer}>{open ? "閉じる" : "開く"}</button>

      {/* ドロワー */}
      <MuiDrawer
        variant="permanent"
        anchor="right"
        open={open}
        sx={{
          width: open ? drawerWidth : closedDrawerWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          overflowX: "hidden",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: open
              ? theme.transitions.duration.enteringScreen
              : theme.transitions.duration.leavingScreen,
          }),
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : closedDrawerWidth,
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: open
                ? theme.transitions.duration.enteringScreen
                : theme.transitions.duration.leavingScreen,
            }),
          },
        }}
      >
        {/* ドロワーのコンテンツ */}
        <MuiBox
          sx={{
            height: "100%",
            p: 2,
            backgroundColor: theme.palette.common.white,
          }}
        >
          <MuiTypography variant="h6">条件を入力してください</MuiTypography>
          <button onClick={toggleDrawer}>{open ? "閉じる" : "開く"}</button>
        </MuiBox>
      </MuiDrawer>
    </MuiBox>
  );
};
