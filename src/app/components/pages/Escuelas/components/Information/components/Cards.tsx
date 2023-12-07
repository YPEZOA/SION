import HeadingAnimation from '@/app/components/layouts/elements/HeadingAnimation'

const Cards = () => {
  return (
    <article className='flex flex-col'>
      <HeadingAnimation styles='px-0 py-0'>
        <div className='lg:ml-14 bg-white text-center lg:w-[576px] shadow-[-5px_8px_15px_0_rgb(0,0,0,0.4)] py-3 px-10 rounded-md'>
          <h1 className='font-[OhBaby] text-[36px] text-[#1E1E1E]'>Nuevos Comienzos</h1>
          <p className='text-[#656565] pb-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.{' '}
          </p>
        </div>
      </HeadingAnimation>
      <HeadingAnimation styles='px-0 py-0'>
        <div className='bg-white mt-5 text-center lg:w-[576px] shadow-[-5px_8px_15px_0_rgb(0,0,0,0.4)] py-3 px-10 rounded-md'>
          <h1 className='font-[OhBaby] text-[36px] text-[#1E1E1E] '>Discípulos</h1>
          <p className='text-[#656565] pb-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.{' '}
          </p>
        </div>
      </HeadingAnimation>
      <HeadingAnimation styles='px-0 py-0'>
        <div className='lg:ml-14 bg-white mt-5 text-center lg:w-[576px] shadow-[-5px_8px_15px_0_rgb(0,0,0,0.4)] py-3 px-10 rounded-md'>
          <h1 className='font-[OhBaby] text-[36px] text-[#1E1E1E] '>Líderes</h1>
          <p className='text-[#656565] pb-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.{' '}
          </p>
        </div>
      </HeadingAnimation>
    </article>
  )
}

export default Cards
