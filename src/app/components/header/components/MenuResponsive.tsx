import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '@/app/UI/components/Button'
import CloseIcon from '@/app/UI/icons/CloseIcon'
import HamburguerMenu from '@/app/UI/icons/Hamburguer'
import useHeader from '../useHeader'

const MenuResponsive: React.FC = () => {
  const [currentPath, setCurrentPath] = useState('')
  const { states, setters } = useHeader()

  useEffect(() => {
    setCurrentPath(states.pathname)
    if (currentPath !== states.pathname) setters.setToggleMenu(false)
  }, [states.pathname])

  return (
    <section>
      <div
        className={`transition-all delay-300 ${
          states.toggleMenu ? 'opacity-0 pointer-events-none' : 'opacity-100'
        } lg:hidden flex justify-end`}
      >
        <Button
          onClickEvent={() => setters.setToggleMenu(true)}
          accesibilityLabel='Menu hamburguesa'
          icon={<HamburguerMenu color={`${states.defaultPath ? '#FFF' : '#000'}`} />}
          customStyles='py-5 px-5'
        />
      </div>

      <div
        style={{ height: 'calc(100vh - 55px)' }}
        className={`${
          states.toggleMenu
            ? 'opacity-100 transition-all duration-300'
            : 'h-0 opacity-0  pointer-events-none'
        } bg-white absolute right-0 top-0 transition-all rounded-bl-md shadow-[0px_0px_5px_rgba(0,0,0,0.2)] z-30`}
      >
        <Button
          onClickEvent={() => setters.setToggleMenu(false)}
          customStyles='py-5 px-5'
          accesibilityLabel='Close Menu'
          icon={<CloseIcon />}
        />
        <div className='h-[3px] w-3/6 ml-5 rounded-full bg-primary'></div>

        <main
          className={`${
            states.toggleMenu ? 'opacity-100' : 'opacity-0'
          } transition-opacity delay-300 flex flex-col justify-center p-5 divide-y-2`}
        >
          <Link className='p-3 pt-0' to='/'>
            Inicio
          </Link>
          <Link className='p-3' to='/casas-avivamiento'>
            Casas de avivamiento
          </Link>
          <Link className='p-3' to='/escuelas'>
            Escuelas
          </Link>
        </main>
      </div>
    </section>
  )
}

export default MenuResponsive
