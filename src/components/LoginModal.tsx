import { useState } from "react";
import { Modal, Typography, Button, TextField, Paper } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export default function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              transition: {
                duration: 0.2,
              },
            }}
            key="box"
          >
            <Paper
              elevation={3}
              sx={{
                width: 400,
                p: 7,
                borderRadius: 4,
              }}
            >
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  mb: 2,
                  fontWeight: 500,
                  fontSize: "28px",
                  lineHeight: "35.28px",
                  color: "#444444",
                  textAlign: "center",
                }}
              >
                Login
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 6,
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "17.64px",
                  textAlign: "center",
                }}
              >
                Welcome back! Please sign in to continue
              </Typography>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px",
                    "& fieldset": {
                      borderRadius: "30px",
                    },
                  },
                }}
                InputProps={{
                  endAdornment: <EmailIcon />,
                  sx: {
                    borderRadius: "30px",
                    color: "#007AFF",
                  },
                }}
              />

              <TextField
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                fullWidth
                sx={{
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "30px",
                    "& fieldset": {
                      borderRadius: "30px",
                    },
                  },
                }}
                InputProps={{
                  endAdornment: showPassword ? (
                    <VisibilityIcon
                      sx={{
                        cursor: "pointer",
                        color: "#007AFF",
                      }}
                      onClick={handleClickShowPassword}
                    />
                  ) : (
                    <VisibilityOffIcon
                      sx={{
                        cursor: "pointer",
                        color: "#007AFF",
                      }}
                      onClick={handleClickShowPassword}
                    />
                  ),
                  sx: {
                    borderRadius: "30px",
                  },
                }}
              />
              <Typography
                sx={{
                  mb: 0.5,
                }}
              >
                <Button
                  variant="text"
                  sx={{
                    color: "#007AFF",
                    textTransform: "none",
                    fontSize: "14px",
                    lineHeight: "17.64px",
                    fontWeight: 400,
                  }}
                >
                  Forgot Password?
                </Button>
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: "30px",
                  textTransform: "none",
                  fontSize: "16px",
                  lineHeight: "20.16px",
                  fontWeight: 400,
                  color: "#ffffff",
                  backgroundColor: "#007AFF",
                  "&:hover": {
                    backgroundColor: "#007AFF",
                  },
                  padding: "10px",
                }}
              >
                Login
              </Button>
              <Typography
                sx={{
                  mt: 2,
                  textAlign: "center",
                  fontSize: "15px",
                  lineHeight: "18.9px",
                  fontWeight: 400,
                  color: "#7a7a7a",
                }}
              >
                Don't have an account?{" "}
                <Button
                  variant="text"
                  sx={{
                    color: "#007AFF",
                    textTransform: "none",
                    fontSize: "14px",
                    lineHeight: "17.64px",
                    fontWeight: 400,
                  }}
                >
                  Sign Up
                </Button>
              </Typography>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}
