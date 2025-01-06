import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo.svg";

const pages = ["Pricing", "Login"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar({ openModal }: { openModal: () => void }) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" elevation={0}>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#F2FFF9",
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginRight: 2,
            }}
          >
            <Box sx={{ marginRight: 1 }}>
              <img src={logo} alt="logo" width="31" height="31" />
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                color: "#000000",
                textDecoration: "none",
                textTransform: "none",
                fontWeight: 600,
                fontSize: "30px",
                lineHeight: "37.8px",
                fontFamily: "Outfit, variable",
              }}
            >
              imagify
            </Typography>
          </Box>

          {/* Mobile Menu Section */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ color: "#000000" }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {page === "Pricing" ? (
                    <Typography
                      sx={{
                        color: "#545454",
                        textTransform: "none",
                        fontWeight: 400,
                        fontSize: "20px",
                        lineHeight: "30px",
                        textAlign: "center",
                        width: "100%",
                      }}
                    >
                      {page}
                    </Typography>
                  ) : (
                    <Button
                      sx={{
                        color: "#ffffff",
                        textTransform: "none",
                        backgroundColor: "#000000",
                        borderRadius: 10,
                        paddingLeft: 5,
                        paddingRight: 5,
                        textAlign: "center",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: "18.9px",
                        fontFamily: "Outfit, variable",
                        width: "100%",
                      }}
                    >
                      {page}
                    </Button>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu Section */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
              marginRight: 4,
            }}
          >
            {pages.map((page) =>
              page === "Pricing" ? (
                <Button
                  key={page}
                  onClick={() => navigate("/pricing")}
                  sx={{
                    my: 2,
                    display: "block",
                    color: "#545454",
                    textTransform: "none",
                    textAlign: "center",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "18.9px",
                    fontFamily: "Outfit, variable",
                  }}
                >
                  {page}
                </Button>
              ) : (
                <Button
                  key={page}
                  onClick={openModal}
                  sx={{
                    my: 2,
                    display: "block",
                    color: "#ffffff",
                    textTransform: "none",
                    backgroundColor: "#000000",
                    borderRadius: 10,
                    paddingLeft: 5,
                    paddingRight: 5,
                    textAlign: "center",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "18.9px",
                    fontFamily: "Outfit, variable",
                  }}
                >
                  {page}
                </Button>
              )
            )}
          </Box>

          {/* User Menu Section */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
