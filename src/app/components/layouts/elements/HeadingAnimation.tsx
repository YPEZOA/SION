import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Props {
  children?: React.ReactNode
  styles?: string
  hasBackground?: boolean
}

const HeadingAnimation = ({ children, styles, hasBackground = false }: Props) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const elementVariants = {
    visible: { x: 0, opacity: 1, transition: { delay: 0.5, duration: 1 } },
    hidden: { x: -30, opacity: 0 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div className={`${hasBackground ? 'bg-[#1E1E1E]' : ''}`}>
      <motion.div
        className={`${styles ? styles : 'px-5 py-4 lg:px-20'}`}
        variants={elementVariants}
        ref={ref}
        initial='hidden'
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  )
}

export default HeadingAnimation
