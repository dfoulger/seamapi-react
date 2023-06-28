import type { SVGProps } from 'react'
export const TriangleWarningOutlineIcon = (
  props: SVGProps<SVGSVGElement>
): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <path
      fill='#FF9800'
      d='m12 6.49 7.53 13.01H4.47L12 6.49Zm0-3.99-11 19h22l-11-19Z'
    />
    <path fill='#FF9800' d='M13 16.5h-2v2h2v-2ZM13 10.5h-2v5h2v-5Z' />
  </svg>
)
