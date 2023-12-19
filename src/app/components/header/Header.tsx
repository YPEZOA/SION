import { Link, useLocation } from 'react-router-dom'
import { colors } from '@/constants/colors'
import InstaIcon from '@/app/UI/icons/Instagram'
import FaceIcon from '@/app/UI/icons/FaceIcon'
import YoutubeIcon from '@/app/UI/icons/YoutubeIcon'
import ElementDelay from '../layouts/elements/ElementDelay'
import HamburguerMenu from '@/app/UI/icons/Hamburguer'
import logoSion from 'src/assets/icons/casa-sion-logo.png'
import logoSionBlack from 'src/assets/icons/logo-sion-black.png'

interface LinkProps {
  path: string
  children: React.ReactNode
}

const Navlink = ({ path, children }: LinkProps) => {
  const { pathname } = useLocation()
  const pathMatched = path === pathname
  const defaultPath = pathname === '/'

  return (
    <Link
      style={{
        transition: 'all .5s ease',
      }}
      className={`${
        defaultPath ? 'text-white' : 'text-black'
      } group  text-[18px] rounded-md hover:underline-offset-8 font-regular`}
      to={path}
    >
      {children}
      <div
        className={` ${
          pathMatched && 'w-7/12'
        } block w-0 group-hover:w-7/12 transition-all duration-300 delay-100 h-0.5 rounded-full`}
        style={{ backgroundColor: colors.primary }}
      ></div>
    </Link>
  )
}

const Header = () => {
  const { pathname } = useLocation()
  const defaultPath = pathname === '/'
  return (
    <nav className={`${defaultPath ? 'absolute' : ''} w-full z-20`}>
      {/* RRSS section */}
      <div className={`${defaultPath ? 'bg-primary' : 'bg-secondary'} flex items-center h-[55px]`}>
        <div className='w-11/12 xl:w-10/12 mx-auto '>
          <ElementDelay motionless={false} delay={0.3} styles='flex justify-between items-center'>
            <a href='https://www.radio7fm.cl/' target='blank'>
              <img
                src='src/assets/icons/radio7-logo.png'
                alt='Logo radio7'
                width={100}
                height={100}
              />
            </a>
            <div className='flex items-center gap-1'>
              <a href='https://www.instagram.com/casa_sion_santiago_/' target='blank'>
                <InstaIcon />
              </a>
              <a href='https://www.facebook.com/CasaSionSantiagoo' target='blank'>
                <FaceIcon />
              </a>
              <a href='https://www.youtube.com/@CasaSionSantiago' target='blank'>
                <YoutubeIcon />
              </a>
            </div>
          </ElementDelay>
        </div>
      </div>

      {/* Route Links */}
      <ElementDelay motionless={false} delay={0.3}>
        <div
          className={`w-11/12 xl:w-10/12 mx-auto py-8 border-b ${
            defaultPath ? 'border-white' : 'border-gray-500'
          } ${pathname === '/casas-avivamiento' ? 'border-none' : ''}`}
        >
          <div className='hidden lg:flex items-center justify-between'>
            <div className='flex gap-10'>
              <Navlink path='/'>Inicio</Navlink>
              <Navlink path='/casas-avivamiento'>Casas de avivamiento</Navlink>
            </div>
            <Link to='/' className='mr-20'>
              <div className='flex items-center transition ease-in-out delay-50 duration-300 cursor-pointer hover:scale-95'>
                <img
                  src={defaultPath ? logoSion : logoSionBlack}
                  alt='Casa Sion Logo'
                  width={40}
                  height={40}
                />
                <span className={`${defaultPath ? 'text-white' : 'text-black'} text-lg ml-1 mt-2`}>
                  Sion Santiago
                </span>
              </div>
            </Link>

            <div className='flex gap-10'>
              <Navlink path='/escuelas'>Escuelas</Navlink>
              <Navlink path='/contacto'>Contacto</Navlink>
            </div>
          </div>
          <button className='block lg:hidden'>
            <HamburguerMenu />
          </button>
        </div>
      </ElementDelay>
    </nav>
  )
}

export default Header
