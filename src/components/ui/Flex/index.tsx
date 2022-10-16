export const Flex = ({
    style,
    children,
}: {
    style?: { [key: string]: any };
    children: JSX.Element | JSX.Element[];
}) => {
    return <div style={{ display: "flex", ...style }}>{children}</div>;
};
