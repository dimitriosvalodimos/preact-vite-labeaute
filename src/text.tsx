import {
    RiContactsLine,
    RiGroupLine,
    RiShoppingBag3Line,
    RiStoreLine,
} from "react-icons/ri";
import { TPrice } from "./components/ui/Price";

export type TProductInfo = {
    title: string;
    description: string;
    priceList: TPrice[];
};

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

export const products: TProductInfo[] = [
    {
        title: "Sisley - Phyto Aromatique",
        description:
            "Luxus Pur - Regeneration in höchster Qualität, in Verbindung mit einer Edelstein-Massage entsteht ein außergewöhnliches Erlebnis",
        priceList: [
            { time: 90, price: 169 },
            { time: 60, price: 129 },
        ],
    },
    {
        title: "Therapie Balance",
        description:
            "Japanische Energiemassage, berührt Ihre Seele - eine entspannende Gesichtsbehandlung",
        priceList: [{ time: 70, price: 119 }],
    },
    {
        title: "Comfort-Anti Aging",
        description:
            "Wirkstoffbehandlung, die nachhaltig den Regenerations-Prozess der Haut unterstützt",
        priceList: [
            { time: 90, price: 149 },
            { time: 60, price: 109 },
        ],
    },
    {
        title: "Feuchtigkeit- Hyaluron",
        description:
            "Intensive Durchfeuchtung Ihrer Haut und Verbesserung der Ausstrahlung",
        priceList: [{ time: 60, price: 99 }],
    },
    {
        title: "Anti Stress",
        description: "Beruhigung der gestressten und sensiblen Haut",
        priceList: [{ time: 60, price: 99 }],
    },
    {
        title: "Schnell & Schön",
        description: "Klare, reine Hautstruktur",
        priceList: [{ time: 45, price: 79 }],
    },
    {
        title: "Jugend",
        description: "Tiefenreinigende Behandlung bis zum 18. Lebensjahr",
        priceList: [{ time: 60, price: 59 }],
    },
    {
        title: "Rücken",
        description: "Reinigung",
        priceList: [{ time: 20, price: 49 }],
    },
    {
        title: "Herren",
        description:
            "Auftanken, Abschalten und mit neuer Energie und gepflegtem Aussehen starten",
        priceList: [{ time: 50, price: 79 }],
    },
    {
        title: "Kleiner Augenblick",
        description: "Wimpern, Augenbrauen färben, zupfen und pflegen",
        priceList: [{ time: 0, price: 49 }],
    },
    {
        title: "Wimpern-Lifting",
        description:
            "geschwungene Wimpern für einen wunderschönen Augenaufschlag, färben und laminieren",
        priceList: [{ time: 0, price: 89 }],
    },
    {
        title: "Maniküre",
        description: "Perfekt gepflegte Hände",
        priceList: [{ time: 45, price: 55 }],
    },
    {
        title: "Pediküre",
        description: "Perfekt gepflegte Füße",
        priceList: [{ time: 45, price: 59 }],
    },
    {
        title: "Fußmassage",
        description: "",
        priceList: [{ time: 20, price: 49 }],
    },
];
export const productExtras = [
    { text: "Wimpern färben", price: 18 },
    { text: "Augenbrauen färben", price: 12 },
    { text: "Augenbrauen zupfen", price: 12 },
    { text: "Enthaarung Oberlippe/Kinn", price: 15, starting: true },
    { text: "Ampulle", price: 12 },
    { text: "Bio Cellulose-Gesichtsmaske", price: 22 },
    { text: "Augenmaske", price: 12 },
    { text: "Lackieren", price: 15 },
    { text: "Striplack", price: 20 },
];
export const massages: TProductInfo[] = [
    {
        title: "Rückenmassage",
        description: "",
        priceList: [{ time: 20, price: 79 }],
    },
    {
        title: "LA BEAUTÉ Luxusmassage",
        description: "Ganzkörpermassage und Bio Cellulose-Maske",
        priceList: [{ time: 50, price: 139 }],
    },
];
export const specialTreatment: TProductInfo[] = [
    {
        title: "Micro Needling",
        description:
            "Eine Revolution unter den Anti-Aging-Methoden, erzielt effektive und sofort sichtbare Ergebnisse. Erfolgreich als Kur auch bei Pigmentflecken und Couperose. Innovative Behandlung ohne Operation.",
        priceList: [
            { time: 70, price: 199 },
            {
                time: 0,
                price: 499,
                text: "Kur mit 3 Behandlungen innerhalb 4 Wochen",
            },
        ],
    },
    {
        title: "Zertifizierter Ultraschall",
        description:
            "Hochfrequenter Ultraschall wirkt in der Tiefe der Haut effektiv gegen Falten, Tränensäcke, Couperose, Schwellungen und Elastizitätsverlust.",
        priceList: [
            { time: 70, price: 149, text: "Inklusiv Bio Cellulose-Maske" },
            { time: 70, price: 189, text: "Inklusiv Hals & Dekolleté" },
        ],
    },
    {
        title: "Mikrodermabrasion",
        description:
            "Tiefenbehandlung mit Langzeitwirkung sowie umfangreicher und gezielter Hautverbesserung auf 3 Ebenen.",
        priceList: [
            { time: 70, price: 149, text: "Inklusiv Bio Cellulose-Maske" },
            { time: 70, price: 189, text: "inklusiv Hals & Dekolleté" },
        ],
    },
    {
        title: "Mikrodermabrasion und Ultraschall",
        description: "",
        priceList: [{ time: 90, price: 209 }],
    },
    {
        title: "Pro Lift Mandelic Glow",
        description:
            "Strahlende Haut durch hochprozentige Mandelsäure. Faszinierende Glätte und ebenmäßige, gefestigte Haut",
        priceList: [{ time: 90, price: 139 }],
    },
    {
        title: "Couperose / Rosazea Behandlung",
        description:
            "Kosmetisches Gefäßtraining für einen tief entspannten Teint. Stabilisierung und Entstauung der Gefäße bei Hautreizungen und Schwellungen.",
        priceList: [{ time: 70, price: 129 }],
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
        img: new URL(
            "./assets/images/companies/clarins-small.jpg",
            import.meta.url,
        ).href,
    },
    {
        img: new URL(
            "./assets/images/companies/sisley-paris-small.jpg",
            import.meta.url,
        ).href,
    },
    {
        img: new URL(
            "./assets/images/companies/hildegard-braukmann-small.jpg",
            import.meta.url,
        ).href,
    },
    {
        img: new URL(
            "./assets/images/companies/m2beaute-small.jpg",
            import.meta.url,
        ).href,
    },
    {
        img: new URL(
            "./assets/images/companies/mavala-small.jpg",
            import.meta.url,
        ).href,
    },
    {
        img: new URL(
            "./assets/images/companies/hyapur-small.jpg",
            import.meta.url,
        ).href,
    },
    {
        img: new URL(
            "./assets/images/companies/acqua-di-hamburg-small.jpg",
            import.meta.url,
        ).href,
    },
];
export const contactInfo = [];
