import ElementDelay from '@/app/components/layouts/elements/ElementDelay'

const Cards = () => {
  return (
    <ElementDelay delay={0.4}>
      <section className='flex flex-col md:flex-row md:justify-between gap-6 mt-8'>
        <div className='flex flex-col justify-between min-h-[420px] text-center py-12 px-6 border-[1px] border-[#D9D9D9] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] rounded-[5px] bg-[#FFFF]'>
          <h1 className='uppercase font-semibold text-[20px] xl:text-[22px]'>
            casas de avivamiento
          </h1>
          <p className='text-secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <div className='h-1 rounded-full bg-primary w-5/12 mx-auto'></div>
        </div>
        <div className='flex flex-col justify-between min-h-[420px] text-center py-12 px-6 border-[1px] border-[#D9D9D9] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] rounded-[5px] bg-[#FFFF]'>
          <h1 className='uppercase font-semibold text-[20px] xl:text-[22px]'>
            escuelas de la visión
          </h1>
          <p className='text-secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <div className='h-1 rounded-full bg-primary w-5/12 mx-auto'></div>
        </div>
        <div className='flex flex-col justify-between min-h-[420px] text-center py-12 px-6 border-[1px] border-[#D9D9D9] shadow-[0px_0px_10px_rgba(0,0,0,0.1)] rounded-[5px] bg-[#FFFF]'>
          <h1 className='uppercase font-semibold text-[20px] xl:text-[22px]'>red juve</h1>
          <p className='text-secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
          <div className='h-1 rounded-full bg-primary w-5/12 mx-auto'></div>
        </div>
      </section>
    </ElementDelay>
  )
}

export default Cards
