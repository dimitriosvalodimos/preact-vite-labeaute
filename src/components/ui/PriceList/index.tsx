import { Rule } from "../Rule";
import { Price } from "../Price";
import s from "./PriceList.module.css";

export const PriceList = ({
  priceList,
}: {
  priceList: { time: number; price: number }[];
}) => {
  return (
    <div className={s.wrapper}>
      <Rule marginY="0.5rem" />
      {priceList.map(({ time, price }, i) => (
        <Price key={`${time}-${price}`} price={price} time={time} />
      ))}
    </div>
  );
};
