import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-evenly",
                padding: "2rem",
                backgroundColor: "var(--lb-color)",
            }}
        >
            <Link
                to="/impressum"
                style={{ color: "white", textDecoration: "none" }}
            >
                Impressum
            </Link>
            <Link
                to="/datenschutz"
                style={{ color: "white", textDecoration: "none" }}
            >
                Datenschutz
            </Link>
        </div>
    );
}
