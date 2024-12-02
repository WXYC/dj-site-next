"use client";

import Logo from "@/app/components/Branding/Logo";
import AlbumIcon from "@mui/icons-material/Album";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import StorageIcon from "@mui/icons-material/Storage";
import StreamIcon from "@mui/icons-material/Stream";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import GlobalStyles from "@mui/joy/GlobalStyles";
import List from "@mui/joy/List";
import Sheet from "@mui/joy/Sheet";
import Tooltip from "@mui/joy/Tooltip";
import { useState } from "react";

import LeftbarLink from "@/app/components/Leftbar/LeftbarLink";
import { useAppSelector, useAuthenticatedUser } from "@/lib/hooks";
import { UserTypes } from "@/lib/models/authentication/types";
import { getPageStyle } from "@/lib/slices/application/selectors";
import {
    EditCalendar,
    LibraryMusic,
    ManageAccounts,
} from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/joy";

export default function FirstSidebar(): JSX.Element {
  const pageStyle = useAppSelector(getPageStyle);

  const user = useAuthenticatedUser();

  const [logoutHovered, setLogoutHovered] = useState(false);

  return (
    <Sheet
      className="FirstSidebar"
      variant="soft"
      color={pageStyle}
      invertedColors
      sx={{
        position: {
          xs: "fixed",
          md: "sticky",
        },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--FirstSidebar-width)",
        top: 0,
        p: 1.5,
        py: 3,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={{
          ":root": {
            "--FirstSidebar-width": "68px",
          },
        }}
      />
      <Box>
        <Logo color={pageStyle} />
      </Box>
      <List sx={{ "--ListItem-radius": "8px", "--List-gap": "12px" }}>
        <LeftbarLink path="/dashboard/catalog" title="Card Catalog">
          <AlbumIcon />
        </LeftbarLink>
        <LeftbarLink path="/dashboard/flowsheet" title="Flow Sheet">
          <StreamIcon />
        </LeftbarLink>
        <LeftbarLink path="/dashboard/playlists" title="Previous Sets">
          <StorageIcon />
        </LeftbarLink>
        {user && (
          <>
            <Divider sx={{ mt: 1.5 }} />
            <LeftbarLink
              path="/dashboard/admin/roster"
              title="DJ Roster"
              disabled={user.permissions !== UserTypes.STATION_MANAGER}
            >
              <ManageAccounts />
            </LeftbarLink>
            <LeftbarLink
              path="/dashboard/admin/schedule"
              title="Station Schedule"
              disabled={true}
            >
              <EditCalendar />
            </LeftbarLink>
            <LeftbarLink
              path="/dashboard/admin/catalog"
              title="Station Management"
              disabled={true}
            >
              <LibraryMusic />
            </LeftbarLink>
          </>
        )}
      </List>
      <LeftbarLink path="/dashboard/settings" title="Settings">
        <SettingsIcon />
      </LeftbarLink>
      <Divider />
      <Tooltip
        title={
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 320,
              justifyContent: "center",
              p: 1,
            }}
          >
            <Typography level="body-sm">@{user?.username}</Typography>
            <Stack direction="row" gap={1}>
              <Typography level="body-lg">{user?.name}</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  level="body-xs"
                  sx={{
                    height: "1.5em",
                  }}
                >
                  aka
                </Typography>
              </Box>
              <Typography level="body-lg">DJ {user?.djName}</Typography>
            </Stack>
            <Typography level="body-md" color="primary">
              Click to Log Out
            </Typography>
          </Box>
        }
        placement="right"
        arrow
        variant="outlined"
      >
        <IconButton
          variant="outlined"
          onMouseOver={() => setLogoutHovered(true)}
          onMouseOut={() => setLogoutHovered(false)}
          onClick={() => {
            
          }}
        >
          {logoutHovered ? <LogoutOutlinedIcon /> : <PersonOutlinedIcon />}
        </IconButton>
      </Tooltip>
    </Sheet>
  );
}
