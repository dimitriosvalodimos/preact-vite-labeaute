import { motion } from "framer-motion";
import { ReactNode } from "react";
import styled from "styled-components";
import {
  desktopMediaQuery,
  handleScroll,
  useActiveNavbarItemStore,
  useMediaQuery,
} from "../utils";

export type TNavItem = {
  icon: ReactNode;
  text: string;
  link: string;
  animation?: any;
  index?: number;
};

const StyledLink = styled.a<{ active: boolean }>`
  text-decoration: none;
  color: ${({ active }) => (active ? "var(--lb-color)" : "black")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius);
  border: 1px solid transparent;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    color: var(--lb-color);
    border-color: var(--bg-hover-active);
  }

  &:active {
    background-color: var(--bg-active);
  }
`;

const IconButton = styled(motion.div)<{ isDesktop: boolean }>`
  height: ${({ isDesktop }) => (isDesktop ? "100%" : "auto")};
  display: flex;
  flex-direction: row;
  border: 1px solid transparent;
  padding: ${({ isDesktop }) => (isDesktop ? "0.5rem" : "0.5rem 1rem")};
`;

const Text = styled.p`
  margin: 0 var(--x-margin);
`;

export const NavItem = ({ text, link, icon, animation, index }: TNavItem) => {
  const isDesktop = useMediaQuery(desktopMediaQuery);
  const { active, setActive } = useActiveNavbarItemStore((state) => ({
    active: state.active[index!],
    setActive: state.setActive,
  }));

  return (
    <StyledLink
      active={active}
      id={`link-${link}`}
      onClick={() => {
        setActive(index!);
        handleScroll(link);
      }}
    >
      <IconButton isDesktop={isDesktop} variants={animation}>
        {icon}
        {isDesktop && <Text>{text}</Text>}
      </IconButton>
    </StyledLink>
  );
};
