import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

export default function Nav() {
  const [mobileNav, setMobileNav] = useState(false);
  const [isMenuActive, toggleMenu] = useState(false);

  const checkWidth = () => {
    setMobileNav(window.innerWidth <= 850);
  };

  useEffect(() => {
    setMobileNav(window.innerWidth <= 850);
    window.addEventListener("resize", checkWidth);
  }, []);

  return (
    <div>
      <AppBar position="fixed" sx={{ backgroundColor: "#020F23" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
          }}
        >
          <Box
            component="img"
            src="/assets/kcalogo.svg"
            alt="KCA logo"
            sx={{ height: 55, width: 55, mr: 3 }}
          />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="#"
            sx={{ fontSize: 24 }}
          >
            {"KCA"}
          </Link>
          <Box sx={{ flex: 1 }} />

          {mobileNav && (
            <Box
              component="img"
              src="/assets/hamburger-menu.svg"
              onClick={() => toggleMenu(!isMenuActive)}
              alt="menu"
              sx={{
                width: "42px",
                height: "42px",
              }}
            />
          )}

          <Box
            sx={
              mobileNav
                ? isMenuActive
                  ? {
                      position: "absolute",
                      bgcolor: "#011106",
                      display: "flex",
                      flexDirection: "column",
                      height: "200px",
                      justifyContent: "space-around",
                      top: 70,
                      left: 0,
                      right: 0,
                    }
                  : { display: "none" }
                : { flex: 1, display: "flex", justifyContent: "flex-end" }
            }
          >
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/#roadmap"
              onClick={() => toggleMenu(false)}
              sx={rightLink}
            >
              {"Roadmap"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/#distribution"
              onClick={() => toggleMenu(false)}
              sx={{ ...rightLink }}
            >
              {"Distribution"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/#collection"
              onClick={() => toggleMenu(false)}
              sx={{ ...rightLink }}
            >
              {"Collection"}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/#about"
              onClick={() => toggleMenu(false)}
              sx={{ ...rightLink }}
            >
              {"About"}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}
