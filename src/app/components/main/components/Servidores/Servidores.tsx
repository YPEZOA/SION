import ElementDelay from '@/app/components/layouts/elements/ElementDelay'
import SectionContainer from '@/app/components/layouts/elements/SectionContainer'

const Servidores = () => {
  return (
    <SectionContainer>
      <div className='flex flex-col md:flex-row gap-10'>
        <ElementDelay styles='relative flex-1 flex justify-center h-[530px]'>
          <img
            className='absolute top-0 left-0 hidden md:block'
            src='src/assets/images/servidores2.png'
            alt='Servidores'
            width={360}
            height={360}
          />
          <div className='w-[360px] h-[360px] bg-secondary mt-14 '></div>
          <img
            className='absolute bottom-0 right-0'
            src='src/assets/images/servidores1.png'
            alt='Servidores'
            width={360}
            height={360}
          />
        </ElementDelay>
        <ElementDelay delay={0.5} styles='flex flex-col justify-between md:w-[40%] xl:w-[50%]'>
          <header className='font-semibold text-2xl'>
            <div className='w-[180px] bg-primary block h-[3px] rounded-full mb-10'></div>
            Porque el hijo del hombre no vino para ser servido, sino para servir, y para dar su vida
            en rescate por muchos.
          </header>
          <p className='text-secondary'>
            Nam libero justo laoreet sit amet cursus sit amet quis commodo odio aenean sed
            adipiscing diam eu sem integer vitae justo eget mi in nulla posuere sollicitudin aliquam
            ultrices sagittis orci nulla facilisi cras fermentum odio.
          </p>
          <p className='text-secondary'>Sé un servidor de tu casa</p>
        </ElementDelay>
      </div>
    </SectionContainer>
  )
}

export default Servidores
