import "./App.module.css";
import {
  RiContactsLine,
  RiGroupLine,
  RiShoppingBag3Line,
  RiStoreLine,
} from "react-icons/ri";
import { Navbar } from "./components/Navbar";

const navbarItems = [
  { icon: <RiStoreLine />, link: "/", text: "Home" },
  { icon: <RiShoppingBag3Line />, link: "#produkte", text: "Produkte" },
  { icon: <RiGroupLine />, link: "#partner", text: "Partner" },
  { icon: <RiContactsLine />, link: "#kontakt", text: "Kontakt" },
];

function App() {
  return (
    <div className="App">
      <Navbar items={navbarItems} />
    </div>
  );
}

export default App;
