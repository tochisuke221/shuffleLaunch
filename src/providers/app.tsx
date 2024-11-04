import { ReactNode } from "react";
import { MuiProvider } from "@/providers/mui";

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return <MuiProvider>{children}</MuiProvider>;
};
