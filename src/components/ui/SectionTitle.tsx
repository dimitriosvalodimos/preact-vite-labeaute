import styled from "styled-components";
import { Rule } from "./Rule";
import { Title } from "./Title";
import { Description } from "./Description";
import { desktopMediaQuery, useMediaQuery } from "../../utils";

const Wrapper = styled.div<{ isDesktop: boolean }>`
  display: flex;
  flex-direction: column;
  padding-top: ${({ isDesktop }) => (isDesktop ? "2rem" : "2rem")};
`;

export const SectionTitle = ({
  title,
  description,
  ruleAbove,
  ruleBelow,
  ruleSpace,
}: {
  title?: string;
  description?: string;
  ruleAbove?: boolean;
  ruleBelow?: boolean;
  ruleSpace?: string;
}) => {
  const isDesktop = useMediaQuery(desktopMediaQuery);

  return (
    <Wrapper isDesktop={isDesktop}>
      {ruleAbove && <Rule marginY={ruleSpace} />}
      {title && <Title text={title} />}
      {description && <Description text={description} />}
      {ruleBelow && <Rule marginY={ruleSpace} />}
    </Wrapper>
  );
};
