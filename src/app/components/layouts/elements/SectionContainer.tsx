import React from 'react'

interface Props {
  children: React.ReactNode
  styles?: string
  props?: any
}

const SectionContainer = ({ children, styles, props }: Props) => {
  return (
    <section className={`container w-11/12 xl:w-10/12 py-32  ${styles ? styles : ''}`} {...props}>
      {children}
    </section>
  )
}

export default SectionContainer
