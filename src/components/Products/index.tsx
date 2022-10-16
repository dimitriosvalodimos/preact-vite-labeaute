import { Card } from "../ui/Card";
import { SectionTitle } from "../ui/SectionTitle";
import {
  massages,
  productExtras,
  products,
  specialTreatment,
} from "../../text";
import s from "./Products.module.css";

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
      <div className={s.wrapper}>
        {products.map(({ title, description, priceList }, i) => (
          <Card
            key={`${title}-${i}`}
            title={title}
            description={description}
            priceList={priceList}
          />
        ))}
        <Card title="Extras" table={productExtras} />
      </div>
      <SectionTitle
        description="Massagen"
        ruleAbove
        ruleBelow
        ruleSpace="1rem"
      />
      <div className={s.wrapper}>
        {massages.map(({ title, description, priceList }, i) => (
          <Card
            key={`${title}-${i}`}
            title={title}
            description={description}
            priceList={priceList}
          />
        ))}
      </div>
      <SectionTitle
        description="Spezialbehandlungen"
        ruleAbove
        ruleBelow
        ruleSpace="1rem"
      />
      <div className={s.wrapper}>
        {specialTreatment.map(({ title, description, priceList }, i) => (
          <Card
            key={`${title}-${i}`}
            title={title}
            description={description}
            priceList={priceList}
          />
        ))}
      </div>
    </section>
  );
}
