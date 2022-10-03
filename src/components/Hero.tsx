import styled from "styled-components";
import { Rule } from "./ui/Rule";
import { desktopMediaQuery, useMediaQuery } from "../utils";
import img from "../assets/images/front_compressed_large.jpeg";

const Wrapper = styled.div<{ isDesktop: boolean }>`
  display: flex;
  justify-content: space-evenly;
  flex-direction: ${({ isDesktop }) => (isDesktop ? "row" : "column")};
  padding-top: ${({ isDesktop }) => (isDesktop ? "4rem" : "0")};
`;

const Image = styled.img<{ isDesktop: boolean }>`
  width: ${({ isDesktop }) => (isDesktop ? "40%" : "100%")};
`;

const Text = styled.div<{ isDesktop: boolean }>`
  padding: 0.5rem;
  text-align: center;
  background-color: white;
  border-radius: var(--radius);
  width: ${({ isDesktop }) => (isDesktop ? "40%" : "80%")};
  line-height: 1.6;
`;

const Company = styled.h2`
  font-family: var(--lb-font);
  font-size: xx-large;
  color: var(--lb-color);
`;

const Slogan = styled.p``;
const Owners = styled.p``;
const Pitch = styled.p``;

const Hero = () => {
  const isDesktop = useMediaQuery(desktopMediaQuery);
  return (
    <Wrapper isDesktop={isDesktop} id="hero">
      <Image src={img} isDesktop={isDesktop} />
      <Text isDesktop={isDesktop}>
        <Company>LA BEAUTÉ</Company>
        <Slogan>Kosmetik und Wellness</Slogan>
        <Owners>Katrin Bienk · Michaela Kaminski</Owners>
        <Rule marginY="1rem" />
        <Pitch>
          Unsere Fachkenntnis und Erfahrung bringen Ihre äußere und innere
          Schönheit in Einklang. Um ein optimales Resultat und die gewünschte
          Nachhaltigkeit zu erreichen, werden die Behandlungen und Produkte auf
          die Bedürfnisse Ihrer Haut abgestimmt.
        </Pitch>
      </Text>
    </Wrapper>
  );
};

export default Hero;
