import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const sxType = {
  color: "#fff",
  textAlign: "center",
};

const distPlan = [
  {
    num: "69",
    body: "Community give-aways and rewards",
  },
  {
    num: "55",
    body: "Twitter & Discord give-aways",
  },
  {
    num: "10",
    body: "Rewards for technical support",
  },
  {
    num: "4",
    body: "Yieldly NFT prize games",
  },
];

const weeks = [
  {
    num: "ONE",
    algo: "10",
  },
  {
    num: "TWO",
    algo: "10",
  },
  {
    num: "THREE",
    algo: "10",
  },
  {
    num: "FOUR",
    algo: "15",
  },
  {
    num: "FIVE",
    algo: "15",
  },
  {
    num: "SIX",
    algo: "15",
  },
  {
    num: "SEVEN",
    algo: "20",
  },
  {
    num: "EIGHT",
    algo: "20",
  },
  {
    num: "NINE",
    algo: "25",
  },
];

export default function Distribution() {
  return (
    <Box
      id="distribution"
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "#282828" }}
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
          sx={{ my: 8, color: "#fff" }}
        >
          Distribution
        </Typography>

        {/* DISTRO BLURBS */}
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
          {distPlan.map((plan) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                width: 1 / 5,
                minWidth: "230px",
                flexDirection: "column",
                mb: 6,
                mx: 2,
              }}
            >
              <Typography
                sx={{
                  ...sxType,
                  fontSize: "28px",
                  fontWeight: 700,
                }}
              >
                {plan.num}
              </Typography>
              <Typography variant="body1" sx={{ ...sxType, fontSize: "18px" }}>
                {plan.body}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* SHUFFLE */}
        <Typography
          variant="h4"
          sx={{
            ...sxType,
            fontSize: "26px",
            fontWeight: 700,
            mb: "6px",
          }}
        >
          9 WEEK SHUFFLE
        </Typography>
        <Typography
          variant="h4"
          sx={{
            ...sxType,
            fontSize: "16px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            opacity: 0.9,
          }}
        >
          969 GENERATED ALGOPARDS
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "90%",
          }}
        >
          {weeks.map((week) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                minWidth: "188px",
                minHeight: "188px",
                maxWidth: "245px",
                maxHeight: "257px",
                width: "20vw",
                height: "21vw",
                my: 2,
                mx: 2,
                backgroundColor: "#3B3B3B",
              }}
            >
              <Typography
                sx={{
                  ...sxType,
                  fontSize: "14px",
                  fontWeight: 700,
                  opacity: "85%",
                  letterSpacing: "0.14em",
                }}
              >
                WEEK {week.num}
              </Typography>
              {/* ALGO COST */}
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "nowrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src="/assets/algo.png"
                  alt="algo price sign"
                  sx={{ height: "26px", width: "26px", mr: 1 }}
                />
                <Typography
                  sx={{ ...sxType, fontSize: "22px", fontWeight: 700 }}
                >
                  {week.algo}
                </Typography>
              </Box>
              <Typography
                sx={{
                  ...sxType,
                  fontSize: "14px",
                  fontWeight: 700,
                  opacity: "85%",
                  letterSpacing: "0.1em",
                }}
              >
                100 NFT's
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
