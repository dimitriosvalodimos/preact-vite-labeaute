import { useEffect, useState } from "react";

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

export const hoverRotation = 10;
export const animationTiming = 150;
