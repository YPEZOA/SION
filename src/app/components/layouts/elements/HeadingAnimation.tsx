import { useEffect } from 'react'
import { useAnimation, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Props {
  children?: React.ReactNode
  styles?: string
}

const AnimationInline = ({ children, styles }: Props) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  const elementVariants = {
    visible: { x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.4 } },
    hidden: { x: -30, opacity: 0 },
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div>
      <motion.div
        className={styles}
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

export default AnimationInline
