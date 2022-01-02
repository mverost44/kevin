import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 12,
        mb: 9,
      }}
    >
      <Button
        href="https://discord.gg/pG4sMUgNTt"
        target="_blank"
        sx={{
          border: "4px solid currentColor",
          borderRadius: 0,
          height: "auto",
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Join our discord server
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        Free NFT raffles. Fun conversation. It's cool.
      </Typography>
      <Box
        component="img"
        src="/assets/discord.svg"
        alt="buoy"
        sx={{ width: 60 }}
      />
    </Container>
  );
}

export default ProductSmokingHero;
