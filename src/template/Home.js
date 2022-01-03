import * as React from "react";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import Services from "./modules/views/Services";
import Products from "./modules/views/Products";
import About from "./modules/views/About";
import ProductCTA from "./modules/views/ProductCTA";
import Nav from "./modules/views/Nav";
import withRoot from "./modules/withRoot";

function Index() {
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

export default withRoot(Index);
