import { Suspense, lazy } from 'react'
import ElementDelay from '../../layouts/elements/ElementDelay'
import SectionContainer from '../../layouts/elements/SectionContainer'
const Header = lazy(() => import('./components/Head/Head'))
const Information = lazy(() => import('./components/Information/Information'))

const Escuelas = () => {
  return (
    <>
      <Suspense fallback={<h1>Cargando</h1>}>
        <Header />
      </Suspense>
      <SectionContainer styles='mt-30 mb-30 lg:mb-40 text-center relative'>
        <img src='src/assets/images/bird.png' className='absolute top-12 lg:top-0 z-[-1]' alt='Pigeot' width={80} />
        <img
          src='src/assets/images/bird2.png'
          className='absolute bottom-0 lg:bottom-10 right-20 z-[-1]'
          alt='Pigeot'
          width={50}
        />
        <ElementDelay>
          <h1 className='text-[#1E1E1E] font-[OhBaby] text-[42px] lg:text-[48px]'>
            ¿Como funcionan las escuelas?
          </h1>
        </ElementDelay>
        <ElementDelay delay={0.7} styles='px-5 lg:px-20 mt-10'>
          <p className='text-justify leading-8 lg:text-[22px]'>
            Los martes de cada semana nos reunimos en
            <span className='font-semibold'> Casa Sion Santiago </span>
            para impartir nuestras escuelas que constan de tres etapas:
            Nuevos Comienzos,
            Discípulos y
            Líderes. El horario de ingreso es desde las
            <span className='font-semibold'> 19:30pm</span> donde comenzamos con adoración y
            alabanza.
          </p>
          <p className='text-justify mt-8 leading-8 lg:text-[22px]'>
            Uno de los requisitos para aprobar cada escuela es con{' '}
            <span className='font-semibold'>asistencia</span>; para Nuevos Comienzos se necesita una
            asistencia del 90%, para Discípulos un 95% y para Lideres un 100%. Finalizando el
            periodo de clases se realizará un examen.
          </p>
        </ElementDelay>
      </SectionContainer>
      <Suspense fallback={<h1>Cargando</h1>}>
        <Information />
      </Suspense>
    </>
  )
}

export default Escuelas
