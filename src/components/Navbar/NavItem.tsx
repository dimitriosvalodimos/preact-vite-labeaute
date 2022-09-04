import { ReactNode, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { animated, useSpring } from "@react-spring/web";
import { animationTiming, hoverRotation } from "../../utils";
import s from "./NavItem.module.css";

export type TNavItem = {
  icon: ReactNode;
  text: string;
  link: string;
};

export const NavItem = ({ text, link, icon }: TNavItem) => {
  const [isHovered, setIsHovered] = useState(false);

  const style = useSpring({
    height: "3px",
    width: `${isHovered ? 100 : 0}%`,
    backgroundColor: "black",
    config: {
      tension: 500,
      friction: 50,
    },
  });

  useEffect(() => {
    if (!isHovered) {
      return;
    }

    const timeoutId = window.setTimeout(
      () => setIsHovered(false),
      animationTiming
    );
    return () => window.clearTimeout(timeoutId);
  }, [isHovered]);

  const trigger = () => setIsHovered(true);

  return (
    <NavLink onPointerEnter={trigger} className={s.container} to={link}>
      <div className={s.item}>
        {icon}
        <p className={s.text}>{text}</p>
      </div>
      <animated.span style={style} />
    </NavLink>
  );
};
