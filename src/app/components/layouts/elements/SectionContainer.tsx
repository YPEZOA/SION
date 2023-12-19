import React from 'react'

interface Props {
  children: React.ReactNode
  styles?: string
}

const SectionContainer = ({ children, styles }: Props) => {
  return (
    <section className={`container w-11/12 xl:w-10/12 py-32  ${styles ? styles : ''}`}>
      {children}
    </section>
  )
}

export default SectionContainer
