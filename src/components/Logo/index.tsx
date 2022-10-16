import { desktopMediaQuery, useMediaQuery } from "../../utils";
import s from "./Logo.module.css";

export const Logo = () => {
    const isDesktop = useMediaQuery(desktopMediaQuery);

    return (
        <>{isDesktop ? <p className={s.wrapper}>LA BEAUTÉ</p> : <p>LB</p>}</>
    );
};
