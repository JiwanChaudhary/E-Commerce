import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import useCart from "../../hooks/useCart";
import IncreDecre from "../../components/ui";

export default function Cart() {
  const { cart, showCart, setShowCart } = useUIContext();

  const { addToCart } = useCart(cart);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const cartContent = cart.map((item) => (
    <Box key={item.id}>
      <Box
        display={"flex"}
        alignItems="start"
        justifyContent={"space-between"}
        sx={{ pt: 2, pb: 2 }}
      >
        <Avatar src={item.image} sx={{ width: 96, height: 96, mr: 2 }} />
        <Box display="flex" flexDirection="column">
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="body1">${item.price}</Typography>
          {!matches && (
            <Typography variant="subtitle2">{item.description}</Typography>
          )}
        </Box>
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      {!matches && (
        <Box display="flex" justifyContent={"space-between"}>
          <IncreDecre /> 
          <Button variant="contained">Buy Now</Button>
        </Box>
      )}
      {matches && (
        <Typography variant="subtitle2">{item.description}</Typography>
      )}
      {matches && (
        <Box display="flex" justifyContent={"space-between"}>
          <IncreDecre />
          <Button variant="contained">Buy Now</Button>
        </Box>
      )}
      <Divider variant="fullWidth" sx={{ mt: 1 }} />
    </Box>
  ));

  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx: {
          width: matches ? "100%" : 500,
          background: Colors.light_gray,
          borderRadius: 0,
        },
      }}
    >
      {cart.length > 0 && addToCart ? (
        <Box
          sx={{ p: 4 }}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          flexDirection={"column"}
        >
          <Typography variant="h3" color={Colors.black}>
            Your Cart
          </Typography>
          <Typography variant="body1" color={Colors.muted}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem in, magnam corporis cupiditate pariatur inventore!
          </Typography>
          <Paper
            elevation={0}
            sx={{
              mt: 2,
              width: "90%",
              padding: 2,
            }}
          >
            {cartContent}
          </Paper>
          <Button sx={{ mt: 4 }} variant="contained">
            Proceed to payment
          </Button>
        </Box>
      ) : (
        <Box
          sx={{ p: 4 }}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          flexDirection={"column"}
        >
          <Typography variant={matches ? "h5" : "h3"} color={Colors.black}>
            Your Cart is Empty
          </Typography>
        </Box>
      )}
      <Button onClick={() => setShowCart(false)}>Close</Button>
    </Drawer>
  );
}
