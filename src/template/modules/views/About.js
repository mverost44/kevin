import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

export default function About() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        overflow: "hidden",
      }}
      className="anchor"
      id="about"
    >
      <Box
        sx={{
          width: 1,
          height: 1,
          bgcolor: "rgba(0, 0, 0, 0)",
        }}
      >
        <Container
          sx={{
            mt: 10,
            mb: 10,
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            marked="center"
            component="h2"
            sx={{ mt: 8, mb: 4, color: "#000", opacity: 0.9 }}
          >
            About
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", width: 1 }}>
            <Box
              component="img"
              src="/assets/kevin.jpg"
              sx={{ width: "50%" }}
            />
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#052432",
                width: "50%",
              }}
            >
              <Typography
                variant="body1"
                align="left"
                sx={{ mx: 4, color: "#fff" }}
              >
                I'm Kevin Minton and I've been in the aquarium hobby for 15
                years now — it's my passion to create aquascapes and aquariums
                for others pleasure. I’m dedicated to the hobby and always
                learning how to get better. I enjoy recreating a slice of nature
                by mimicking the animals environment. This is what I believe is
                important to your pets health and happiness.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
