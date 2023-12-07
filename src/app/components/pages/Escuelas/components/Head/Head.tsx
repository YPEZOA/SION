import ElementDelay from '@/app/components/layouts/elements/ElementDelay'
import escuelasImage from 'src/assets/images/escuelas-image.webp'

const Head = () => {
  return (
    <section
      style={{ backgroundImage: `url(${escuelasImage})` }}
      className='flex flex-col justify-center items-center bg-no-repeat bg-cover bg-left lg:bg-right h-screen  bg-[rgb(0,0,0,0.5)] relative'
    >
      <div className='text-[#F9F9F9] flex flex-col items-center justify-center'>
        <ElementDelay delay={0.2}>
          <h1 className='font-[OhBaby] text-[42px] lg:text-[96px]'>Escuelas de la visión</h1>
        </ElementDelay>
        <ElementDelay delay={0.4} styles='px-10 lg:px-52 xl:px-80'>
          <p className='font-extralight text-[1.2rem] lg:text-[2rem] leading-5 lg:leading-8 text-center'>
            Se parte del estudio bíblico y <span className='font-semibold'>conoce</span> la verdad
            en <span className='font-semibold'>Cristo Jesús</span>
          </p>
        </ElementDelay>
      </div>
      <p className='absolute text-[#D9D9D9] bottom-3 left-0 ml-4'>
        Dr. Sotero del rio #77, La Florida
      </p>
    </section>
  )
}

export default Head
