import styled from "styled-components";
import { Rule } from "./Rule";
import { Price } from "./Price";

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 0;
`;

export const PriceList = ({
  priceList,
}: {
  priceList: { time: number; price: number }[];
}) => {
  return (
    <Wrapper>
      <Rule marginY="0.5rem" />
      {priceList.map(({ time, price }, i) => (
        <Price key={`${time}-${price}`} price={price} time={time} />
      ))}
    </Wrapper>
  );
};
