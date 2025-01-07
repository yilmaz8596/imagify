import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, CssBaseline, Typography, Button } from "@mui/material";
import star from "@/assets/star_icon.svg";
import stargr from "@/assets/star_group.png";
import sample from "@/assets/images_group.png";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          padding: "2rem 0",
          marginTop: "4rem",
        }}
      >
        <Box
          sx={{
            width: "fit-content",
            padding: "0.6rem 1.5rem 0.6rem 1.5rem",
            backgroundColor: "#FFFFFF",
            borderRadius: "50px",
            border: "0.3px solid #7a7a7a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            sx={{
              color: "#696969",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "18.9px",
            }}
          >
            Best text to image generator
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={star} alt="star" width="20" height="20" />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#252525",
              fontSize: "80px",
              fontWeight: 400,
              lineHeight: "80px",
            }}
          >
            Create stunning images
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#252525",
              fontSize: "80px",
              fontWeight: 400,
              lineHeight: "80px",
            }}
          >
            with <span className="text-[#007aff]">AI</span>, in seconds
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#545454",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "22.68px",
            }}
          >
            Unleash your creativity with AI. Turn your imagination into visual
            art
            <br />
            in seconds – just type, and watch the magic happen.
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#000000",
            color: "#ffffff",
            padding: "1rem 3.5rem",
            borderRadius: "50px",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20.16px",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#007aff",
            },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
          onClick={() => navigate("/generate")}
        >
          Generate Images
          <img src={stargr} alt="star-gr" width={23} height={23} />
        </Button>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            textAlign: "center",
            marginTop: "4rem",
          }}
        >
          <img src={sample} alt="sample" />
          <Typography
            variant="h6"
            sx={{
              color: "#545454",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "18.9px",
            }}
          >
            <span className="text-[#007aff]">Try for free</span> or choose from
            our premium plans.
          </Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
