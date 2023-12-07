import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { colors } from '@/constants/colors'
import radioIcon from 'src/assets/icons/radio7-logo.png'
import hamburguer from 'src/assets/icons/hamburger-icon.png'

interface LinkProps {
  path: string
  children: React.ReactNode
}

const Navlink = ({ path, children }: LinkProps) => {
  const { pathname } = useLocation()
  const pathMatched = path === pathname

  return (
    <Link
      style={{
        transition: 'all .5s ease',
      }}
      className='group text-white font-medium text-md uppercase  mx-4 rounded-md p-3 hover:underline-offset-8'
      to={path}
    >
      {children}
      <div
        className={`block w-0 group-hover:w-9/12 ${
          pathMatched && 'w-9/12'
        } transition-all duration-300 delay-100 h-0.5 rounded-full`}
        style={{ backgroundColor: colors.primary }}
      ></div>
    </Link>
  )
}

const Header = () => {
  const [scrollYPosition, setScrollYPosition] = useState(0)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    setScrollYPosition(latest)
  })
  const scrollNotMove = scrollYPosition < 200

  return (
    <nav
      style={{
        height: scrollYPosition > 200 ? '4rem' : '6rem',
        backgroundColor: scrollNotMove ? 'rgba(30,30,30,0.40)' : 'rgba(30,30,30,0.78)',
      }}
      className='transition-all duration-500 fixed w-full z-10 flex items-center shadow-[0_0px_10px_#1E1E1E]'
    >
      <div className='w-11/12 flex justify-between items-center mx-auto'>
        <Link to='/'>
          <div className='flex items-center transition ease-in-out delay-50 duration-300 hover:scale-105 cursor-pointer'>
            <img
              className='md:w-[35px]'
              src='/logoSion.png'
              alt='Sion Logo'
              width={30}
              height={30}
            />
            <span className='text-white text-md font-bold ml-1 mt-2'>SION</span>
          </div>
        </Link>
        <div className='hidden lg:flex gap-8 items-center'>
          <Navlink path='/escuelas'>escuelas</Navlink>
          <Navlink path='/casas-avivamiento'>casas de avivamiento</Navlink>
          <Navlink path='/contacto'>contacto</Navlink>
          <a href='https://www.radio7fm.cl/' target='blank'>
            <img
              className='cursor-pointer mb-1'
              src={radioIcon}
              alt='Radio7'
              width={100}
              height={0}
            />
          </a>
        </div>
        <button className='block lg:hidden'>
          <img src={hamburguer} alt='Hamburguer Menu' width={25} height={12} />
        </button>
      </div>
    </nav>
  )
}

export default Header
