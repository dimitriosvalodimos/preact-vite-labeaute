import React from "react";

export const Flex = ({
  style,
  children,
}: {
  style?: React.CSSProperties;
  children: React.ReactNode;
}) => {
  return <div style={{ display: "flex", ...style }}>{children}</div>;
};
