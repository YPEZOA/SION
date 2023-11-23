import ElementDelay from '@/app/components/layouts/elements/ElementDelay'

const Cards = () => {
  return (
    <section className='md:flex md:justify-between gap-6'>
      <ElementDelay delay={0.3}>
        <div className='mt-4 md:mt-0 py-4 px-8 shadow-[2px_8px_12px_#BFBFBF] rounded-[16px] text-center flex flex-col bg-[#FFFF]'>
          <header className='flex flex-col items-center'>
            Casas de avivamiento{' '}
            <span className='h-1 w-[100px] bg-[#FF9A3E] rounded-md mt-1'></span>
          </header>
          <p className='mt-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad mi
          </p>
        </div>
      </ElementDelay>
      <ElementDelay delay={0.5}>
        <div className='mt-4 md:mt-0 py-4 px-10 shadow-[2px_8px_12px_#BFBFBF] rounded-[16px] text-center flex flex-col bg-[#FFFF]'>
          <header className='flex flex-col items-center'>
            Escuelas de la visi&oacute;n{' '}
            <span className='h-1 w-[100px] bg-[#FF9A3E] rounded-md mt-1'></span>
          </header>
          <p className='mt-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad mi
          </p>
        </div>
      </ElementDelay>
      <ElementDelay delay={0.7}>
        <div className='mt-4 md:mt-0 py-4 px-10 shadow-[2px_8px_12px_#BFBFBF] rounded-[16px] text-center flex flex-col bg-[#FFFF]'>
          <header className='flex flex-col items-center'>
            Red juve <span className='h-1 w-[100px] bg-[#FF9A3E] rounded-md mt-1'></span>
          </header>
          <p className='mt-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad mi
          </p>
        </div>
      </ElementDelay>
    </section>
  )
}

export default Cards
