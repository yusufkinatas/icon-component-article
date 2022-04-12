import { Icon, IconNames } from "../icon";

export const Button = (props: {
  title: string;
  icon: IconNames;
  onClick?: () => void;
}) => {
  return (
    <button onClick={props.onClick}>
      <Icon name={props.icon} />
      {props.title}
    </button>
  );
};
