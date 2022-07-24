import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useEffect } from "react";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import theme from "./styles/theme";
function App() {
  useEffect(() => {
    document.title = "Mui Ecommerce";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Appbar />
        <Banner />

        {/* 
        promotions 
        title
        products
        footer
        searchbox
        appdrawer
        */}
      </Container>
    </ThemeProvider>
  );
}

export default App;
