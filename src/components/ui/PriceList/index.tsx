import { Rule } from "../Rule";
import { Price, TPrice } from "../Price";
import s from "./PriceList.module.css";

export const PriceList = ({ priceList }: { priceList: TPrice[] }) => {
    const length = priceList.length;
    return (
        <div className={s.wrapper}>
            <Rule marginY="0.5rem" />
            {priceList.map(({ time, price, text }, i) => {
                return (
                    <>
                        <Price
                            key={`${time}-${price}`}
                            price={price}
                            time={time}
                            text={text}
                        />
                        {i < length - 1 && <Rule marginY="0.5rem" />}
                    </>
                );
            })}
        </div>
    );
};
