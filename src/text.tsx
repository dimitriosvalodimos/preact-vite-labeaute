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

export const products = [
  {
    title: "Sisley - Phyto Aromatique",
    description:
      "Luxus Pur - Regeneration in höchster Qualität, in Verbindung mit einer Edelstein-Massage entsteht ein außergewöhnliches Erlebnis",
    priceList: [
      { time: 90, price: 159 },
      { time: 60, price: 119 },
    ],
  },
  {
    title: "Clarins - Rendezvous der Pflanzen",
    description:
      "Hochwirksame Pflegeextrakte berühren einzigartig Ihre Sinne: Jünger - vitaler - schöner",
    priceList: [{ time: 90, price: 139 }],
  },
  {
    title: "Therapie Balance",
    description:
      "Japanische Energiemassage, berührt Ihre Seele - eine entspannende Gesichtsbehandlung",
    priceList: [{ time: 70, price: 109 }],
  },
  {
    title: "Comfort-Anti Aging",
    description:
      "Wirkstoffbehandlung, die nachhaltig den Regenerations-Prozess der Haut unterstützt",
    priceList: [{ time: 60, price: 99 }],
  },
  {
    title: "Feuchtigkeit- Hyaluron",
    description:
      "Intensive Durchfeuchtung Ihrer Haut und Verbesserung der Ausstrahlung",
    priceList: [{ time: 60, price: 89 }],
  },
  {
    title: "Sensitiv / Couperose",
    description:
      "Beruhigende Entspannung in einer empfindlichen Phase Ihrer Haut",
    priceList: [{ time: 60, price: 89 }],
  },
  {
    title: "Schnell & Schön",
    description: "Klare, reine Hautstruktur",
    priceList: [{ time: 45, price: 69 }],
  },
  {
    title: "Jugend / Akne",
    description: "Bis zum 18. Lebensjahr",
    priceList: [{ time: 0, price: 49 }],
  },
  {
    title: "Männersache",
    description:
      "Auftanken, Abschalten und mit neuer Energie und gepflegtem Aussehen durchstarten",
    priceList: [{ time: 50, price: 69 }],
  },
  {
    title: "Kleiner Augenblick",
    description: "Wimpern und/oder Augenbrauen färben, zupfen, pflegen",
    priceList: [{ time: 0, price: 39 }],
  },
  {
    title: "Wimpern-Lifting",
    description:
      "geschwungene eigene Wimpern für einen atemberaubenden Augenaufschlag, färben und laminieren",
    priceList: [{ time: 0, price: 79 }],
  },
  {
    title: "Augenbrauen-Lifting",
    description: "färben, zupfen und laminieren",
    priceList: [{ time: 0, price: 59 }],
  },
  {
    title: "Maniküre",
    description: "Perfekt gepflegte Hände",
    priceList: [{ time: 45, price: 45 }],
  },
  {
    title: "Pediküre",
    description: "Perfekt gepflegte Füße",
    priceList: [{ time: 45, price: 49 }],
  },
];
export const productExtras = [
  { text: "Wimpern färben", price: 15 },
  { text: "Augenbrauen färben", price: 12 },
  { text: "Augenbrauen zupfen", price: 10, starting: true },
  { text: "Enthaarung Oberlippe/Kinn", price: 12, starting: true },
  { text: "Ampulle", price: 10 },
  { text: "Bio Cellulose-Gesichtsmaske", price: 20 },
  { text: "Augenmaske", price: 10 },
  { text: "Lackieren", price: 15 },
];
export const massages = [
  {
    title: "Ganzkörpermassage",
    description: "",
    priceList: [{ time: 50, price: 109 }],
  },
  {
    title: "Rückenmassage",
    description: "",
    priceList: [{ time: 20, price: 69 }],
  },
  {
    title: "LA BEAUTÉ Luxusmassage",
    description: "Ganzkörpermassage und Bio Cellulose-Maske",
    priceList: [{ time: 50, price: 129 }],
  },
];
export const specialTreatment = [
  {
    title: "Mikrodermabrasion - für ein perfektes Hautbild",
    description:
      "Unvergleichliche Tiefenbehandlung zur Anregung aller Hautfunktionen, umfangreiche und gezielte Hautverbesserung auf 3 Ebenen, mit Langzeitwirkung. Inklusiv Bio Cellulose-Maske",
    priceList: [{ time: 70, price: 139 }],
  },
  {
    title: "Pro Lift - Mandelic Glow",
    description:
      "Außergewöhnlich strahlende Haut durch Mandelsäure. Sichtbare Ergebnisse ohne operativen Eingriff, faszinierend sind Glätte und Ebenmäßigkeit der Haut mit feinen, gefestigten Hautpartien. Inklusiv Lyocell-Hyaluron-Maske",
    priceList: [{ time: 90, price: 129 }],
  },
];
export const specialists = [
  {
    name: "Annika Reinert",
    occupation: "Fachärztin für Plastische & Ästhetische Chirurgie",
    treatments: "Untersprizung mit Hyaluronsäurefiller und Botox.",
    link: "https://aesthetik-kaifu.de/annika-reinert/",
  },
];
export const companies = [
  {
    img: new URL("./assets/images/companies/clarins-small.jpg", import.meta.url)
      .href,
  },
  {
    img: new URL(
      "./assets/images/companies/sisley-paris-small.jpg",
      import.meta.url
    ).href,
  },
  {
    img: new URL(
      "./assets/images/companies/hildegard-braukmann-small.jpg",
      import.meta.url
    ).href,
  },
  {
    img: new URL(
      "./assets/images/companies/m2beaute-small.jpg",
      import.meta.url
    ).href,
  },
  {
    img: new URL("./assets/images/companies/mavala-small.jpg", import.meta.url)
      .href,
  },
  {
    img: new URL("./assets/images/companies/hyapur-small.jpg", import.meta.url)
      .href,
  },
  {
    img: new URL(
      "./assets/images/companies/acqua-di-hamburg-small.jpg",
      import.meta.url
    ).href,
  },
];
export const contactInfo = [];
