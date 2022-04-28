// region import
import React from 'react'
// endregion

function SVGIconError() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={90}
      height={90}
      viewBox="0 0 90 90"
    >
      <defs>
        <path id="a" d="M16.5 16h58v58h-58z" />
        <mask id="b" maskContentUnits="userSpaceOnUse" maskUnits="userSpaceOnUse">
          <path d="M0 0h90v90H0z" />
          <use fill="#fff" xlinkHref="#a" />
        </mask>
      </defs>
      <circle cx={45} cy={45} fill="#FF8C8C" r={45} />
      <use fill="none" xlinkHref="#a" />
      <g mask="url(#b)">
        <path fill="none" d="M16.5 16h58v58h-58V16z" />
        <circle cx={45.5} cy={61.917} fill="#27262D" r={4.833} />
        <path
          fill="#27262D"
          fillRule="evenodd"
          d="M40.667 23.25h9.666v29h-9.666v-29z"
        />
      </g>
    </svg>
  )
}

export default SVGIconError
