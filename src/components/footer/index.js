import {
  Box,
  Button,
  Grid,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { FooterTitle, SubscribeTextField } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";

export default function Footer() {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xm: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={6} lg={4}>
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
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
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
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
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
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeTextField
              color="primary"
              variant="standard"
              label="Email address"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
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
