import {
  RiContactsLine,
  RiGroupLine,
  RiShoppingBag3Line,
  RiStoreLine,
} from "react-icons/ri";
import { IconContext } from "react-icons";
import { Navbar } from "./components/Navbar";
import { desktopMediaQuery, useMediaQuery } from "./utils";
import "./App.module.css";
import Hero from "./components/Hero";
import { Products } from "./components/Products";

const navbarItems = [
  { icon: <RiStoreLine />, link: "/", text: "Home" },
  {
    icon: <RiShoppingBag3Line />,
    link: "#produkte",
    text: "Produkte",
  },
  {
    icon: <RiGroupLine />,
    link: "#partner",
    text: "Partner",
  },
  {
    icon: <RiContactsLine />,
    link: "#kontakt",
    text: "Kontakt",
  },
];

export default function App() {
  const isDesktop = useMediaQuery(desktopMediaQuery);

  return (
    <IconContext.Provider value={{ size: isDesktop ? "16" : "24" }}>
      <div className="App">
        <Navbar items={navbarItems} />
        <Hero />
        <div style={{ height: "200vh" }}></div>
        <Products />
        <div style={{ height: "200vh" }}></div>
        <div
          id="partner"
          style={{ height: "100vh", backgroundColor: "blue" }}
        ></div>
        <div style={{ height: "200vh" }}></div>
        <div
          id="kontakt"
          style={{ height: "100vh", backgroundColor: "green" }}
        ></div>
      </div>
    </IconContext.Provider>
  );
}
