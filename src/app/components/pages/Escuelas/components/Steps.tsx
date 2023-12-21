import bird from 'src/assets/images/bird.webp'

const Steps = () => {
  return (
    <article className='relative flex flex-col '>
      <img className='absolute -left-16 -top-20' src={bird} alt='Bird' width={100} height={100} />
      <div className='relative flex items-center border-[1px] border-[#D9D9D9] max-w-[530px] bg-white py-8 pl-14 pr-4 shadow-[0px_0px_10px_rgba(0,0,0,0.1)] rounded-[5px]'>
        <div className='absolute flex items-center justify-center bg-primary rounded-full -left-4 h-[50px] w-[50px] md:h-[80px] md:w-[80px] md:-left-10 align-middle'>
          <span className='text-white text-3xl z-10'>1</span>
        </div>
        <div>
          <h1 className='font-semibold'>Nuevos comienzos</h1>
          <p className='text-secondary mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ibore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className='h-[25px] w-[2px] bg-[#D9D9D9] ml-20'></div>
      <div className='relative flex items-center border-[1px] border-[#D9D9D9] max-w-[530px] bg-white py-8 pl-14 pr-4 shadow-[0px_0px_10px_rgba(0,0,0,0.1)] rounded-[5px]'>
        <div className='absolute flex items-center justify-center bg-primary rounded-full -left-4 h-[50px] w-[50px] md:h-[80px] md:w-[80px] md:-left-10 align-middle'>
          <span className='text-white text-3xl z-10'>2</span>
        </div>
        <div>
          <h1 className='font-semibold'>Discípulos</h1>
          <p className='text-secondary mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ibore et
            dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className='h-[25px] w-[2px] bg-[#D9D9D9] ml-20'></div>
      <div className='relative flex items-center border-[1px] border-[#D9D9D9] max-w-[530px] bg-white py-8 pl-14 pr-4 shadow-[0px_0px_10px_rgba(0,0,0,0.1)] rounded-[5px]'>
        <div className='absolute flex items-center justify-center bg-primary rounded-full -left-4 h-[50px] w-[50px] md:h-[80px] md:w-[80px] md:-left-10 align-middle'>
          <span className='text-white text-3xl z-10'>3</span>
        </div>
        <div>
          <h1 className='font-semibold'>Líderes</h1>
          <p className='text-secondary mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ibore et
            dolore magna aliqua.
          </p>
        </div>
      </div>
    </article>
  )
}

export default Steps
