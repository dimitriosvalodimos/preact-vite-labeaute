import { Lazy, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "./ui/Card";
import styled from "styled-components";
import { companies, specialists } from "../text";
import { SectionTitle } from "./ui/SectionTitle";
import { desktopMediaQuery, useMediaQuery } from "../utils";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const Resize = styled.div<{ isDesktop: boolean }>`
  width: ${({ isDesktop }) => (isDesktop ? "60%" : "100%")};
`;

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
      <Wrapper>
        {specialists.map(({ name, occupation, treatments, link }) => (
          <Card
            key={`${name}-${occupation}`}
            title={name}
            short={occupation}
            description={treatments}
            buttonLink={link}
          />
        ))}
      </Wrapper>
      <SectionTitle
        description="Unternehmen"
        ruleAbove
        ruleBelow
        ruleSpace="1rem"
      />
      <Resize isDesktop={isDesktop}>
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
      </Resize>
    </section>
  );
}
