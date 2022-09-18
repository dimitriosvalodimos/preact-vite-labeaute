import { IconContext } from "react-icons";
import { Navbar } from "./components/Navbar";
import { desktopMediaQuery, useMediaQuery } from "./utils";
import "./App.module.css";
import Hero from "./components/Hero";
import { Products } from "./components/Products";
import { navbarItems } from "./text";

export default function App() {
  const isDesktop = useMediaQuery(desktopMediaQuery);

  return (
    <IconContext.Provider value={{ size: isDesktop ? "16" : "24" }}>
      <div className="App">
        <Navbar items={navbarItems} />
        <Hero />
        <Products />
        <div
          id="partner"
          style={{ height: "100vh", backgroundColor: "blue" }}
        ></div>
        <div
          id="kontakt"
          style={{ height: "100vh", backgroundColor: "green" }}
        ></div>
      </div>
    </IconContext.Provider>
  );
}
