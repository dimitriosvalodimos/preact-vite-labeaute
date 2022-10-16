import { Rule } from "../Rule";
import { Title } from "../Title";
import { Description } from "../Description";
import s from "./SectionTitle.module.css";

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
  return (
    <div className={s.wrapper}>
      {ruleAbove && <Rule marginY={ruleSpace} />}
      {title && <Title text={title} />}
      {description && <Description text={description} />}
      {ruleBelow && <Rule marginY={ruleSpace} />}
    </div>
  );
};
