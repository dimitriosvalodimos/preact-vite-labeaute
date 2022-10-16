import { desktopMediaQuery, handleScroll, useMediaQuery } from "../../utils";
import s from "./NavbarItem.module.css";

export type TNavItem = {
  icon: JSX.Element;
  text: string;
  link: string;
  index?: number;
};

export const NavItem = ({ text, link, icon, index }: TNavItem) => {
  const isDesktop = useMediaQuery(desktopMediaQuery);

  return (
    <a
      key={index}
      className={s.styledLink}
      id={`link-${link}`}
      onClick={() => handleScroll(link)}
    >
      <div className={s.iconButton}>
        {icon}
        {isDesktop && <p className={s.text}>{text}</p>}
      </div>
    </a>
  );
};
