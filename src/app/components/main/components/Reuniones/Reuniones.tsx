import HeadingAnimation from '@/app/components/layouts/elements/HeadingAnimation'
import SectionContainer from '@/app/components/layouts/elements/SectionContainer'
import Cards from '@/app/components/main/components/Reuniones/components/Card/Cards'

const Reuniones = () => {
  return (
    <div
      className='bg-no-repeat bg-contain bg-left'
      style={{ backgroundImage: "url('src/assets/images/reuniones-logo.png')" }}
    >
      <HeadingAnimation hasBackground>
        <h1 className='text-right font-thin tracking-[2px] text-2xl md:text-4xl uppercase text-[#F9F9F9]'>
          nuestras <span className='font-extrabold'>reuniones</span>
        </h1>
      </HeadingAnimation>
      <SectionContainer>
        <Cards />
      </SectionContainer>
    </div>
  )
}

export default Reuniones
