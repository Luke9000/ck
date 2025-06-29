"use client";

import * as React from "react";
import { useWindowSize } from "react-use";
import { useState } from "react";

const SvgComponent = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  const { width, height } = useWindowSize();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width / 2}
      height={width / 2}
      fill="none"
      {...props}
    >
      <path
        fill="#FF1010"
        fillRule="evenodd"
        d="M751.011 1298.99c302.639 0 547.979-245.34 547.979-547.979 0-302.642-245.34-547.981-547.979-547.981-302.642 0-547.981 245.339-547.981 547.981 0 302.639 245.339 547.979 547.981 547.979Zm0 203.03c414.769 0 751.009-336.24 751.009-751.009C1502.02 336.239 1165.78 0 751.011 0 336.239 0 0 336.239 0 751.011c0 414.769 336.239 751.009 751.011 751.009Z"
        clipRule="evenodd"
      />
      <path
        fill="#FF1010"
        d="M1104.43 751.014c0 195.186-158.228 353.416-353.414 353.416-195.187 0-353.417-158.23-353.417-353.416 0-195.187 158.23-353.417 353.417-353.417 195.186 0 353.414 158.23 353.414 353.417Z"
      />
    </svg>
  );
};
export default SvgComponent;
