import "./App.module.css";
import {
  RiContactsLine,
  RiGroupLine,
  RiShoppingBag3Line,
  RiStoreLine,
} from "react-icons/ri";
import { Navbar } from "./components/Navbar";
import { IconContext } from "react-icons";
import { desktopMediaQuery, useMediaQuery } from "./utils";
import { Hero } from "./components/Hero";

const navbarItems = [
  { icon: <RiStoreLine />, link: "", text: "Home" },
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
      </div>
    </IconContext.Provider>
  );
}
