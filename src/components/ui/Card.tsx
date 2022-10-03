import styled from "styled-components";
import { Flex } from "./Flex";
import { Table } from "./Table";
import { PriceList } from "./PriceList";
import { desktopMediaQuery, useMediaQuery } from "../../utils";

const Wrapper = styled.div<{ isDesktop: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 0.5rem;
  width: ${({ isDesktop }) => (isDesktop ? "350px" : "100%")};
  text-align: center;
  box-shadow: var(--shadow);
  border: 1px solid var(--bg-hover);
  border-radius: var(--radius);
`;
const CardTitle = styled.h3`
  margin: 0;
  padding: 0.5rem 0;
`;
const CardShort = styled.h4``;
const CardDescription = styled.p`
  width: 80%;
  margin-top: 0;
  margin-bottom: 0;
`;

const ButtonLink = styled.a`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: var(--radius);
  border: 1px solid var(--bg-active);
  text-decoration: none;
  color: black;

  &:hover {
    background-color: var(--bg-hover);
  }
`;

export const Card = ({
  title,
  short,
  description,
  priceList,
  table,
  buttonLink,
}: {
  title?: string;
  short?: string;
  description?: string;
  priceList?: { time: number; price: number }[];
  table?: any[];
  buttonLink?: string;
}) => {
  const isDesktop = useMediaQuery(desktopMediaQuery);

  if (table) {
    return (
      <Wrapper isDesktop={isDesktop}>
        {title && <CardTitle>{title}</CardTitle>}
        <Flex
          style={{
            height: "100%",
            width: "100%",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          <Table data={table} />
        </Flex>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper isDesktop={isDesktop}>
        <CardTitle>{title}</CardTitle>
        <Flex
          style={{
            height: "100%",
            width: "100%",
            flexDirection: "column",
            flexGrow: 1,
          }}
        >
          {short && <CardShort>{short}</CardShort>}
          {description && <CardDescription>{description}</CardDescription>}
          {priceList && <PriceList priceList={priceList} />}
          {buttonLink && (
            <ButtonLink
              href={buttonLink}
              target="_blank"
              rel="prefetch noreferrer noopener nofollow"
            >
              Zur Seite
            </ButtonLink>
          )}
        </Flex>
      </Wrapper>
    );
  }
};
