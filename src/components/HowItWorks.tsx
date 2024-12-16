import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CssBaseline } from "@mui/material";
import icon1 from "@/assets/step_icon_1.svg";
import icon2 from "@/assets/step_icon_2.svg";
import icon3 from "@/assets/step_icon_3.svg";

export default function HowItWorks() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const steps = [
    {
      icon: icon1,
      title: "Describe your vision",
      description:
        "Type a phrase, sentence, or paragraph that describes the image you want to create",
    },
    {
      icon: icon2,
      title: "Watch the magic happen",
      description:
        "Our AI-powered tool will generate an image based on your description in seconds",
    },
    {
      icon: icon3,
      title: "Download your art",
      description: "Instantly download your image and share it with the world",
    },
  ];

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          padding: "2rem 0",
          marginTop: "4rem",
          fontFamily: "Outfit, sans-serif",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 500,
            fontSize: "40px",
            lineHeight: "80px",
            textAlign: "center",
            color: "#252525",
          }}
        >
          How it works
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "22px",
            textAlign: "center",
            color: "#797484",
            fontWeight: 400,
            marginTop: "-2rem",
            marginBottom: "2rem",
          }}
        >
          Transform your images into beautiful art pieces
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2rem",
            textAlign: "left",
            width: "100%",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {steps.map((step, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              sx={{
                backgroundColor: "#FFFFFF",
                color: "#252525",
                border: "1px solid #E1E1E1",
                borderRadius: "8px",
                padding: "2rem",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
                "&:hover": {
                  backgroundColor: "#F2FFF9",
                },
                width: "100%",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
                sx={{
                  flexDirection: "row",
                  alignItems: "center",
                  "& .MuiAccordionSummary-expandIconWrapper": {
                    position: "absolute",
                    right: "16px",
                  },
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <img
                    src={step.icon}
                    alt={`Step ${index + 1} icon`}
                    style={{ width: "40px", height: "40px" }}
                  />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 400,
                      lineHeight: "25.2px",
                      color: "#000000",
                    }}
                  >
                    {step.title}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ paddingLeft: "calc(40px + 2rem)" }}>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "18.9px",
                    color: "#7c7c7c",
                  }}
                >
                  {step.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </>
  );
}
