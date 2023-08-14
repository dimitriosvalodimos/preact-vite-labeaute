import s from "./Price.module.css";

export type TPrice = {
    time: number;
    price: number;
    text?: string;
};

export const Price = ({ time, price, text }: TPrice) => {
    return (
        <div className={s.wrapper}>
            {text && <p>{text}</p>}
            {time !== 0 && <p>Verwöhnzeit {time}min</p>}
            {price && <p>{price} €</p>}
        </div>
    );
};
