import { useEffect, useState } from "react";
import create from "zustand";

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

type ActiveNavbarItem = {
  active: boolean[];
  setActive: (index: number) => void;
};

export const useActiveNavbarItemStore = create<ActiveNavbarItem>((set) => ({
  active: [true, false, false, false],
  setActive: (index) =>
    set((state) => ({
      ...state,
      active: Array(state.active.length)
        .fill(false)
        .map((_, idx) => index === idx),
    })),
}));

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
