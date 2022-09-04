import { useMediaQuery } from "../../utils";
// import { ReactComponent as ShortLogo } from "../../assets/logo/short.svg";
// import { ReactComponent as FullLogo } from "../../assets/logo/full.svg";

// export const Logo = () => {
//   const isDesktop = useMediaQuery("(min-width: 500px)");
//   return <>{isDesktop ? <FullLogo /> : <ShortLogo />}</>;
// };

export const Logo = () => {
  const isDesktop = useMediaQuery("(min-width: 500px)");

  return <>{isDesktop ? <p>LA BEAUTÉ</p> : <p>LB</p>}</>;
};
