import type { SVGProps } from 'react'
export const ExclamationCircleIcon = (
  props: SVGProps<SVGSVGElement>
): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <mask
      id='exclamation-circle_svg__a'
      width={24}
      height={24}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill='#D9D9D9' d='M0 0h24v24H0z' />
    </mask>
    <g mask='url(#exclamation-circle_svg__a)'>
      <path
        fill='#E36857'
        d='M12 17a.968.968 0 0 0 .713-.288A.967.967 0 0 0 13 16a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 15a.967.967 0 0 0-.712.287A.968.968 0 0 0 11 16c0 .283.096.52.288.712A.965.965 0 0 0 12 17Zm-1-4h2V7h-2v6Zm1 9a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Z'
      />
    </g>
  </svg>
)
