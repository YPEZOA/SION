import ElementDelay from '../../layouts/elements/ElementDelay'
import SectionContainer from '../../layouts/elements/SectionContainer'

export const CasasAvivamiento = () => {
  return (
    <section>
      <div className='relative'>
        <img
          src='src/assets/icons/bible-icon.png'
          className='absolute m-auto bottom-3 left-0 right-0 z-10'
          alt='Biblia'
          width={130}
          height={130}
        />
        <header
          className='relative flex flex-col justify-center items-center h-screen bg-[#1E1E1E]'
          style={{
            clipPath: 'polygon(0 0, 100% 0%, 100% 80%, 0% 100%)',
          }}
        >
          <ElementDelay delay={0.2}>
            <h1 className='font-[OhBaby] text-[42px] lg:text-[96px] text-[#F9F9F9]'>
              Casas de avivamiento
            </h1>
          </ElementDelay>
          <ElementDelay delay={0.4} styles='px-10 lg:px-52 xl:px-80'>
            <p className='font-extralight text-[1.2rem] lg:text-[2rem] leading-5 lg:leading-8 text-center text-[#F9F9F9]'>
              Se parte del estudio bíblico y <span className='font-semibold'>conoce</span> la verdad
              en <span className='font-semibold'>Cristo Jesús</span>
            </p>
          </ElementDelay>
        </header>
      </div>
      <SectionContainer styles='mt-20 text-center'>
        <ElementDelay>
          <h1 className='text-[#1E1E1E] font-[OhBaby] text-[42px] lg:text-[48px]'>
            ¿Qué es una casa de avivamiento?
          </h1>
          <p className='px-60 mt-7'>
            Las casas de avivamiento se crearon a partir de la necesidad en Casa Sion de poder
            llegar a todos los hijos. En cada una de ellas se imparte un mensaje bíblico
            semanalmente, donde se da a conocer la palabra y compartir dudas al respecto.
            <span className='block mt-10 font-bold'>Invita a alguien más!</span>
          </p>
        </ElementDelay>
      </SectionContainer>
    </section>
  )
}
