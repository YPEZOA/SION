interface IconProps {
  color?: string
}
const FaceIcon = ({ color = '#FFF' }: IconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={25} height={25} fill='none'>
    <path
      fill={color}
      d='M21.094 1.563H3.906a2.344 2.344 0 0 0-2.344 2.343v17.188a2.343 2.343 0 0 0 2.344 2.343h6.702V16H7.532v-3.5h3.076V9.832c0-3.035 1.807-4.71 4.574-4.71 1.325 0 2.71.235 2.71.235v2.979h-1.526c-1.505 0-1.974.934-1.974 1.891V12.5h3.358l-.537 3.5h-2.82v7.438h6.7a2.343 2.343 0 0 0 2.345-2.344V3.906a2.344 2.344 0 0 0-2.344-2.344Z'
    />
  </svg>
)

export default FaceIcon
