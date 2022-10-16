import { IconContext } from "react-icons";
import Hero from "./components/Hero";
import { navbarItems } from "./text";
import { Navbar } from "./components/Navbar";
import { desktopMediaQuery, useMediaQuery } from "./utils";
import Products from "./components/Products";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const isDesktop = useMediaQuery(desktopMediaQuery);

  return (
    <IconContext.Provider value={{ size: isDesktop ? "16" : "24" }}>
      <div className="App">
        <Navbar items={navbarItems} />
        <Hero />
        <Products />
        <Partners />
        <Contact />
        <Footer />
      </div>
    </IconContext.Provider>
  );
}
