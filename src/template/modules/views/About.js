import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const item = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const sxName = {
  mt: 0,
  color: "#fff",
  opacity: 0.86,
  letterSpacing: 1.5,
  fontSize: 16,
};

const image = {
  height: 125,
  mb: 3,
  mt: 1,
};

const row = {
  display: "flex",
  flexDirection: "row",
  alignItems: "start",
  justifyContent: "center",
  my: 3,
};

export default function About() {
  return (
    <Box
      component="section"
      sx={{
        display: "flex",
        backgroundImage: `url(${"/assets/hero1.jpg"})`,
        backgroundSize: "cover",
        // bgcolor: "secondary.light",
        overflow: "hidden",
      }}
      className="anchor"
      id="about"
    >
      <Box
        sx={{
          width: 1,
          height: 1,
          bgcolor: "rgba(0, 0, 0, 0.6)",
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
          <Box
            component="img"
            src="/assets/productCurvyLines.png"
            alt="curvy lines"
            sx={{
              pointerEvents: "none",
              position: "absolute",
              width: 1,
              height: 1,
            }}
          />
          <Typography
            variant="h4"
            marked="center"
            component="h2"
            sx={{ mt: 8, mb: 1, color: "#fff", opacity: 0.9 }}
          >
            About Us
          </Typography>
          <div>
            <Grid container spacing={6} sx={row}>
              {/* Fikri */}
              <Grid item xs={12} md={3}>
                <Box sx={item}>
                  <Box
                    component="img"
                    src="/assets/images/headshots/Fikri.png"
                    alt="suitcase"
                    sx={image}
                  />
                  <Box variant="h5" component="h2" sx={sxName}>
                    FIKRI
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="body2" align="left">
                  Hi everyone, my name is Fikri and I've worked 6+ years at a
                  cancer treatment company called Thermo Fisher Scientific. I
                  admire every project on Algorand blockchain especially the
                  ones with NFTs. I hold a variety of NFTs and wanted to create
                  something unique (with some help of course). I want to help
                  the community in any way I can to build a brighter future. I
                  believe in the power of Algorand Blockchain (Future of
                  Finance) and I couldn't find a better way to get involved.
                  <br />
                  <br />
                  I was inspired by leopards because of their unique fighting
                  skills and flexibility for survival. The leopard is a symbol
                  of our relentless fight against cancer as well as a unique
                  token in the NFT community.
                  <br />
                  <br />I am committed to donating 10% of all proceeds to
                  Roswell Park Cancer Center as part of our mission on
                  Algopard.com.
                </Typography>
              </Grid>
            </Grid>

            {/* Danny */}
            <Grid container spacing={6} sx={row}>
              <Grid item xs={12} md={3}>
                <Box sx={item}>
                  <Box
                    component="img"
                    src="/assets/images/headshots/danny.png"
                    alt="suitcase"
                    sx={image}
                  />
                  <Box variant="h5" component="h2" sx={sxName}>
                    DANNY
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="body2" align="left">
                  Hello everyone, I'm a digital artist specializing in cartoon
                  style. I've worked on many kinds of comic books, childrens
                  book illustrations, storybook illustrations, storyboards,
                  mobile stickers, e-sport logos, cute mascot logos, t-shirt
                  designs etc.
                  <br />
                  <br />
                  Algopard is a unique hand drawn project for Algopard.com.
                  Along with Fikri, I am focusing on the design side of the
                  project for future logo designs and accessories.
                </Typography>
              </Grid>
            </Grid>

            {/* Max */}
            <Grid container spacing={6} sx={row}>
              <Grid item xs={12} md={3}>
                <Box sx={item}>
                  <Box
                    component="img"
                    src="/assets/images/headshots/Max.png"
                    alt="suitcase"
                    sx={image}
                  />
                  <Box variant="h5" component="h2" sx={sxName}>
                    MAX
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <Typography variant="body2" align="left">
                  Hello everyone, my name is Max and I focus on the website
                  development side for Algopard project. I have designed
                  websites for companies for years. Fikri is not only a coworker
                  but a great friend to take on a project like this. I would be
                  happy to hear any suggestions or improvement ideas from the
                  community.
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Container>
      </Box>
    </Box>
  );
}
