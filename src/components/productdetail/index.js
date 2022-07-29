import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Colors } from "../../styles/theme";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import { Product, ProductImage } from "../../styles/products";
import IncreDecre from "../ui";

function SlideTransition(props) {
  return <Slide direction="down" {...props} />;
}

const ProductDetailWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: theme.spacing(4),
}));

const ProductDetailInfoWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: 500,
  lineHeight: 1.5,
}));

export default function ProductDetail({ open, onClose, product }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      TransitionComponent={SlideTransition}
      variant="permanent"
      fullScreen
      open={open}
    >
      <DialogTitle
        sx={{
          background: Colors.secondary,
        }}
      >
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems="center"
        >
          Product title
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <ProductDetailWrapper flexDirection={matches ? "column" : "row"}>
          <Product sx={{ mr: 4 }}>
            <ProductImage src={product.image} />
          </Product>
          <ProductDetailInfoWrapper>
            <Typography variant="subtitle1">Sub 123</Typography>
            <Typography variant="subtitle1">Avaibality: 2 in stock</Typography>
            <Typography variant="h4" sx={{ lineHeight: 2 }}>
              {product.name}
            </Typography>
            <Typography variant="body1">
              {product.description}
              {product.description}
              {product.description}
            </Typography>
            <Box
              sx={{ mt: 4 }}
              display="flex"
              justifyContent={"space-between"}
              alignItem="center"
            >
              <IncreDecre />
              <Button variant="contained">Add to cart</Button>
            </Box>
          </ProductDetailInfoWrapper>
        </ProductDetailWrapper>
      </DialogContent>
    </Dialog>
  );
}
