import { Link } from 'react-router-dom'
import useHeader from '../useHeader'
import { colors } from '@/constants/colors'

interface LinkProps {
  path: string
  text: string
  styles?: string
}

const LinkItem = ({ path, text }: LinkProps) => {
  const { states } = useHeader()
  const pathMatched = path === states.pathname

  return (
    <Link
      style={{
        transition: 'all .5s ease',
      }}
      className={` ${
        states.defaultPath ? 'text-white' : 'text-black'
      } group  text-[18px] rounded-md hover:underline-offset-8 font-regular`}
      to={path}
    >
      {text}
      <div
        className={` ${
          pathMatched && 'w-7/12'
        } block w-0 group-hover:w-7/12 transition-all duration-300 delay-100 h-0.5 rounded-full`}
        style={{ backgroundColor: colors.primary }}
      ></div>
    </Link>
  )
}

export default LinkItem
