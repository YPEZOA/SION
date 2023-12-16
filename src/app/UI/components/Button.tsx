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
  const defaultStyles = 'rounded-[5px] py-4 px-10'

  const renderContent = () => {
    if (!!icon && text?.length)
      return (
        <div className='flex gap-5 items-center'>
          <span>{icon}</span>
          <p>{text}</p>
        </div>
      )
    return text || icon
  }

  return (
    <button
      onClick={onClickEvent}
      type='button'
      aria-labelledby={accesibilityLabel}
      className={` transition-all duration-75 uppercase hover:scale-95
    ${backgroundColor ? backgroundColor : ''} 
    ${border ? 'border-[1px] border-[#4C4B63]' : ''} 
    ${
      border && !backgroundColor?.length
        ? 'hover:bg-primary hover:border-transparent hover:text-white'
        : ''
    } ${defaultStyles} ${customStyles}`}
    >
      {renderContent()}
    </button>
  )
}

export default Button
