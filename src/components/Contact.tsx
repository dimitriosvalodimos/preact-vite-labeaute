import styled from "styled-components";
import { Address } from "./ui/Address";
import { Warning } from "./ui/Warning";
import { OpeningHours } from "./ui/OpeningHours";
import { SectionTitle } from "./ui/SectionTitle";
import { desktopMediaQuery, useMediaQuery } from "../utils";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default function Contact() {
  const isDesktop = useMediaQuery(desktopMediaQuery);

  return (
    <section
      id="kontakt"
      style={{
        maxWidth: "90%",
      }}
    >
      <SectionTitle title="Kontakt" ruleAbove ruleBelow ruleSpace="1rem" />
      <Wrapper>
        <Address />
        <OpeningHours />
      </Wrapper>
      <Warning />
    </section>
  );
}
