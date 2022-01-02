import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const sxType = {
  color: "#fff",
  textAlign: "center",
};

export default function Products() {
  return (
    <Box
      id="products"
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "#fff" }}
    >
      <Container
        className="anchor"
        sx={{
          mt: 8,
          mb: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          variant="h4"
          marked="center"
          component="h2"
          sx={{ my: 8, color: "#000" }}
        >
          Products
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {/* SALT WATER TANK */}
          <Box sx={{ display: "flex", flexDirection: "row", width: 1 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E7FFFF",
                width: "50%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                }}
              >
                SALT WATER TANK
              </Typography>
              <Box
                component="img"
                src="/assets/svg/bubbles.svg"
                sx={{
                  position: "absolute",
                  top: "10%",
                  right: "20px",
                  width: "25%",
                }}
              />
            </Box>
            <Box
              component="img"
              src="/assets/images/salt_water_tank.jpg"
              sx={{ width: "50%" }}
            />
          </Box>
          {/* FRESH WATER */}
          <Box sx={{ display: "flex", flexDirection: "row", width: 1 }}>
            <Box
              component="img"
              src="/assets/images/fresh_water_tank.jpg"
              sx={{ width: "50%" }}
            />
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E7FFFF",
                width: "50%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                }}
              >
                FRESH WATER TANK
              </Typography>
              <Box
                component="img"
                src="/assets/svg/fish.svg"
                sx={{
                  position: "absolute",
                  bottom: "-5%",
                  right: "0",
                  width: "20%",
                }}
              />
            </Box>
          </Box>

          {/* REEF */}
          <Box sx={{ display: "flex", flexDirection: "row", width: 1 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E7FFFF",
                width: "50%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                }}
              >
                REEF TANK
              </Typography>
              <Box
                component="img"
                src="/assets/svg/fish_right.svg"
                sx={{
                  position: "absolute",
                  bottom: "-5%",
                  left: "0",
                  width: "15%",
                }}
              />
            </Box>
            <Box
              component="img"
              src="/assets/images/reef_tank.jpg"
              sx={{ width: "50%" }}
            />
          </Box>

          {/* OUTDOOR POND */}
          <Box sx={{ display: "flex", flexDirection: "row", width: 1 }}>
            <Box
              component="img"
              src="/assets/images/pond.jpg"
              sx={{ width: "50%" }}
            />
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#E7FFFF",
                width: "50%",
              }}
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 600,
                  letterSpacing: "0.01em",
                }}
              >
                OUTDOOR PONDS
              </Typography>
              <Box
                component="img"
                src="/assets/svg/bubbles_right.svg"
                sx={{
                  position: "absolute",
                  bottom: "5%",
                  right: "0",
                  width: "20%",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
