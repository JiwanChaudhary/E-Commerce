import { Grid, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { products } from "../../data";

export default function Products() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderProducts = products.map((product) => (
    <Grid
      key={product.id}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    ></Grid>
  ));

  return (
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
      exercitationem veniam qui nihil libero.
    </h1>
  );
}
