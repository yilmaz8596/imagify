import { Container, Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "1rem",
        padding: "2rem 0",
        color: "#252525",
        marginTop: "8rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "2rem",
          marginRight: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src={logo} alt="logo" width="31" height="31" />
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
        <div className="w-[1px] h-7 bg-[#9d9d9d] border border-solid border-slate-300" />
        <Typography
          sx={{
            color: "#797484",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20.16px",
          }}
        >
          All right reserved. Copyright @imagify
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FacebookIcon />
        <InstagramIcon />
        <XIcon />
      </Box>
    </Container>
  );
}
