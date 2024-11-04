"use client";

import { useState } from "react";
import {
  MuiStack,
  MuiOutlinedInput,
  MuiTypography,
  MuiBox,
  MuiGrid,
} from "@/components/mui";
import { useTheme } from "@mui/material/styles";
import { Flipper, Flipped } from "react-flip-toolkit";

export const Attendances = () => {
  const theme = useTheme();

  // データとグループ数の設定
  const [data, setData] = useState(
    Array.from({ length: 12 }, (_, i) => ({ id: i + 1, value: "" }))
  );
  const groupCount = 3;

  const shuffleData = () => {
    setData((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  const handleInputChange = (id, newValue) => {
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, value: newValue } : item))
    );
  };

  // 各グループに均等にデータを配分するための処理
  const getGroupData = (groupIndex) => {
    const itemsPerGroup = Math.floor(data.length / groupCount);
    const remainder = data.length % groupCount;
    const startIndex =
      groupIndex * itemsPerGroup + Math.min(groupIndex, remainder);
    const endIndex =
      startIndex + itemsPerGroup + (groupIndex < remainder ? 1 : 0);
    return data.slice(startIndex, endIndex);
  };

  return (
    <MuiStack direction="row" flexWrap="wrap" spacing={2}>
      <Flipper flipKey={data.map((item) => item.id).join("")}>
        <button onClick={shuffleData}>Shuffle</button>
        <button onClick={() => setData((prev) => [...prev].reverse())}>
          Reverse
        </button>
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
                      {getGroupData(groupIndex).map((item) => (
                        <Flipped key={item.id} flipId={item.id}>
                          <MuiOutlinedInput
                            value={item.value}
                            onChange={(e) =>
                              handleInputChange(item.id, e.target.value)
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
