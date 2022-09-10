import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { desktopMediaQuery, handleScorll, useMediaQuery } from "../../utils";
import s from "./NavItem.module.css";

export type TNavItem = {
  icon: ReactNode;
  text: string;
  link: string;
  animation?: any;
};

export const NavItem = ({ text, link, icon, animation }: TNavItem) => {
  const isDesktop = useMediaQuery(desktopMediaQuery);
  return (
    <Link
      id={`link-${link}`}
      className={s.container}
      to={link}
      onClick={() => handleScorll(link)}
    >
      <motion.div
        variants={animation}
        className={isDesktop ? s.item : s.onlyIcon}
      >
        {icon}
        {isDesktop && <p className={s.text}>{text}</p>}
      </motion.div>
    </Link>
  );
};
