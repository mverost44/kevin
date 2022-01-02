import * as React from "react";
import Collection from "./modules/views/Collection";
import ProductSmokingHero from "./modules/views/ProductSmokingHero";
import AppFooter from "./modules/views/AppFooter";
import ProductHero from "./modules/views/ProductHero";
import RoadMap from "./modules/views/RoadMap";
import Distribution from "./modules/views/Distribution";
import About from "./modules/views/About";
import ProductCTA from "./modules/views/ProductCTA";
import Nav from "./modules/views/Nav";
import withRoot from "./modules/withRoot";

function Index() {
  return (
    <>
      <Nav />
      <ProductHero />
      <RoadMap />
      <Distribution />
      <Collection />
      <About />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </>
  );
}

export default withRoot(Index);
