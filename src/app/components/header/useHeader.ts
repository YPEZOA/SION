import { useState } from 'react'
import { useLocation } from 'react-router-dom'

const useHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(true)

  const { pathname, search } = useLocation()
  const defaultPath = pathname === '/'

  return {
    states: { pathname, defaultPath, toggleMenu, routeState: search },
    setters: { setToggleMenu },
  }
}

export default useHeader
