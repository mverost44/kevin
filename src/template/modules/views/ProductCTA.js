import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Snackbar from "../components/Snackbar";
import Button from "../components/Button";
import TextField from "../components/TextField";

function ProductCTA() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      className="anchor"
      id="shuffle"
      component="section"
      sx={{ mt: 10, display: "flex" }}
    >
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "#353942",
              py: 8,
              px: 3,
            }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ maxWidth: 400 }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{ color: "#fff", opacity: 0.98 }}
                gutterBottom
              >
                Let's chat
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                Enter your email to start an inquiry
              </Typography>
              <TextField
                noBorder
                placeholder="Your email"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",
                  mt: 1,
                  backgroundColor: "#5865F2",
                  color: "#fff",
                  letterSpacing: "0.15em",
                  fontSize: "16px",
                }}
              >
                GET QUOTE
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: "100%",
              background: "url(/assets/productCTAImageDots.png)",
            }}
          />
          <Box
            component="img"
            src="/assets/hero1.jpg"
            alt="call to action"
            sx={{
              position: "absolute",
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: "100%",
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}

export default ProductCTA;