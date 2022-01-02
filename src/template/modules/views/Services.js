import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const sxType = {
  display: "flex",
  flexWrap: "wrap",
  width: 1 / 3,
  minWidth: "230px",
  flexDirection: "column",
  mb: 6,
  mx: 2,
  color: "#fff",
};

export default function Services() {
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
      sx={{ display: "flex", overflow: "hidden", bgcolor: "#282828" }}
    >
      <Container
        className="anchor"
        id="services"
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
          Services
        </Typography>

        <Box
          sx={{
            mt: 2,
            mb: 6,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box sx={sxType}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                opacity: "0.9",
                mb: 1,
              }}
            >
              DESIGN
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "18px" }}>
              We'll work with you to design the perfect tank for your unique
              needs
            </Typography>
          </Box>

          <Box sx={{ width: 1 / 8, minWidth: "100px" }} />

          <Box sx={{ ...sxType, textAlign: "right" }}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                letterSpacing: "0.05em",
                opacity: "0.9",
                mb: 1,
              }}
            >
              MAINTENANCE
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "18px" }}>
              You'll get a robust tank care guide. Or — we'll take care of it
              for you
            </Typography>
          </Box>
        </Box>

        <Box sx={{ ...sxType, textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.05em",
              opacity: "0.9",
              mb: 1,
            }}
          >
            INSTALLATION
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "18px" }}>
            Our installations are fast, safe, and clean
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
