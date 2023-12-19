import AppstoreIcon from '@/app/UI/icons/Appstore'
import PlaystoreIcon from '@/app/UI/icons/PlayStore'
import ElementDelay from '@/app/components/layouts/elements/ElementDelay'
import SectionContainer from '@/app/components/layouts/elements/SectionContainer'

const Radio = () => {
  return (
    <div className='bg-gradient-to-br from-[#41405B] to-[#272640]'>
      <SectionContainer styles='flex flex-col lg:flex-row items-center'>
        <ElementDelay styles='flex flex-col flex-1'>
          <header className='uppercase font-semibold text-3xl text-white'>
            acompaña tus días con <span className='text-primary'>radio7</span>
            <div className='h-[3px] bg-primary rounded-full w-[180px] mt-0'></div>
          </header>
          <div className='mt-10 text-white flex flex-col gap-8'>
            <p className='text-[#D9D9D9]'>
              Programación <q>aviva la mañana</q> dirigida por
              <span className='font-semibold'> Claudio y Jani</span>
            </p>
            <q className='text-[#D9D9D9]'>
              Nuestro principal y primer propósito es predicar con el evangelio en los corazones
              hambrientos. Nuestro deseo es llevar la palabra de Dios a todos los hogares.
            </q>
            <div className='flex flex-col gap-3'>
              <p className='font-extralight'> Descarga nuestra app disponible para Android y IOS</p>
              <div className='flex gap-2'>
                <a
                  href='https://apps.apple.com/gt/app/radio-7-fm/id6446144759'
                  target='blank'
                  className='hover:scale-95'
                  aria-label='Apple'
                >
                  <AppstoreIcon />
                </a>
                <a
                  aria-label='Android'
                  href='https://play.google.com/store/apps/details?id=app.jeusnetapp.rad7fm&hl=es_CL&gl=US&pli=1'
                  target='blank'
                  className='hover:scale-95'
                >
                  <PlaystoreIcon />
                </a>
              </div>
            </div>
          </div>
        </ElementDelay>
        <ElementDelay delay={0.5} styles='w-[40%]'>
          <img
            className='mx-auto'
            src='src/assets/icons/radio7-logo.png'
            alt='Radio 7'
            width={250}
            height={250}
          />
        </ElementDelay>
      </SectionContainer>
    </div>
  )
}

export default Radio
