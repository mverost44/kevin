import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

export default function RoadMap() {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      setMobile(true);
    }
  }, []);

  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.dark" }}
    >
      <Container
        className="anchor"
        id="roadmap"
        sx={{
          mt: 8,
          mb: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src="/assets/appCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Typography
          variant="h4"
          marked="center"
          component="h2"
          sx={{ my: 8, color: "#fff" }}
        >
          Roadmap
        </Typography>
        <Box
          sx={{ width: 1, height: 1, backgroundColor: "#fff" }}
          className="prezi-wrapper"
        >
          <iframe
            src="https://prezi.com/p/4xmwt8x1wwtj/embed/"
            id="iframe_container"
            frameborder="0"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            allowfullscreen=""
            allow="autoplay; fullscreen"
            title="Algopard Roadmap on Prezi"
          ></iframe>
          {!isMobile && (
            <Box
              component="img"
              src="/assets/logo.webp"
              alt="algopard logo"
              sx={{
                width: "84px",
                position: "absolute",
                bottom: "60px",
                left: "40px",
                zIndex: 2,
              }}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
}
