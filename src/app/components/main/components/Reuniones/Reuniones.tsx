import SectionContainer from '@/app/components/layouts/elements/SectionContainer'
import Cards from './components/Card/Cards'
import ElementDelay from '@/app/components/layouts/elements/ElementDelay'
import Button from '@/app/UI/components/Button'

const Reuniones = () => {
  return (
    <div className='bg-neutral_light'>
      <SectionContainer>
        <ElementDelay>
          <header className='text-center'>
            <small className='uppercase text-primary text-[18px]'>reuniones</small>
            <h1 className='text-semibold mt-2 text-2xl lg:w-5/12 mx-auto'>
              Hay tiempo para todo lo que se hace bajo el cielo
            </h1>
          </header>
        </ElementDelay>
        <main>
          <Cards />
        </main>
        <ElementDelay>
          <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-12 mt-10'>
            <Button
              text='casas de avivamiento'
              accesibilityLabel='Ir a pantalla Casas de avivamiento'
              border
            />
            <Button
              text='escuelas de la visión'
              accesibilityLabel='Ir a pantalla Escuelas de la visión'
              border
            />
          </div>
        </ElementDelay>
      </SectionContainer>
    </div>
  )
}

export default Reuniones
