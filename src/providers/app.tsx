import { ReactNode } from "react";
import { MuiProvider } from "@/providers/mui";
import { SideNavigationProvider } from "@/providers/side-navigation";

type Props = {
  children: ReactNode;
};

export const AppProvider = ({ children }: Props) => {
  return (
    <MuiProvider>
      <SideNavigationProvider>{children} </SideNavigationProvider>
    </MuiProvider>
  );
};
