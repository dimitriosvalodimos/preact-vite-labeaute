export const Rule = ({ marginY }: { marginY?: string }) => (
  <hr
    style={{
      color: "rgba(0,0,0,0.2",
      marginTop: marginY,
      marginBottom: marginY,
    }}
  />
);
