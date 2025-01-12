import * as React from "react";
import { useUserStore } from "../stores/useUserStore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
import toast from "react-hot-toast";
import vector from "../assets/Vector.png";

const pages = ["Pricing", "Login"];
const settings = [
  {
    href: "/profile",
    title: "Profile",
  },
  {
    href: "/dashboard",
    title: "Dashboard",
  },
  {
    href: "/account",
    title: "Account",
  },
];

function Header({ openModal }: { openModal: () => void }) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const { user, logout } = useUserStore();
  console.log(user);

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

  const handleLogout = async () => {
    try {
      const resp = await logout();
      if (resp) {
        toast.success("Logged out successfully");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      if (error instanceof Error) {
        toast.error("An error occurred: " + error.message);
      } else {
        toast.error("An unknown error occurred");
      }
    }
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
              justifyContent: "flex-end",
              fontFamily: "Outfit, variable",
              minHeight: "fit-content",
              minWidth: "fit-content",
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
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiMenu-paper": {
                  minWidth: "fit-content",
                  minHeight: "fit-content",
                  borderRadius: 0, // Remove border radius
                  backgroundColor: "#FFFFFF", // Match app bar background
                },
                "& .MuiList-root": {
                  padding: "20px", // Add padding
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px", // Space between menu items
                  height: "100%",
                },
              }}
            >
              {!user
                ? pages.map((page) => (
                    <MenuItem
                      key={page}
                      onClick={() => {
                        handleCloseNavMenu();
                        page === "Pricing" ? navigate("/pricing") : openModal();
                      }}
                      sx={{
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          color: page === "Pricing" ? "#545454" : "#ffffff",
                          textTransform: "none",
                          fontWeight: 400,
                          fontSize: "18px",
                          fontFamily: "Outfit, variable",
                          lineHeight: "16px",
                          textAlign: "center",
                          width: "100%",
                          backgroundColor:
                            page === "Login" ? "#000000" : "transparent",
                          borderRadius: page === "Login" ? 10 : 0,
                          padding: page === "Login" ? "15px 20px" : "10px 0",
                        }}
                      >
                        {page}
                      </Typography>
                    </MenuItem>
                  ))
                : settings.map((setting, idx) => (
                    <MenuItem
                      key={idx}
                      onClick={() => {
                        handleCloseNavMenu();
                        navigate(setting.href);
                      }}
                      sx={{
                        justifyContent: "center",
                        width: "100%",
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#545454",
                          textTransform: "none",
                          fontWeight: 400,
                          fontSize: "18px",
                          fontFamily: "Outfit, variable",
                          lineHeight: "16px",
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        {setting.title}
                      </Typography>
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
            {!user &&
              pages.map((page) =>
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
          {user && (
            <Box
              sx={{
                flexGrow: 0,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#D7EBFF",
                  padding: "15px",
                  minWidth: "fit-content",
                  maxHeight: "55px",
                  borderRadius: "50px",
                  display: {
                    xs: "none",
                    md: "flex",
                  },
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <img src={vector} alt="vector" width="30" height="30" />
                <Typography
                  sx={{
                    color: "#000000",
                    textTransform: "none",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "18.9px",
                    fontFamily: "Outfit, variable",
                    marginLeft: "10px",
                  }}
                >
                  Credits left: 10
                </Typography>
              </Box>
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
                {settings.map((setting, idx) => (
                  <MenuItem key={idx} onClick={handleCloseUserMenu}>
                    <Link to={setting.href}>
                      <Typography sx={{ textAlign: "center" }}>
                        {setting.title}
                      </Typography>
                    </Link>
                  </MenuItem>
                ))}
                <MenuItem
                  onClick={async () => {
                    handleCloseUserMenu();
                    await handleLogout();
                  }}
                >
                  <Typography sx={{ textAlign: "center" }}>Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
