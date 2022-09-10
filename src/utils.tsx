import { useEffect, useState } from "react";
import create from "zustand";

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

type NavLinkManager = {
  sectionIds: string[];
  linkToIndex: { [link: string]: number };
  sectionElements: { [id: string]: HTMLElement };
  navLinkElements: { [id: string]: HTMLElement };
  setSectionIds: (ids: string[]) => void;
  setSectionElements: () => void;
  setNavLinkElements: () => void;
  setLinkToIndex: () => void;
};

export const useNavLinkManagerStore = create<NavLinkManager>((set) => ({
  sectionIds: [],
  sectionElements: {},
  navLinkElements: {},
  linkToIndex: {},
  setLinkToIndex: () =>
    set((state) => {
      const res = state.sectionIds.reduce((acc, cur, idx) => {
        acc[cur] = idx;
        return acc;
      }, {} as { [link: string]: number });
      return { ...state, linkToIndex: res };
    }),
  setSectionIds: (ids) => set((state) => ({ ...state, sectionIds: ids })),
  setSectionElements: () =>
    set((state) => {
      const elements = state.sectionIds
        .map((id) => ({ id, element: document.getElementById(id)! }))
        .reduce((acc, cur) => {
          acc[cur.id] = cur.element;
          return acc;
        }, {} as { [id: string]: HTMLElement });
      return {
        ...state,
        sectionElements: elements,
      };
    }),
  setNavLinkElements: () =>
    set((state) => {
      const elements = state.sectionIds
        .map((id) => ({
          id,
          element: document.getElementById(`link-${id}`)!,
        }))
        .reduce((acc, cur) => {
          acc[cur.id] = cur.element;
          return acc;
        }, {} as { [id: string]: HTMLElement });
      return {
        ...state,
        navLinkElements: elements,
      };
    }),
}));

export const handleScorll = (id: string) => {
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
