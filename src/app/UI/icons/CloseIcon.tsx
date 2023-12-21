import { SVGProps } from 'react'
const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={30}
    fill='none'
    stroke='currentColor'
    strokeWidth={0}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      stroke='none'
      d='M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12 4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586 6.225 4.81Z'
    />
  </svg>
)
export default CloseIcon
