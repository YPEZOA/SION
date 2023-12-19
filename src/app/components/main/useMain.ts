import { useEffect, useState } from 'react'

const useMain = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  const handleScrollPosition = () => {
    setScrollPosition(window.scrollY)
  }

  useEffect(() => {
    handleScrollPosition()
    window.addEventListener('scroll', handleScrollPosition)
    return () => window.removeEventListener('scroll', handleScrollPosition)
  }, [])

  return {
    scrollPosition,
  }
}

export default useMain
