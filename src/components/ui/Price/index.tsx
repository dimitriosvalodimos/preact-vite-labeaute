export const Price = ({ time, price }: { time: number; price: number }) => (
  <span
    style={{
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    {time !== 0 && (
      <>
        <p>Verwöhnzeit {time} min</p> •{" "}
      </>
    )}
    <p>{price} Euro</p>
  </span>
);
