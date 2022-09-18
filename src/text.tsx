import {
  RiContactsLine,
  RiGroupLine,
  RiShoppingBag3Line,
  RiStoreLine,
} from "react-icons/ri";

export const navbarItems = [
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

export const products = [];
export const partners = [];
export const contactInfo = [];
