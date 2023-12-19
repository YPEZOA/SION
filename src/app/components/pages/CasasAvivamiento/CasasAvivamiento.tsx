import Button from '@/app/UI/components/Button'
import ElementDelay from '../../layouts/elements/ElementDelay'
import SectionContainer from '../../layouts/elements/SectionContainer'
import bibleIcon from 'src/assets/images/bible-icon.webp'
import casaAvivamiento from 'src/assets/images/casa-avivamiento.png'
import Carousel from './components/Carousel'

const CasasAvivamiento = () => {
  return (
    <>
      <header
        style={{ height: 'calc(100vh - 250px)' }}
        className='flex items-center justify-center bg-gradient-to-br from-[#41405B] to-[#272640]'
      >
        <ElementDelay styles='flex flex-col items-center justify-center gap-8'>
          <img src={bibleIcon} alt='Biblia' width={100} height={100} />
          <div className='h-[3px] rounded-full bg-white w-[150px]'></div>
          <h1 className='text-white text-4xl text-center'>Casas de avivamiento</h1>
        </ElementDelay>
      </header>

      <SectionContainer>
        <ElementDelay styles='flex flex-col gap-8 xl:w-9/12 mx-auto'>
          <h1 className='text-3xl tracking-tighter'>
            <div className='bg-primary h-[3px] w-[100px] rounded-full mb-6'></div>
            ¿Qué es una casa de avivamiento?
          </h1>
          <p className='text-secondary'>
            Las casas de avivamiento se crearon a partir de la necesidad en
            <span className='font-semibold'> Casa Sion Santiago</span> de poder llegar a todos los
            hermanos. En cada una de ellas se imparte un mensaje bíblico semanalmente, donde se da a
            conocer la palabra, compartir nuestras experiencias, testimonios o dudas.
          </p>
        </ElementDelay>
      </SectionContainer>
      <article className='flex flex-col md:flex-row items-center bg-[#F9F9F9]'>
        <div className=' flex-1 px-5 md:px-20'>
          <ElementDelay styles='flex flex-col gap-10 py-10 md:py-0'>
            <header>
              <span className='text-primary uppercase'>Únete</span>
              <h1 className='font-semibold text-black text-2xl tracking-tighter'>
                Hay una cerca de tu hogar
              </h1>
            </header>
            <main>
              <p className='text-secondary'>
                Te invitamos a la casa de avivamiento más cercana, contacta con los encargados de
                inscribir a cada hermano que desea aprender y sembrar con su tiempo y corazón al
                reino de Dios. <span className='font-semibold'>No vayas solo/a</span>
              </p>
              <Button
                customStyles='mt-20'
                border
                text='quiero ir'
                accesibilityLabel='Contacto para asistir a casa de avivamiento'
              />
            </main>
          </ElementDelay>
        </div>
        <ElementDelay styles='flex-1 md:w-[50%] w-full'>
          <img src={casaAvivamiento} alt='Casa de avivamiento' width={660} height={734} />
        </ElementDelay>
      </article>
      <div className='my-32 py-20'>
        <ElementDelay styles='flex flex-col items-center gap-4'>
          <header className='flex flex-col gap-2 items-center'>
            <h1 className='text-3xl font-semibold'>Te esperamos </h1>
            <span className='text-secondary'>Hay una casa de avivamiento cerca de ti</span>
          </header>
        </ElementDelay>
        <div className='mt-12 w-full'>
          <Carousel />
        </div>
      </div>
    </>
  )
}
export default CasasAvivamiento
