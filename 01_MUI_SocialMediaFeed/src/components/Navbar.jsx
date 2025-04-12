import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Box,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import styled from "@emotion/styled";
import {
  Pets,
  Mail,
  Notifications,
  Settings,
  AccountCircle,
  ExitToApp,
} from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const SearchBar = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconContainer = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1em",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "1em",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

const LogoIcon = styled(Pets)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event, mobileMenu = false) => {
    setAnchorEl(event.currentTarget);
    setIsMobileMenu(mobileMenu);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <LogoText variant="h6">SOCIALIZE</LogoText>
        <LogoIcon />

        <SearchBar>
          <InputBase placeholder="Search..." />
        </SearchBar>

        <IconContainer>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            id="profile-menu-desktop-button"
            aria-controls={open ? "profile-poitioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            sx={{ width: 36, height: 36, marginLeft: "0.2em" }}
            alt="Jaya Ahsan"
            src="https://images.filmibeat.com/img/popcorn/profile_photos/jaya-ahsan-20231208105820-60896.jpg"
          />
        </IconContainer>

        <Menu
          id="profile-poitioned-menu"
          aria-labelledby="profile-poitioned-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          {isMobileMenu && (
            <>
              <MenuItem onClick={handleClose}>
                <Typography
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Badge badgeContent={4} color="error" sx={{ mr: 2 }}>
                    <Mail fontSize="small" />
                  </Badge>
                  Messages
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Badge badgeContent={2} color="error" sx={{ mr: 2 }}>
                    <Notifications fontSize="small" />
                  </Badge>
                  Notifications
                </Typography>
              </MenuItem>
              <Divider />
            </>
          )}
          <MenuItem onClick={handleClose}>
            <Settings fontSize="small" sx={{ mr: 2 }} />
            Settings
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <AccountCircle fontSize="small" sx={{ mr: 2 }} />
            My account
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <ExitToApp fontSize="small" sx={{ mr: 2 }} />
            Logout
          </MenuItem>
        </Menu>

        <UserBox
          id="profile-menu-mobile-button"
          aria-controls={open ? "profile-poitioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={(e) => handleClick(e, true)}
        >
          <Avatar
            sx={{ width: 36, height: 36 }}
            alt="Jaya Ahsan"
            src="https://images.filmibeat.com/img/popcorn/profile_photos/jaya-ahsan-20231208105820-60896.jpg"
          />
          <Typography component="span">Jaya A</Typography>
        </UserBox>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
