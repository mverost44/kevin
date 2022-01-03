import * as React from "react";
import Button from "../components/Button";
import Typography from "../components/Typography";
import ProductHeroLayout from "./ProductHeroLayout";

const backgroundImage = "/assets/hero3.jpg";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#0057D0", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography
        color="inherit"
        align="center"
        variant="h2"
        marked="center"
        sx={{ opacity: "90%" }}
      >
        KEVINS CUSTOM AQUARIUMS
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="body1"
        sx={{ mb: 2, mt: { sx: 4, sm: 10 }, fontSize: "18px" }}
      >
        Find out what we can do for you
      </Typography>
      <Button
        variant="contained"
        size="large"
        component="a"
        href="/#quote"
        sx={{ minWidth: 200, backgroundColor: "#454CC2" }}
      >
        FREE QUOTE
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}
