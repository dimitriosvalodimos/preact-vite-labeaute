import s from "./Table.module.css";

type TableEntry = {
  text: string;
  price: number;
  starting?: boolean;
};

export const TableItem = ({ item }: { item: TableEntry }) => {
  return (
    <div className={s.row} key={`${item.text}-${item.price}`}>
      <p style={{ width: "40%", textAlign: "left" }}>{item.text}</p>
      <p style={{ width: "40%", textAlign: "right" }}>
        {item.starting && <>ab </>}
        {item.price} Euro
      </p>
    </div>
  );
};
export const Table = ({ data }: { data: TableEntry[] }) => {
  return (
    <ul style={{ width: "100%" }}>
      {data.map((item) => (
        <TableItem key={`${item.text}-${item.price}`} item={item} />
      ))}
    </ul>
  );
};
