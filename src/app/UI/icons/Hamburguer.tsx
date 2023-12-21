interface IconProps {
  color: string
}

const HamburguerMenu = ({ color }: IconProps) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={30}
    fill='none'
    stroke={color}
    strokeWidth={0}
    viewBox='0 0 15 15'
  >
    <path
      fill={color}
      fillRule='evenodd'
      stroke='none'
      d='M1.5 3a.5.5 0 0 0 0 1h12a.5.5 0 0 0 0-1h-12ZM1 7.5a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Zm0 4a.5.5 0 0 1 .5-.5h12a.5.5 0 0 1 0 1h-12a.5.5 0 0 1-.5-.5Z'
      clipRule='evenodd'
    />
  </svg>
)

export default HamburguerMenu
