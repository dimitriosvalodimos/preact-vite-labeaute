import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { NavItem, TNavItem } from "./NavbarItem";
import { desktopMediaQuery, useMediaQuery } from "../utils";

export type TNavbar = {
  items: TNavItem[];
};

const Nav = styled(motion.nav)<{ isDesktop: boolean }>`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: ${({ isDesktop }) =>
    isDesktop ? "flex-start" : "space-between"};
  height: 64px;
  box-shadow: var(--shadow);
  background-color: var(--bg);
`;

const NavList = styled(motion.ul)`
  height: 100%;
  display: flex;
  margin: 0 var(--x2-margin);
`;

export const Navbar = ({ items }: TNavbar) => {
  const isDektop = useMediaQuery(desktopMediaQuery);
  console.log(isDektop);

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
      <Nav
        isDesktop={isDektop}
        variants={container}
        initial="initial"
        animate="animate"
      >
        <Logo />
        <NavList variants={container}>
          {items.map((item, i) => (
            <NavItem
              index={i}
              animation={child}
              key={`${item.text}-${item.link}`}
              text={item.text}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </NavList>
      </Nav>
    </AnimatePresence>
  );
};
