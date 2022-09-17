import styled from "styled-components";
import img from "../assets/images/front_compressed_large.jpeg";

const Wrapper = styled.div`
  width: 100%;
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0.5rem;
`;

const Text = styled.div`
  padding: 0.5rem;
  text-align: center;
  background-color: white;
  width: 80%;
  border-radius: var(--radius);
`;

const Company = styled.h2`
  font-family: var(--lb-font);
  color: var(--lb-color);
`;

const Slogan = styled.p``;
const Owners = styled.p``;
const Rule = styled.hr``;
const Pitch = styled.p``;

const Hero = () => {
  return (
    <Wrapper>
      <Text>
        <Company>LA BEAUTÉ</Company>
        <Slogan>Kosmetik und Wellness</Slogan>
        <Owners>Katrin Bienk · Michaela Kaminski</Owners>
        <Rule />
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
