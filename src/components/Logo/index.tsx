import { AnimatePresence, motion } from "framer-motion";
import s from "./Logo.module.css";
import { desktopMediaQuery, useMediaQuery } from "../../utils";

export const Logo = () => {
  const isDesktop = useMediaQuery(desktopMediaQuery);

  return (
    <AnimatePresence mode="wait">
      {isDesktop && (
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          exit={{ opacity: 0, x: -100 }}
          className={s.logo}
        >
          LA BEAUTÉ
        </motion.p>
      )}

      {!isDesktop && (
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          exit={{ opacity: 0, x: -100 }}
          className={s.logo}
        >
          LB
        </motion.p>
      )}
    </AnimatePresence>
  );
};
