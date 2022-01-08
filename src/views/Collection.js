import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "../components/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#D4AD13",
  opacity: 0.08,
  transition: theme.transitions.create("opacity"),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

const layerImages = [
  {
    url: "/assets/images/layers/1.png",
    title: "Snorkeling",
    width: "50%",
  },
  {
    url: "/assets/images/layers/2.png",
    title: "Massage",
    width: "50%",
  },
  {
    url: "/assets/images/layers/3.png",
    title: "Hiking",
    width: "50%",
  },
  {
    url: "/assets/images/layers/final.png",
    title: "Tour",
    width: "50%",
  },
];

const generateImages = () => {
  const accImages = [];
  for (let i = 1; i <= 67; i++) {
    accImages.push({
      url: `/assets/images/accessories/${i}.png`,
      title: `accessory ${i}`,
      width: "20%",
    });
  }

  return accImages;
};

const accImages = generateImages();

export default function Collection() {
  return (
    <Container
      className="anchor"
      id="collection"
      component="section"
      sx={{
        mt: 8,
        mb: 4,
      }}
    >
      <Typography variant="h4" marked="center" align="center" component="h2">
        OUR COLLECTION
      </Typography>
      <Button
        align="center"
        variant="contained"
        size="large"
        component="a"
        target="_blank"
        href="https://www.nftexplorer.app/collection?creator=PARDGF6H4Z2GNRFG2DNN4TNOWNHU3EMH6OLHZXPVEDN74YNE7LHVIIFKH4"
        sx={{
          minWidth: "200px",
          maxWidth: "300px",
          height: "42px",
          backgroundColor: "#CCAD72",
          mt: 6,
        }}
      >
        View full collection
        <Box
          component="img"
          src="/assets/arrow-forward.svg"
          alt="algo price sign"
          sx={{ height: "22px", width: "26px", ml: 1 }}
        />
      </Button>
      <Typography
        variant="h5"
        marked="center"
        align="left"
        component="h3"
        sx={{ mt: 4 }}
      >
        LAYERS
      </Typography>
      <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap" }}>
        {layerImages.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
              minHeight: "150px",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
          </ImageIconButton>
        ))}
      </Box>

      <Typography
        variant="h5"
        marked="center"
        align="left"
        component="h3"
        sx={{ mt: 8 }}
      >
        ACCESSORIES
      </Typography>
      <Box sx={{ mt: 2, display: "flex", flexWrap: "wrap" }}>
        {accImages.map((image) => (
          <ImageIconButton
            key={image.title}
            target="_blank"
            href="https://www.nftexplorer.app/collection?creator=PARDGF6H4Z2GNRFG2DNN4TNOWNHU3EMH6OLHZXPVEDN74YNE7LHVIIFKH4"
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
