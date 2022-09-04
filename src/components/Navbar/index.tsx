import { NavItem, TNavItem } from "./NavItem";
import s from "./Navbar.module.css";
import { Logo } from "../Logo";

export type TNavbar = {
  items: TNavItem[];
};

export const Navbar = ({ items }: TNavbar) => {
  return (
    <nav className={s.navbar}>
      <Logo />
      <ul className={s.navItems}>
        {items.map((item) => (
          <NavItem
            key={`${item.text}-${item.link}`}
            text={item.text}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </ul>
    </nav>
  );
};
