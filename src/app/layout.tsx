import { Metadata, Viewport } from "next";
import { ReactNode } from "react";
import { MuiBox } from "@/components/mui";
import { AppProvider } from "@/providers/app";

export const metadata: Metadata = {
  title: {
    template: "%s | おみくじランチ",
    default: "おみくじランチ",
  },
  icons: [
    {
      url: "/favicons/favicon.png",
      rel: "icon",
      type: "image/x-icon",
    },
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="ja">
      <body style={{ margin: 0, padding: 0 }}>
        <AppProvider>
          <MuiBox component="main">
            {children}
          </MuiBox>
        </AppProvider>
      </body>
    </html>
  );
};

export default Layout;
