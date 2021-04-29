import PortfolioPage from "./pages/portfolio";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#0664AD",
      light: "#1882D4",
      dark: "#04487C",
    },
    secondary: {
      main: "#FF4900",
      light: "#FFBF00",
      dark: "#C13700",
    },
    warning: {
      main: "#FFBF00",
      light: "#FFD864",
      dark: "#C79500",
    },
    background: {
      default: "#000000",
      paper: "#fafafa",
    },
    text: {
      primary: "#fafafa",
      secondary: "#0664AD",
    },
  },
  typography: {
    fontFamily: "Arial",
    body1: {
      fontSize: 19,
    },
    h1: {
      fontSize: 60,
    },
    h2: {
      fontSize: 45,
    },
    h3: {
      fontSize: 25,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PortfolioPage />
    </ThemeProvider>
  );
}

export default App;
