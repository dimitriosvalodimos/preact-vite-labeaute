import { lazy, Suspense } from "react";
import { IconContext } from "react-icons";
import Hero from "./components/Hero";
import { navbarItems } from "./text";
import { Navbar } from "./components/Navbar";
import { desktopMediaQuery, useMediaQuery } from "./utils";

export default function App() {
  const isDesktop = useMediaQuery(desktopMediaQuery);

  const Products = lazy(() => import("./components/Products"));
  const Partners = lazy(() => import("./components/Partners"));
  const Contact = lazy(() => import("./components/Contact"));
  const Footer = lazy(() => import("./components/Footer"));

  return (
    <IconContext.Provider value={{ size: isDesktop ? "16" : "24" }}>
      <div className="App">
        <Navbar items={navbarItems} />
        <Hero />
        <Suspense>
          <Products />
          <Partners />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </IconContext.Provider>
  );
}
