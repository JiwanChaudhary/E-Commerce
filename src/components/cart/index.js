import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useUIContext } from "../../context/ui";
import { Colors } from "../../styles/theme";

export default function Cart() {
  const { cart, setCart, showCart, setShowCart } = useUIContext();

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
          <Typography variant="subtitle2">{item.description}</Typography>
        </Box>
        <Typography variant="body1" justifyContent="end">
          ${item.price}
        </Typography>
      </Box>
      <Divider variant="inset" />
    </Box>
  ));

  return (
    <Drawer
      open={showCart}
      onClose={() => setShowCart(false)}
      anchor="right"
      PaperProps={{
        sx: {
          width: 500,
          background: Colors.light_gray,
          borderRadius: 0,
        },
      }}
    >
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
        {cartContent}
      </Box>
    </Drawer>
  );
}
