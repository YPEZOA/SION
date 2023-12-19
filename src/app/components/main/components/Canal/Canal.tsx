import Button from '@/app/UI/components/Button'
import Youtube from '@/app/UI/icons/Youtube'
import ElementDelay from '@/app/components/layouts/elements/ElementDelay'
import SectionContainer from '@/app/components/layouts/elements/SectionContainer'

const Canal = () => {
  const gotoCanal = () => {
    window.open('https://www.youtube.com/@CasaSionSantiago', '_blank')
  }

  return (
    <SectionContainer>
      <ElementDelay>
        <header className='text-center'>
          <small className='uppercase text-primary font-semibold'>se&ntilde;al en vivo</small>
          <h1 className='font-semibold mt-2 text-2xl lg:w-5/12 mx-auto'>
            Suscribete a nuestro canal de Youtube
          </h1>
        </header>
      </ElementDelay>
      <main className='flex flex-col md:flex-row w-full gap-8 mt-8'>
        <ElementDelay styles='bg-gray-500 h-[350px] lg:w-[100%] 2xl:w-6/12'>
          <div>
            <h1>h1</h1>
          </div>
        </ElementDelay>
        <ElementDelay styles='flex flex-col gap-8 justify-between'>
          <span className='text-2xl font-semibold'>
            <div className='w-[120px] bg-primary block h-[3px] rounded-full mb-10'></div>
            Domingos de gloria!
          </span>
          <p className='text-secondary xl:text-lg w-10/12'>
            No te pierdas cada domingo la <span className='font-bold'>se&ntilde;al en vivo</span>{' '}
            por nuestro canal, desde las <span className='font-bold'>11:00am</span>
          </p>
          <Button
            onClickEvent={() => gotoCanal()}
            backgroundColor='bg-primary'
            customStyles='text-white w-max'
            text='ir al canal'
            accesibilityLabel='Ir a canal de Youtube'
            icon={<Youtube />}
          />
        </ElementDelay>
      </main>
    </SectionContainer>
  )
}

export default Canal
