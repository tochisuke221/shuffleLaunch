"use client";

import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import {
  MuiAccordion,
  MuiAccordionSummary,
  MuiAccordionDetails,
  MuiAccordionActions,
  MuiStack,
  MuiDrawer,
  MuiBox,
  MuiTypography,
} from "@/components/mui";
import { AttendanceIcon, ExpandMoreIcon, SearchIcon } from "@/components/icons";

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
        <MuiBox
          sx={{
            height: "100%",
            p: 2,
            backgroundColor: theme.palette.common.grayLight,
          }}
        >
          {open ? (
            <MuiStack spacing={3}>
              <MuiStack direction="row" alignItems="center" spacing={1} py={2}>
                <SearchIcon />
                <MuiTypography variant="h4">
                  条件
                </MuiTypography>
              </MuiStack>
              <MuiStack spacing={3}>
                <MuiAccordion>
                  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <MuiStack direction="row" spacing={2}>
                      <AttendanceIcon />
                      <MuiTypography>グループ数と人数を設定する</MuiTypography>
                    </MuiStack>
                  </MuiAccordionSummary>
                  <MuiAccordionDetails></MuiAccordionDetails>
                </MuiAccordion>

                <MuiAccordion>
                  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <MuiStack direction="row" spacing={2}>
                      <AttendanceIcon />
                      <MuiTypography>グループ数と人数を設定する</MuiTypography>
                    </MuiStack>
                  </MuiAccordionSummary>
                  <MuiAccordionDetails></MuiAccordionDetails>
                </MuiAccordion>

                <MuiAccordion>
                  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <MuiStack direction="row" spacing={2}>
                      <AttendanceIcon />
                      <MuiTypography>グループ数と人数を設定する</MuiTypography>
                    </MuiStack>
                  </MuiAccordionSummary>
                  <MuiAccordionDetails></MuiAccordionDetails>
                </MuiAccordion>
              </MuiStack>
            </MuiStack>
          ) : (
            <MuiStack direction="row" alignItems="center" spacing={1}>
              <SearchIcon />
            </MuiStack>
          )}

          <button onClick={toggleDrawer}>{open ? "閉じる" : "開く"}</button>
        </MuiBox>
      </MuiDrawer>
    </MuiBox>
  );
};
