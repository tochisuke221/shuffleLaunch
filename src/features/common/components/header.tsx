"use client";

import { MuiStack, MuiTypography } from "@/components/mui";
import { LogoImage } from "@/components/common";
import { useTheme } from "@mui/material/styles";

export const Header = () => {
  const theme = useTheme();

  return (
    <MuiStack
      position="fixed"
      direction="row"
      p={3}
      spacing={2}
      elevation={1}
      sx={{
        height: 30,
        width: "100%",
        backgroundColor: theme.palette.common.blue,
        color: theme.palette.text.primary,
        zIndex: theme.zIndex.header,
        alignItems: "center",
      }}
    >
      <LogoImage height={40} />
      <MuiTypography
        fontWeight={theme.typography.fontWeightBold}
        color={theme.palette.common.white}
        sx={{
          fontFamily: "monospace",
        }}
      >
        おみくじランチ
      </MuiTypography>
    </MuiStack>
  );
};
