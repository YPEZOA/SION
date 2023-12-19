import Button from '@/app/UI/components/Button'
import ElementDelay from '../../layouts/elements/ElementDelay'
import AnimationInline from '../../layouts/elements/HeadingAnimation'
import SectionContainer from '../../layouts/elements/SectionContainer'
import escuelasImage from 'src/assets/images/escuelas.webp'
import Steps from './components/Steps'

const Escuelas = () => {
  return (
    <>
      <SectionContainer>
        <header>
          <ElementDelay styles='flex flex-col gap-4 md:flex-row justify-between items-center'>
            <h1 className='text-5xl'>Escuelas de la visión</h1>
            <p className='text-secondary w-full md:w-[40%]'>
              Se parte de nuestras escuelas y conoce la verdad en
              <span className='font-semibold'> Cristo Jesús</span>
            </p>
          </ElementDelay>
        </header>
      </SectionContainer>
      <div className='relative lg:h-screen'>
        <AnimationInline styles='flex justify-end'>
          <div className='absolute hidden md:block bg-primary left-0 lg:top-10 md:top-8 2xl:h-[90%] xl:h-[70%] h-[60%] w-[95%]'></div>
          <img
            className='w-full md:w-[95%] z-10'
            src={escuelasImage}
            alt='Aprendizaje'
            width={'95%'}
          />
        </AnimationInline>
      </div>
      <main>
        <SectionContainer styles='flex flex-col md:flex-row justify-between gap-20 md:pt-0 2xl:pt-32'>
          <ElementDelay styles='flex flex-col flex-1 gap-10'>
            <h1 className='font-semibold text-3xl'>¿Cómo funcionan?</h1>
            <p className='text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ibore
              et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor ibore et dolore magna aliqua.stairt
            </p>
            <Button
              customStyles='text-white w-max'
              text='quiero ir'
              accesibilityLabel='Inscribirse a escuelas'
              backgroundColor='bg-primary'
            />
          </ElementDelay>
          <ElementDelay styles='flex-1' delay={0.5}>
            <Steps />
          </ElementDelay>
        </SectionContainer>
      </main>
    </>
  )
}

export default Escuelas
