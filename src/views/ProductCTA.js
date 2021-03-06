import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography";
import Snackbar from "../components/Snackbar";
import Button from "../components/Button";
import InputField from "../components/InputField";
import emailjs from "@emailjs/browser";

function ProductCTA() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiry, setInquiry] = useState("");

  const submitForm = (name, email, phone, inquiry) => {
    emailjs.send(
      "service_5ujpcsj",
      "template_bp4k8uj",
      {
        name,
        email,
        phone,
        inquiry,
      },
      "user_z5SPuh7DFW3I632t3Svnq"
    );

    setOpen(true);
    setName("");
    setEmail("");
    setPhone("");
    setInquiry("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container
      className="anchor"
      id="quote"
      component="section"
      sx={{ my: 10, display: "flex" }}
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
            <Box
              component="form"
              noValidate
              autoComplete="off"
              sx={{ maxWidth: 400 }}
            >
              <Typography
                variant="h2"
                component="h2"
                sx={{ color: "#fff", opacity: 0.98 }}
                gutterBottom
              >
                Let's chat
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                Enter your name and contact information to get started.
              </Typography>
              <InputField
                noBorder
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Name"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 1 }}
              />
              <InputField
                noBorder
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Your email"
                variant="standard"
                sx={{ width: "100%", mt: 1, mb: 1 }}
              />
              <InputField
                noBorder
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder="Phone number"
                variant="standard"
                sx={{ width: "100%", mt: 1, mb: 1 }}
              />
              <InputField
                mulitline="true"
                noBorder
                variant="standard"
                onChange={(e) => setInquiry(e.target.value)}
                value={inquiry}
                placeholder="Enter comments or questions"
                rows={4}
                fullWidth
                sx={{ mt: 1, mb: 2 }}
              />

              <Button
                // type="submit"
                variant="contained"
                onClick={() => submitForm(name, email, phone, inquiry)}
                sx={{
                  width: "100%",
                  mt: 1,
                  backgroundColor: "#5865F2",
                  color: "#fff",
                  letterSpacing: "0.15em",
                  fontSize: "16px",
                }}
              >
                GET QUOTE
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
            src="/assets/cta-img.jpg"
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
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message="Thanks for reaching out! We will get back to you within 48 hours."
      />
    </Container>
  );
}

export default ProductCTA;
