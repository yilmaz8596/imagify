import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@fontsource/outfit";
import { ThemeProvider } from "@mui/material";
import { theme } from "./util/theme.ts";
import { AppProvider } from "./context/context.tsx";
createRoot(document.getElementById("root")!).render(
  <AppProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </AppProvider>
);
