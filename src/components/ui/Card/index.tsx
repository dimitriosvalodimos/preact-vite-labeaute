import { Flex } from "../Flex";
import { Table } from "../Table";
import { PriceList } from "../PriceList";
import s from "./Card.module.css";

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
    if (table) {
        return (
            <div className={s.wrapper}>
                {title && <h3 className={s.cardTitle}>{title}</h3>}
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
            </div>
        );
    } else {
        return (
            <div className={s.wrapper}>
                <h3 className={s.cardTitle}>{title}</h3>
                <Flex
                    style={{
                        height: "100%",
                        width: "100%",
                        flexDirection: "column",
                        flexGrow: 1,
                    }}
                >
                    {short ? <h4>{short}</h4> : <></>}
                    {description ? (
                        <p className={s.cardDescription}>{description}</p>
                    ) : (
                        <></>
                    )}
                    {priceList ? <PriceList priceList={priceList} /> : <></>}
                    {buttonLink ? (
                        <a
                            className={s.buttonLink}
                            href={buttonLink}
                            target="_blank"
                            rel="prefetch noreferrer noopener nofollow"
                        >
                            Zur Seite
                        </a>
                    ) : (
                        <></>
                    )}
                </Flex>
            </div>
        );
    }
};
