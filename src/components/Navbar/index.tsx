import { NavItem, TNavItem } from "../NavbarItem";
import s from "./Navbar.module.css";
import { Logo } from "../Logo";
import { AnimatePresence, motion } from "framer-motion";

export type TNavbar = {
  items: TNavItem[];
};

export const Navbar = ({ items }: TNavbar) => {
  const container = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.7, staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const child = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      <motion.nav
        variants={container}
        initial="initial"
        animate="animate"
        className={s.navbar}
      >
        <Logo />
        <motion.ul variants={container} className={s.navItems}>
          {items.map((item) => (
            <NavItem
              animation={child}
              key={`${item.text}-${item.link}`}
              text={item.text}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </motion.ul>
      </motion.nav>
    </AnimatePresence>
  );
};
