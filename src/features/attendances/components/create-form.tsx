"use client";

import { useTheme } from "@mui/material/styles";
import { use, useState } from "react";
import {
  MuiAccordion,
  MuiAccordionSummary,
  MuiAccordionDetails,
  MuiAccordionActions,
  MuiInputLabel,
  MuiFormControl,
  MuiMenuItem,
  MuiSelect,
  MuiStack,
  MuiDrawer,
  MuiBox,
  MuiTypography,
} from "@/components/mui";
import {
  AttendanceAddIcon,
  AttendanceIcon,
  ExpandMoreIcon,
  SearchIcon,
} from "@/components/icons";
import { GroupIcon } from "@/components/icons";
import { useCreateForm } from "../hooks/create-form";
import { useGroupContext } from "../providers/group";

const drawerWidth = "50%";
const closedDrawerWidth = 70;

export const CreateForm = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const { groupCount, groupAttendanceCount,  changeGroupCount: handleChangeGroupCount, changeGroupAttendanceCount: handleChangeGroupAttendanceCount } =
      useGroupContext();

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
                <MuiTypography variant="h4">条件</MuiTypography>
              </MuiStack>
              <MuiStack spacing={3}>
                <MuiAccordion>
                  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <MuiStack direction="row" spacing={2}>
                      <AttendanceIcon />
                      <MuiTypography>
                        グループ数と各グループの人数を設定する
                      </MuiTypography>
                    </MuiStack>
                  </MuiAccordionSummary>
                  <MuiAccordionDetails
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <MuiStack direction="row" alignItems="center" spacing={2}>
                      <GroupIcon />
                      <MuiFormControl>
                        <MuiInputLabel>グループ数</MuiInputLabel>
                        <MuiSelect
                          style={{ width: "150px" }}
                          value={groupCount}
                          label="グループ数"
                          onChange={(e) =>
                            handleChangeGroupCount(e.target.value as number)
                          }
                        >
                          <MuiMenuItem value={2}>2</MuiMenuItem>
                          <MuiMenuItem value={3}>3</MuiMenuItem>
                          <MuiMenuItem value={4}>4</MuiMenuItem>
                          <MuiMenuItem value={5}>5</MuiMenuItem>
                          <MuiMenuItem value={6}>6</MuiMenuItem>
                          <MuiMenuItem value={7}>7</MuiMenuItem>
                          <MuiMenuItem value={8}>8</MuiMenuItem>
                          <MuiMenuItem value={9}>9</MuiMenuItem>
                        </MuiSelect>
                      </MuiFormControl>
                    </MuiStack>

                    <MuiStack direction="row" alignItems="center" spacing={2}>
                      <AttendanceAddIcon />
                      <MuiFormControl>
                        <MuiInputLabel>各グループの人数</MuiInputLabel>
                        <MuiSelect
                          style={{ width: "200px" }}
                          value={groupAttendanceCount}
                          label="各グループの人数"
                          onChange={(e) =>
                            handleChangeGroupAttendanceCount(
                              e.target.value as number
                            )
                          }
                        >
                          <MuiMenuItem value={2}>2</MuiMenuItem>
                          <MuiMenuItem value={3}>3</MuiMenuItem>
                          <MuiMenuItem value={4}>4</MuiMenuItem>
                          <MuiMenuItem value={5}>5</MuiMenuItem>
                          <MuiMenuItem value={6}>6</MuiMenuItem>
                          <MuiMenuItem value={7}>7</MuiMenuItem>
                          <MuiMenuItem value={8}>8</MuiMenuItem>
                          <MuiMenuItem value={9}>9</MuiMenuItem>
                          <MuiMenuItem value={10}>10</MuiMenuItem>
                          <MuiMenuItem value={11}>11</MuiMenuItem>
                          <MuiMenuItem value={12}>12</MuiMenuItem>
                        </MuiSelect>
                      </MuiFormControl>
                    </MuiStack>
                  </MuiAccordionDetails>
                </MuiAccordion>

                <MuiAccordion>
                  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <MuiStack direction="row" spacing={2}>
                      <AttendanceIcon />
                      <MuiTypography>設定２</MuiTypography>
                    </MuiStack>
                  </MuiAccordionSummary>
                  <MuiAccordionDetails></MuiAccordionDetails>
                </MuiAccordion>

                <MuiAccordion>
                  <MuiAccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <MuiStack direction="row" spacing={2}>
                      <AttendanceIcon />
                      <MuiTypography>設定３</MuiTypography>
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
