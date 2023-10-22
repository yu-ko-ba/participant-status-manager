import { theme } from "@/ui/theme";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>
  );
}
