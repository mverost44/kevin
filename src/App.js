import * as React from "react";
import AppFooter from "./views/AppFooter";
import ProductHero from "./views/ProductHero";
import Services from "./views/Services";
import Products from "./views/Products";
import About from "./views/About";
import ProductCTA from "./views/ProductCTA";
import Nav from "./views/Nav";
import withRoot from "./withRoot";

function App() {
  return (
    <>
      <Nav />
      <ProductHero />
      <Services />
      <Products />
      <About />
      <ProductCTA />
      <AppFooter />
    </>
  );
}

export default withRoot(App);
