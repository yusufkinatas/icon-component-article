import EyeClosed from "./EyeClosed";
import EyeOpen from "./EyeOpen";
import File from "./File";

export type IconNames = "EyeClosed" | "EyeOpen" | "File";

const icons = {
  EyeClosed,
  EyeOpen,
  File,
};

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconNames;
}

export const Icon = (props: IconProps) => {
  const { name, ...rest } = props;

  const IconComponent = icons[name];

  return <IconComponent {...rest} />;
};
