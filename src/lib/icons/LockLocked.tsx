import type { SVGProps } from 'react'
export const LockLockedIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={25}
    fill='none'
    {...props}
  >
    <mask
      id='lock-locked_svg__a'
      width={25}
      height={25}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill='#D9D9D9' d='M.461.839h24v24h-24z' />
    </mask>
    <g fill='#232B3A' mask='url(#lock-locked_svg__a)'>
      <rect width={12} height={8.152} x={6.461} y={12.839} rx={1.259} />
      <path
        fillRule='evenodd'
        d='M7.94 10.359a4.52 4.52 0 0 1 9.04 0v5.692a1 1 0 1 1-2 0v-5.692a2.52 2.52 0 0 0-5.04 0v3.531a1 1 0 1 1-2 0V10.36Z'
        clipRule='evenodd'
      />
    </g>
  </svg>
)
