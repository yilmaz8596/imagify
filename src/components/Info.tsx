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
        gap: { xs: "1rem", sm: "2rem" },
        padding: { xs: "1rem 0", md: "2rem 0" },
        marginTop: { xs: "2rem", md: "4rem" },
      }}
    >
      <Box
        sx={{ textAlign: "center", maxWidth: "800px", px: { xs: 2, md: 0 } }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem", md: "40px" },
            fontWeight: 500,
            lineHeight: { xs: "1.2", sm: "1.5", md: "80px" },
            color: "#252525",
          }}
        >
          Create AI Images
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: "14px", sm: "16px" },
            lineHeight: "22px",
            color: "#797484",
            fontWeight: 400,
            marginBottom: { xs: "1rem", md: "2rem" },
          }}
        >
          Turn your imaginations into visuals
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          gap: { xs: "1rem", md: "2rem" },
          width: "100%",
          maxWidth: "1200px",
        }}
      >
        {/* Image Container */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: 1, md: 0 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "100%" },
              maxWidth: "500px",
              position: "relative",
              aspectRatio: "1/1",
            }}
          >
            <img
              src={sample}
              alt="sample"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Box>

        {/* Text Container */}
        <Box
          sx={{
            width: { xs: "100%", md: "50%" },
            order: { xs: 0, md: 1 },
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem", md: "28px" },
              lineHeight: { xs: "1.3", md: "38px" },
              color: "#4b445a",
              fontWeight: 500,
              textAlign: { xs: "center", md: "left" },
              marginBottom: { xs: "1rem", md: 0 },
            }}
          >
            Introducing the AI-Powered Text to Image Generator
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "14px", sm: "16px" },
              lineHeight: "22px",
              color: "#797484",
              fontWeight: 400,
              marginTop: { xs: "1rem", md: "2rem" },
              textAlign: { xs: "center", md: "left" },
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
              character designs and portraits, even concepts that don't yet
              exist can be visualized effortlessly. Powered by advanced AI
              technology, the creative possibilities are limitless!
            </span>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
