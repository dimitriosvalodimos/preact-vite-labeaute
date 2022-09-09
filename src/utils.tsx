import { useEffect, useState } from "react";

export const hoverRotation = 10;
export const animationTiming = 150;
export const navbarHeight = 64;
export const desktopMediaQuery = "(min-width: 500px)";

export const useMediaQuery = (query: string) => {
  const getMatches = (query: string) => {
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));

  const update = () => setMatches(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);
    update();
    matchMedia.addEventListener("change", update);

    return () => {
      matchMedia.removeEventListener("change", update);
    };
  }, [query]);

  return matches;
};

export const handleScorll = (id: string) => {
  if (id === "") {
    window.scrollTo({ behavior: "smooth", top: 0 });
    return;
  }

  if (typeof window !== "undefined") {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.getBoundingClientRect().top - navbarHeight,
      });
      return;
    }
  }
};
