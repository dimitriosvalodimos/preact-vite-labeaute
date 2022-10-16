import { Address } from "../ui/Address";
import { Warning } from "../ui/Warning";
import { OpeningHours } from "../ui/OpeningHours";
import { SectionTitle } from "../ui/SectionTitle";
import s from "./Contact.module.css";

export default function Contact() {
  return (
    <section
      id="kontakt"
      style={{
        maxWidth: "90%",
      }}
    >
      <SectionTitle title="Kontakt" ruleAbove ruleBelow ruleSpace="1rem" />
      <div className={s.wrapper}>
        <Address />
        <OpeningHours />
      </div>
      <Warning />
    </section>
  );
}
