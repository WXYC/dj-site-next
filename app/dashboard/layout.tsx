import { Box } from "@mui/joy";
import React from "react";
import DesktopHeader from "../components/Header/DesktopHeader";
import MobileHeader from "../components/Header/MobileHeader";
import FirstSidebar from "../components/Leftbar/Leftbar";
import Main from "../components/Main/Main";
import Rightbar from "../components/Rightbar/Rightbar";

export default function Dashboard({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Box sx={{ display: "flex", minHeight: "100dvh" }}>
      <MobileHeader />
      <FirstSidebar />
      <Main>
        <DesktopHeader />
        {children}
        <Rightbar />
      </Main>
    </Box>
  );
}
