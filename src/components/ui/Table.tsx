import styled from "styled-components";

type TableEntry = {
  text: string;
  price: number;
  starting?: boolean;
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(125, 125, 125, 0.1);
  padding: 0.25rem 0;

  &:nth-child(even) {
    background-color: rgba(125, 125, 125, 0.03);
  }
`;

export const TableItem = ({ item }: { item: TableEntry }) => {
  return (
    <Row key={`${item.text}-${item.price}`}>
      <p style={{ width: "40%", textAlign: "left" }}>{item.text}</p>
      <p style={{ width: "40%", textAlign: "right" }}>
        {item.starting && <>ab </>}
        {item.price} Euro
      </p>
    </Row>
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
