import { SVGProps } from "react";

const SvgEyeClosed = (props: SVGProps<SVGSVGElement>) => (
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
      <path d="m2.783 21 18.75-18M8.964 19.051A9.985 9.985 0 0 0 12 19.5c4.1.069 8.258-2.813 10.824-5.637a1.663 1.663 0 0 0 0-2.226A20.566 20.566 0 0 0 19.75 8.88M14.413 6.282A9.55 9.55 0 0 0 12 6c-4.03-.067-8.2 2.752-10.82 5.635a1.663 1.663 0 0 0 0 2.226 20.8 20.8 0 0 0 2.6 2.4" />
      <path d="M8.25 12.75A3.749 3.749 0 0 1 12 9M15.75 12.749A3.75 3.75 0 0 1 12 16.5" />
    </g>
  </svg>
);

export default SvgEyeClosed;
