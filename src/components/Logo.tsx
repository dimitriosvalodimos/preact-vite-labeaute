import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { desktopMediaQuery, useMediaQuery } from "../utils";

const Wrapper = styled(motion.p)`
  color: var(--lb-color);
  font-size: x-large;
  font-family: var(--lb-font);
`;

export const Logo = () => {
  const isDesktop = useMediaQuery(desktopMediaQuery);

  return (
    <AnimatePresence mode="wait">
      {isDesktop ? (
        <Wrapper
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          exit={{ opacity: 0, x: -100 }}
        >
          LA BEAUTÉ
        </Wrapper>
      ) : (
        <Wrapper
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          exit={{ opacity: 0, x: -100 }}
        >
          LB
        </Wrapper>
      )}
    </AnimatePresence>
  );
};
