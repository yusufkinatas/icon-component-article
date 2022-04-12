import { SVGProps } from "react";

const SvgFile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 18 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.879.879A3 3 0 0 1 3 0h7a1 1 0 0 1 .707.293l7 7A1 1 0 0 1 18 8v11a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3A3 3 0 0 1 .879.879ZM3 2a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8.414L9.586 2H3Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1Z"
      fill="currentColor"
    />
  </svg>
);

export default SvgFile;
