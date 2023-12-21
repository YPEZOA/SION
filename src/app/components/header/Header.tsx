import { Link } from 'react-router-dom'
import InstaIcon from '@/app/UI/icons/Instagram'
import FaceIcon from '@/app/UI/icons/FaceIcon'
import YoutubeIcon from '@/app/UI/icons/YoutubeIcon'
import ElementDelay from '../layouts/elements/ElementDelay'
import logoSion from 'src/assets/icons/casa-sion-logo.png'
import logoSionBlack from 'src/assets/icons/logo-sion-black.png'
import MenuResponsive from './components/MenuResponsive'
import useHeader from './useHeader'
import LinkItem from './components/LinkItem'
import radio7 from 'src/assets/icons/radio7-logo.png'

const Header = () => {
  const { states } = useHeader()

  return (
    <nav className={`${states.defaultPath ? 'absolute' : ''} w-full z-30`}>
      {/* RRSS section */}
      <div
        className={`${
          states.defaultPath ? 'bg-primary' : 'bg-secondary'
        } flex items-center h-[55px]`}
      >
        <div className='w-11/12 xl:w-10/12 mx-auto '>
          <ElementDelay motionless={false} delay={0.3} styles='flex justify-between items-center'>
            <a href='https://www.radio7fm.cl/' target='blank' aria-label='Radio7'>
              <img src={radio7} alt='Logo radio7' width={100} height={100} />
            </a>
            <div className='flex items-center gap-1'>
              <a
                href='https://www.instagram.com/casa_sion_santiago_/'
                target='blank'
                aria-label='Instagram'
              >
                <InstaIcon />
              </a>
              <a
                href='https://www.facebook.com/CasaSionSantiagoo'
                target='blank'
                aria-label='Facebook'
              >
                <FaceIcon />
              </a>
              <a
                href='https://www.youtube.com/@CasaSionSantiago'
                target='blank'
                aria-label='Youtube'
              >
                <YoutubeIcon />
              </a>
            </div>
          </ElementDelay>
        </div>
      </div>

      {/* Route Links */}
      <ElementDelay motionless={false} delay={0.3} styles='relative'>
        <div className='lg:hidden'>
          <MenuResponsive />
        </div>
        <div
          className={`w-11/12 xl:w-10/12 mx-auto py-8 md:border-b hidden lg:block ${
            states.defaultPath ? 'border-white' : 'border-gray-500'
          } ${states.pathname === '/casas-avivamiento' ? 'border-none' : ''}`}
        >
          <div className='items-center justify-between hidden lg:flex'>
            <div className='flex gap-10'>
              <LinkItem path='/' text='Inicio' />
              <LinkItem path='/casas-avivamiento' text='Casas de avivamiento' />
            </div>
            <Link to='/' className='mr-20'>
              <div className='flex items-center transition ease-in-out delay-50 duration-300 cursor-pointer hover:scale-95'>
                <img
                  src={states.defaultPath ? logoSion : logoSionBlack}
                  alt='Casa Sion Logo'
                  width={40}
                  height={40}
                />
                <span
                  className={`${
                    states.defaultPath ? 'text-white' : 'text-black'
                  } text-lg ml-1 mt-2`}
                >
                  Sion Santiago
                </span>
              </div>
            </Link>

            <div className='flex gap-10'>
              <LinkItem path='/escuelas' text='Escuelas' />
              <LinkItem path='/contacto' text='Contacto' />
            </div>
          </div>
        </div>
      </ElementDelay>
    </nav>
  )
}

export default Header
