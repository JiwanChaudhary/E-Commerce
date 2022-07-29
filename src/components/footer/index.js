import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FooterTitle, SubscribeTextField } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 8 },
        pt: 12,
        pb: 12,
        fontSize: { sm: "12px", md: "14px" },
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent={matches ? "space-between" : "center"}
      >
        <Grid item sm={6} md={6} lg={4}>
          <FooterTitle variant="body1">About us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa minus
            fuga non repellat, consectetur maxime eveniet animi voluptate fugiat
            obcaecati?
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item sm={6} md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List sx={{ mt: "-20px" }}>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                About us
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item sm={6} md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List sx={{ mt: "-20px" }}>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                Wishlist
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="caption2" lineHeight={2}>
                About us
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={2}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack sx={{ mt: "-20px" }}>
            <SubscribeTextField
              color="primary"
              variant="standard"
              label="Email address"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 2, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
