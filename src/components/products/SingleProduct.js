import { Stack } from "@mui/material";
import {
  Product,
  ProductActionsWrapper,
  ProductImage,
  ProductFavButton,
  ProductActionButton,
  ProductAddToCart,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import useDialogModal from "../../hooks/unseDialogModal";
import ProductDetail from "../productdetail";

export default function SingleProduct({ product, matches }) {
  const [
    ProductDetailDialog,
    showProductDetailDialog,
  ] = useDialogModal(ProductDetail);

  return (
    <>
      <Product onClick={() => showProductDetailDialog()}>
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction="row">
            <ProductFavButton isFav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton onClick={() => showProductDetailDialog()}>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>

      <ProductAddToCart variant="contained">Add to Cart</ProductAddToCart>
      <ProductDetailDialog product={product} />
    </>
  );
}
