import { Lazy, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "../ui/Card";
import styled from "styled-components";
import { companies, specialists } from "../../text";
import { SectionTitle } from "../ui/SectionTitle";
import { desktopMediaQuery, useMediaQuery } from "../../utils";
import s from "./Partners.module.css";

export default function Partners() {
  const isDesktop = useMediaQuery(desktopMediaQuery);

  return (
    <section
      id="partner"
      style={{
        maxWidth: "90%",
        minHeight: "300px",
      }}
    >
      <SectionTitle
        title="Unsere Partner"
        description="Unsere Spezialisten"
        ruleAbove
        ruleBelow
        ruleSpace="1rem"
      />
      <div className={s.wrapper}>
        {specialists.map(({ name, occupation, treatments, link }) => (
          <Card
            key={`${name}-${occupation}`}
            title={name}
            short={occupation}
            description={treatments}
            buttonLink={link}
          />
        ))}
      </div>
      <SectionTitle
        description="Unternehmen"
        ruleAbove
        ruleBelow
        ruleSpace="1rem"
      />
      <div className={s.resize}>
        <Swiper
          style={{ display: "block" }}
          lazy={{ checkInView: true }}
          autoplay={{ delay: 3000 }}
          modules={[Lazy, Autoplay]}
          slidesPerView={isDesktop ? 2 : 1}
        >
          {companies.map(({ img }, i) => (
            <SwiperSlide
              key={`${i}-${i + 1}`}
              style={{
                display: "flex",
              }}
            >
              <img src={img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
