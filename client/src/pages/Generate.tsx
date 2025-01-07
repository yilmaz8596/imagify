import { useState } from "react";

import {
  Box,
  Button,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import image from "../assets/image.png";

export default function Generate() {
  const [prompt, setPrompt] = useState("");
  const handleGenerate = () => {
    console.log("Generating image with prompt: ", prompt);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "2rem",
      }}
    >
      <Typography variant="h4">Generate</Typography>
      <Box
        component="img"
        src={image}
        alt="image"
        sx={{
          width: {
            xs: "80%",
            sm: "60%",
            md: "40%",
            lg: "30%",
          },
          height: "auto",
        }}
      />

      <TextField
        variant="outlined"
        placeholder="Describe the image you want to generate"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        sx={{
          width: {
            xs: "100%",
            sm: "80%",
            md: "60%",
            lg: "50%",
          },
          mt: "2rem",
          "& .MuiOutlinedInput-root": {
            borderRadius: "30px",
            "&.Mui-focused": {
              borderColor: "#007AFF",
              boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
            },
            "& fieldset": {
              borderRadius: "30px",
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={handleGenerate}
                edge="end"
                sx={{
                  backgroundColor: "#007AFF",
                  color: "white",
                  borderRadius: "50%",
                  padding: "8px",
                  marginRight: "-8px", // Adjust to align with rounded TextField
                  "&:hover": {
                    backgroundColor: "#0056b3",
                  },
                }}
              >
                <AutoFixHighIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
