import { NavItem, TNavItem } from "../NavbarItem";
import { Logo } from "../Logo";
import s from "./Navbar.module.css";

export type TNavbar = {
  items: TNavItem[];
};

export const Navbar = ({ items }: TNavbar) => {
  return (
    <>
      <nav className={s.nav}>
        <Logo />
        <ul className={s.navList}>
          {items.map((item, i) => (
            <NavItem
              index={i}
              key={`${item.text}-${item.link}`}
              text={item.text}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};
