import { SVGProps } from "react";

const SvgEyeOpen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g
      clipPath="url(#clip0)"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 6.251C7.97 6.183 3.8 9 1.18 11.885a1.663 1.663 0 0 0 0 2.226C3.742 16.935 7.9 19.817 12 19.748c4.1.069 8.258-2.813 10.824-5.637a1.663 1.663 0 0 0 0-2.226C20.2 9 16.031 6.183 12 6.251Z" />
      <path d="M15.75 13a3.75 3.75 0 1 1-7.5-.002 3.75 3.75 0 0 1 7.5.002Z" />
    </g>
  </svg>
);

export default SvgEyeOpen;
