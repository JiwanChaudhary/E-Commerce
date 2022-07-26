import { Box, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { useEffect } from "react";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Cart from "./components/cart";
import AppDrawer from "./components/drawer";
import Footer from "./components/footer";
import Products from "./components/products";
import Promotions from "./components/promotions";
import SearchBox from "./components/search";
import { UIProvider } from "./context/ui";
import theme from "./styles/theme";
function App() {
  useEffect(() => {
    document.title = "Mui Ecommerce";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <UIProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Box display={'flex'} justifyContent='center' sx={{ p: 4 }}>
            <Typography variant='h6'>Our Products</Typography>
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
          <Cart />
          <SearchBox />
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
