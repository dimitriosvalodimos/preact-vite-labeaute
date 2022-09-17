import { lazy, Suspense, useEffect } from "react";
import debounce from "just-debounce-it";
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
  const handleGlobalScroll = debounce(() => {}, 500);

  const isDesktop = useMediaQuery(desktopMediaQuery);
  const Hero = lazy(() => import("./components/Hero"));

  useEffect(() => {
    window.addEventListener("scroll", handleGlobalScroll);
    return () => window.removeEventListener("scroll", handleGlobalScroll);
  }, []);

  return (
    <IconContext.Provider value={{ size: isDesktop ? "16" : "24" }}>
      <div className="App">
        <Navbar items={navbarItems} />
        <Suspense>
          <Hero />
          <div style={{ height: "200vh" }}></div>
          <div
            id="produkte"
            style={{
              height: "100vh",
              backgroundColor: "red",
            }}
          >
            <h1>Hi</h1>
          </div>
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
        </Suspense>
      </div>
    </IconContext.Provider>
  );
}
