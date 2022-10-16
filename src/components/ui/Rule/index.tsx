export const Rule = ({ marginY }: { marginY?: string }) => (
  <hr
    style={{
      width: "60%",
      border: "1px solid rgba(0, 0, 0, 0.05)",
      marginTop: marginY,
      marginBottom: marginY,
    }}
  />
);
