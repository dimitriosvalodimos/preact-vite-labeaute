import "./App.module.css";
import {
  RiContactsLine,
  RiGroupLine,
  RiShoppingBag3Line,
  RiStoreLine,
} from "react-icons/ri";
import { Navbar } from "./components/Navbar";
import { IconContext } from "react-icons";
import {
  desktopMediaQuery,
  useMediaQuery,
  useNavLinkManagerStore,
} from "./utils";
import { lazy, Suspense, useEffect } from "react";

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
  const {
    setSectionIds,
    setLinkToIndex,
    setSectionElements,
    setNavLinkElements,
  } = useNavLinkManagerStore((state) => ({
    setSectionIds: state.setSectionIds,
    setLinkToIndex: state.setLinkToIndex,
    setSectionElements: state.setSectionElements,
    setNavLinkElements: state.setNavLinkElements,
  }));

  useEffect(() => {
    setSectionIds(navbarItems.map((i) => i.link));
    setLinkToIndex();
    setSectionElements();
    setNavLinkElements();
  }, []);
  const isDesktop = useMediaQuery(desktopMediaQuery);

  const Hero = lazy(() => import("./components/Hero/index"));

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
