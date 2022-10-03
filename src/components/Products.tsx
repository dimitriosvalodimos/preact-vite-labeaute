import styled from "styled-components";
import { Card } from "./ui/Card";
import { SectionTitle } from "./ui/SectionTitle";
import { massages, productExtras, products, specialTreatment } from "../text";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default function Products() {
  return (
    <section
      id="produkte"
      style={{
        maxWidth: "90%",
      }}
    >
      <SectionTitle
        title="Produkte und Leistungen"
        ruleAbove
        ruleBelow
        ruleSpace="1rem"
      />
      <Wrapper>
        {products.map(({ title, description, priceList }, i) => (
          <Card
            key={`${title}-${i}`}
            title={title}
            description={description}
            priceList={priceList}
          />
        ))}
        <Card title="Extras" table={productExtras} />
      </Wrapper>
      <SectionTitle
        description="Massagen"
        ruleAbove
        ruleBelow
        ruleSpace="1rem"
      />
      <Wrapper>
        {massages.map(({ title, description, priceList }, i) => (
          <Card
            key={`${title}-${i}`}
            title={title}
            description={description}
            priceList={priceList}
          />
        ))}
      </Wrapper>
      <SectionTitle
        description="Spezialbehandlungen"
        ruleAbove
        ruleBelow
        ruleSpace="1rem"
      />
      <Wrapper>
        {specialTreatment.map(({ title, description, priceList }, i) => (
          <Card
            key={`${title}-${i}`}
            title={title}
            description={description}
            priceList={priceList}
          />
        ))}
      </Wrapper>
    </section>
  );
}
