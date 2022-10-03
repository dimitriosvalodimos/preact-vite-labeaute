export const Rule = ({ marginY }: { marginY?: string }) => (
  <hr
    style={{
      width: "60%",
      color: "rgba(0, 0, 0, 0.1)",
      marginTop: marginY,
      marginBottom: marginY,
    }}
  />
);
