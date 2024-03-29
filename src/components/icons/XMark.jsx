import React from "react";

const XMark = ({size = '13', color = "#DE2D19"}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.17486 8.92755L8.9068 1.19611"
        stroke="#DE2D19"
        strokeWidth="1.98808"
      />
      <path
        d="M8.90668 8.92657L1.17474 1.19514"
        stroke="#DE2D19"
        strokeWidth="1.98808"
      />
    </svg>
  );
};

export default XMark;
