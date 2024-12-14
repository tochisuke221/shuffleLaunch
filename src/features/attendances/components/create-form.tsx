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
  MuiIconButton,
} from "@/components/mui";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  AttendanceAddIcon,
  AttendanceIcon,
  ExpandMoreIcon,
  SearchIcon,
  ShuffleIcon,
} from "@/components/icons";
import { GroupIcon } from "@/components/icons";
import { useGroupContext } from "../providers/group";
import { useCreateForm } from "../hooks/create-form";
import { useAttendanceContext } from "../providers/attendance";

const drawerWidth = "50%";
const closedDrawerWidth = 70;

export const CreateForm = () => {
  const theme = useTheme();

  const {
    groupCount,
    groupAttendanceCount,
    changeGroupCount: handleChangeGroupCount,
    changeGroupAttendanceCount: handleChangeGroupAttendanceCount,
  } = useGroupContext();

  const { shuffleAttendances: handleShuffleAttendances } =
    useAttendanceContext();

  const {
    drawerOpen,
    accordionOpen,
    handleClickOpen,
    handleClickClose,
    handleClickShortcut,
  } = useCreateForm();

  return (
    <MuiBox>
      <MuiDrawer
        variant="permanent"
        anchor="right"
        open={drawerOpen}
        sx={{
          width: drawerOpen ? drawerWidth : closedDrawerWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          overflowX: "hidden",
          transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: drawerOpen
              ? theme.transitions.duration.enteringScreen
              : theme.transitions.duration.leavingScreen,
          }),
          "& .MuiDrawer-paper": {
            width: drawerOpen ? drawerWidth : closedDrawerWidth,
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: drawerOpen
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
          {drawerOpen ? (
            <MuiStack spacing={3}>
              <MuiStack direction="row" justifyContent="space-between">
                <MuiStack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  py={2}
                >
                  <SearchIcon />
                  <MuiTypography variant="h4">条件</MuiTypography>
                </MuiStack>
                <MuiIconButton onClick={handleClickClose}>
                  <ArrowRightIcon color="primary" fontSize="large" />
                </MuiIconButton>
              </MuiStack>
              <MuiStack spacing={3}>
                <MuiAccordion expanded={accordionOpen.get("group")}>
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
            <MuiStack alignItems="center" spacing={1}>
              <MuiIconButton onClick={handleClickOpen}>
                <ArrowLeftIcon color="primary" fontSize="large" />
              </MuiIconButton>
              <MuiIconButton onClick={() => handleClickShortcut("group")}>
                <AttendanceIcon />
              </MuiIconButton>
              <MuiIconButton
                onClick={() => handleShuffleAttendances()}
                sx={{
                    backgroundColor: theme.palette.common.red,
                    borderRadius: 2,
                    '&:hover': {
                        backgroundColor: theme.palette.common.redLight,

                    }
                }}
              >
                <ShuffleIcon fontSize="large"  />
              </MuiIconButton>
            </MuiStack>
          )}
        </MuiBox>
      </MuiDrawer>
    </MuiBox>
  );
};
