import { useState, useCallback } from "react";
import {
  Container,
  Box,
  Typography,
  Card,
  Rating,
  Avatar,
  IconButton,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import star from "@/assets/star.png";

export const testimonials = [
  {
    id: 1,
    name: "Donald Jackman",
    title: "Graphic Designer",
    rating: 5,
    review:
      "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.",
  },
  {
    id: 2,
    name: "Jane Cooper",
    title: "Content Creator",
    rating: 5,
    review:
      "I've been relying on Imagify for over a year now to manage my video projects, and its intuitive interface has saved me countless hours.",
  },
  {
    id: 3,
    name: "Lisa Jackson",
    title: "Photographer",
    rating: 5,
    review:
      "Using Imagify for my graphic design needs has been a game-changer; it's seamless and perfect for creating stunning visuals effortlessly.",
  },
  {
    id: 4,
    name: "John Doe",
    title: "Web Developer",
    rating: 5,
    review:
      "Imagify has been my go-to tool for editing photos for almost three years, and its simplicity combined with advanced features is unmatched.",
  },
  {
    id: 5,
    name: "Jane Smith",
    title: "UI/UX Designer",
    rating: 5,
    review:
      "After two years with Imagify, I can't imagine writing and managing my blog without it—it's made the whole process smooth and stress-free.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const getVisibleCount = useCallback(() => {
    if (isSmallScreen) return 1;
    if (isMediumScreen) return 2;
    return 3;
  }, [isSmallScreen, isMediumScreen]);

  const visibleCount = getVisibleCount();

  const handleNext = useCallback(() => {
    if (!isTransitioning && currentIndex < testimonials.length - visibleCount) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, currentIndex, visibleCount]);

  const handlePrev = useCallback(() => {
    if (!isTransitioning && currentIndex > 0) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [isTransitioning, currentIndex]);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "32px", md: "40px" },
            fontWeight: 500,
            lineHeight: 1.2,
            mb: 2,
            fontFamily: "Outfit, sans-serif",
            color: "#252525",
          }}
        >
          Testimonials
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            lineHeight: 1.5,
            color: "#797484",
            fontFamily: "Outfit, sans-serif",
          }}
        >
          What our customers are saying about us
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          mx: { xs: 2, md: 6 }, // Give space for arrows
          px: { xs: 1, md: 2 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
            transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={`${testimonial.id}-${index}`}
              sx={{
                flexShrink: 0,
                width: `${100 / visibleCount}%`,
                padding: 1,
                marginRight: index === testimonials.length - 1 ? 0 : 0.7,
              }}
            >
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  borderRadius: 2,
                  p: 3,
                }}
              >
                <Box>
                  <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "16px",
                      lineHeight: 1.6,
                      color: "#252525",
                      mb: 2,
                      fontFamily: "Outfit, sans-serif",
                    }}
                  >
                    "{testimonial.review}"
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar sx={{ bgcolor: "#F2FFF9", mr: 2 }}>
                    {testimonial.name.charAt(0)}
                  </Avatar>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 500,
                        color: "#252525",
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#797484",
                        fontFamily: "Outfit, sans-serif",
                      }}
                    >
                      {testimonial.title}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            </Box>
          ))}
        </Box>
        <IconButton
          onClick={handlePrev}
          aria-label="Previous testimonial"
          sx={{
            position: "absolute",
            left: { xs: -10, md: 0 },
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "white",
            boxShadow: 3,
            "&:hover": { bgcolor: "white" },
            zIndex: 2,
            width: 40,
            height: 40,
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          onClick={handleNext}
          aria-label="Next testimonial"
          sx={{
            position: "absolute",
            right: { xs: -10, md: 0 },
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: "white",
            boxShadow: 3,
            "&:hover": { bgcolor: "white" },
            zIndex: 2,
            width: 40,
            height: 40,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 12,
        }}
      >
        <Typography
          sx={{
            color: "#252525",
            fontSize: "40px",
            fontWeight: 500,
            lineHeight: "80px",
            mb: 2,
            fontFamily: "Outfit, sans-serif",
          }}
        >
          See the magic! Try now.
        </Typography>
        <Button
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
        >
          Generate Images
          <img src={star} alt="star-gr" width={23} height={23} />
        </Button>
      </Box>
    </Container>
  );
}
