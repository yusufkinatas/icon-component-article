const path = require("path");

function defaultIndexTemplate(filePaths) {
  const icons = filePaths.map((filePath) =>
    path.basename(filePath, path.extname(filePath))
  );

  const importEntries = icons.map((icon) => {
    return `import ${icon} from './${icon}'`;
  });

  const iconNamesWithQuotes = icons.map((icon) => `'${icon}'`);

  return `
  ${importEntries.join("\n")}
  
  export type IconNames = ${iconNamesWithQuotes.join(" | ")}
  
  const icons = {
    ${icons.join(",")}
  }
  
  interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconNames
  }
  
  export const Icon = (props: IconProps) => {
    const { name, ...rest } = props
  
    const IconComponent = icons[name]
  
    return <IconComponent {...rest} />
  }
  `;
}

module.exports = defaultIndexTemplate;
