import SectionContainer from '@/app/components/layouts/elements/SectionContainer'
import Cards from './components/Card/Cards'
import ElementDelay from '@/app/components/layouts/elements/ElementDelay'
import Button from '@/app/UI/components/Button'
import { useNavigate } from 'react-router-dom'

const Reuniones = () => {
  const navigate = useNavigate()

  const goToCasasavivamiento = () => {
    navigate('/casas-avivamiento')
  }

  const goToEscuelas = () => {
    navigate('/escuelas')
  }

  return (
    <div className='bg-neutral_light'>
      <SectionContainer>
        <ElementDelay>
          <header className='text-center'>
            <span className='uppercase text-primary font-semibold'>reuniones</span>
            <h1 className='font-semibold mt-2 text-2xl lg:w-5/12 mx-auto'>
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
              onClickEvent={() => goToCasasavivamiento()}
              text='casas de avivamiento'
              accesibilityLabel='Ir a pantalla Casas de avivamiento'
              border
            />
            <Button
              onClickEvent={() => goToEscuelas()}
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
