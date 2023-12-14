import React from 'react'

type ButtonProps = {
  text?: string
  accesibilityLabel: string
  backgroundColor?: string
  border?: boolean
  icon?: React.ReactNode
  customStyles?: string
  onClickEvent?: () => void
}

const Button: React.FunctionComponent<ButtonProps> = ({
  text,
  accesibilityLabel,
  backgroundColor,
  border,
  icon,
  customStyles = '',
  onClickEvent,
}) => {
  const defaultStyles = 'rounded-[5px] py-5 px-10'
  const matchStyled = customStyles ? customStyles : defaultStyles

  return (
    <button
      onClick={onClickEvent}
      type='button'
      aria-labelledby={accesibilityLabel}
      className={` transition-all duration-75 uppercase  
    ${backgroundColor ? backgroundColor : ''} 
    ${border ? 'border-[1px] border-[#4C4B63]' : ''} 
    ${
      border && !backgroundColor?.length
        ? 'hover:bg-primary hover:border-transparent hover:text-white'
        : ''
    } ${matchStyled}`}
    >
      {icon ? icon : text}
    </button>
  )
}

export default Button
