import { Badge, Divider, ListItemButton, ListItemIcon } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
} from "../../styles/appbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Colors } from "../../styles/theme";
import { useUIContext } from "../../context/ui";

export default function Actions({ matches }) {


  const { cart, setShowCart, favorite } = useUIContext();

  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;

  return (
    <Component>
      <MyList type="row">
        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <Badge badgeContent={cart && cart.length} color="secondary">
              <ShoppingCartIcon onClick={() => setShowCart(true)} />
            </Badge>
          </ListItemIcon>
        </ListItemButton>

        <Divider orientation="vertical" flexItem />

        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <Badge badgeContent={favorite && favorite.length} color="error">
              <FavoriteIcon/>
            </Badge>
          </ListItemIcon>
        </ListItemButton>

        <Divider orientation="vertical" flexItem />

        <ListItemButton
          sx={{
            justifyContent: "center",
          }}
        >
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "center",
              color: matches && Colors.secondary,
            }}
          >
            <PersonIcon />
          </ListItemIcon>
        </ListItemButton>
      </MyList>
    </Component>
  );
}
