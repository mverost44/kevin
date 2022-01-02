import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Button from "../components/Button";

function ProductCTA() {
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
            <Box component="div" sx={{ maxWidth: 400 }}>
              <Typography
                variant="h2"
                component="h2"
                sx={{ color: "#fff", opacity: 0.98 }}
                gutterBottom
              >
                Join the Shuffle
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                Join the shuffle on Rand Gallery!
              </Typography>

              <Button
                type="submit"
                variant="contained"
                target="_blank"
                href="https://www.randgallery.com/algo-collection/?address=PARDRX3S3RAZ2J5SOYIR3OPJWGT62GJ2TINBBLWICKMKOPSFKFVPUMTUS4"
                sx={{
                  width: "100%",
                  mt: 4,
                  backgroundColor: "#5865F2",
                  color: "#fff",
                  letterSpacing: "0.15em",
                  fontSize: "16px",
                }}
              >
                Join Shuffle
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
            src="/assets/images/headshots/algopard_discord_avatar.png"
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
    </Container>
  );
}

export default ProductCTA;
