"use client";

import * as React from "react";

type LogoMarkProps = {
  size?: number;
};

export default function LogoMark({ size = 36 }: LogoMarkProps) {
  const gradientId = React.useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F43F8C" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>

      <rect width="100" height="100" rx="30" fill={`url(#${gradientId})`} />

      {/* Abstract I */}
      <circle cx="32" cy="28" r="7" fill="#fff" />
      <path d="M32 42V74" stroke="#fff" strokeWidth="9" strokeLinecap="round" />

      {/* Abstract C */}
      <path
        d="M75 30
           C66 20 48 21 41 35
           C34 49 41 69 57 73
           C65 75 72 72 77 66"
        fill="none"
        stroke="#fff"
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* Connection node */}
      <circle cx="77" cy="66" r="5" fill="#fff" />
    </svg>
  );
}
