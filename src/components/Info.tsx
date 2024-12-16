import { Container, Box, Typography } from "@mui/material";
import sample from "@/assets/sample_img1.png";

export default function Info() {
  return (
    <Container
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
      <Box>
        <Typography
          sx={{
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: "80px",
            color: "#252525",
            textAlign: "center",
          }}
        >
          Create AI Images
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            lineHeight: "22px",
            color: "#797484",
            fontWeight: 400,
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          Turn your imaginations into visuals
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          textAlign: "left",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <Box
          sx={{
            flex: 1,
          }}
        >
          <img src={sample} alt="sample" width="80%" height="80%" />
        </Box>
        <Box
          sx={{
            flex: 1,
          }}
        >
          <Typography
            sx={{
              fontSize: "28px",
              lineHeight: "38px",
              color: "#4b445a",
              fontWeight: 500,
              textAlign: "left",
            }}
          >
            Introducing the AI-Powered Text to <br />
            Image Generator
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              lineHeight: "22px",
              color: "#797484",
              fontWeight: 400,
              marginTop: "2rem",
              textAlign: "left",
            }}
          >
            <span>
              Easily bring your ideas to life with our free AI image generator.
              Whether you need stunning visuals or unique imagery, our tool
              transforms your text into eye-catching images with just a few
              clicks. Imagine it, describe it, and watch it come to life
              instantly.
            </span>
            <br />
            <br />
            <span>
              Simply type in a text prompt, and our cutting-edge AI will
              generate high-quality images in seconds. From product visuals to
              character designs and portraits, even concepts that don’t yet
              exist can be visualized effortlessly. Powered by advanced AI
              technology, the creative possibilities are limitless!
            </span>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
