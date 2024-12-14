"use client";

import { use, useState } from "react";
import {
  MuiStack,
  MuiOutlinedInput,
  MuiTypography,
  MuiBox,
  MuiGrid,
} from "@/components/mui";
import { useTheme } from "@mui/material/styles";
import { Flipper, Flipped } from "react-flip-toolkit";
import { useGroupContext } from "../providers/group";
import { useAttendanceContext } from "../providers/attendance";

export const Attendances = () => {
  const theme = useTheme();

  const { groupCount } = useGroupContext();
  const { attendances, shuffleAttendances: handleShuffleAttendances, inputAttendance: handleInputAttendance } = useAttendanceContext();


  // 各グループに均等にデータを配分するための処理
  const getGroupData = (groupIndex: number) => {
    const itemsPerGroup = Math.floor(attendances.length / groupCount);
    const remainder = attendances.length % groupCount;
    const startIndex =
      groupIndex * itemsPerGroup + Math.min(groupIndex, remainder);
    const endIndex =
      startIndex + itemsPerGroup + (groupIndex < remainder ? 1 : 0);
    return attendances.slice(startIndex, endIndex);
  };

  return (
    <MuiStack
      direction="row"
      flexWrap="wrap"
      spacing={2}
      width={`calc(100% - 70px)`}
    >
      <Flipper flipKey={attendances.map((attendance) => attendance.id).join("")}>
        <button onClick={handleShuffleAttendances}>Shuffle</button>

        <MuiGrid container spacing={2}>
          {Array.from({ length: groupCount }).map((_, groupIndex) => (
            <MuiGrid key={groupIndex} size={4}>
              <MuiBox
                minHeight="100%"
                sx={{
                  backgroundColor: theme.palette.common.blueExtraLight,
                  borderRadius: 2,
                  justifyContent: "center",
                  p: 1,
                }}
              >
                <MuiStack alignItems="center" width="100%" spacing={1}>
                  <MuiTypography variant="h6">{`グループ${
                    groupIndex + 1
                  }`}</MuiTypography>
                  <MuiBox
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MuiStack
                      direction="row"
                      justifyContent="flex-start"
                      alignItems="center"
                      flexWrap="wrap"
                      width="100%"
                    >
                      {getGroupData(groupIndex).map((attendance) => (
                        <Flipped key={attendance.id} flipId={attendance.id}>
                          <MuiOutlinedInput
                            value={attendance.name}
                            onChange={(e) =>
                              handleInputAttendance(attendance.id, e.target.value)
                            }
                            sx={{
                              // TODO: あとで直す
                              width: `calc((100% - 16px * 4) / 4)`,
                              height: 90,
                              m: 1,
                              fontWeight: theme.typography.fontWeightBold,
                              fontSize: theme.typography.body1.fontSize,
                              backgroundColor: theme.palette.common.white,
                            }}
                            inputProps={{
                              style: { textAlign: "center" }, // 入力値を水平方向に中央揃え
                            }}
                          />
                        </Flipped>
                      ))}
                    </MuiStack>
                  </MuiBox>
                </MuiStack>
              </MuiBox>
            </MuiGrid>
          ))}
        </MuiGrid>
      </Flipper>
    </MuiStack>
  );
};
