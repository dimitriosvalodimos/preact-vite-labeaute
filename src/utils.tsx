import { useState, useEffect } from "preact/hooks";

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

export const handleScroll = (id: string) => {
  if (id === "/") {
    window.scrollTo({ behavior: "smooth", top: 0 });
    return;
  }

  if (typeof window !== "undefined") {
    const element = document.getElementById(id.slice(1));
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top:
          element.getBoundingClientRect().top + window.scrollY - navbarHeight,
      });
      return;
    }
  }
  return;
};
