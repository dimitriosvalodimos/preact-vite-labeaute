import { render } from "preact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Datenschutz } from "./components/Datenschutz";
import { Impressum } from "./components/Impressum";
import App from "./App";
import "./index.css";

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
    </BrowserRouter>,
    document.body,
);
