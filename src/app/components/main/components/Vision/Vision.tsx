import PlusIcon from '@/app/UI/icons/PlusIcon'
import ElementDelay from '@/app/components/layouts/elements/ElementDelay'
import SectionContainer from '@/app/components/layouts/elements/SectionContainer'

const Vision = () => {
  return (
    <SectionContainer>
      <ElementDelay delay={0.3}>
        <article className='flex flex-col md:flex-row w-full gap-8'>
          {/* Images */}
          <div className='w-full md:w-[50%] flex gap-5'>
            <div className='flex items-center'>
              <img src='src/assets/images/vision-image1.png' alt='Evangelización' />
            </div>
            <div className='flex flex-col justify-between'>
              <img src='src/assets/images/vision-image2.png' alt='Afirmar' />
              <img src='src/assets/images/vision-image3.png' alt='Discipular' />
            </div>
          </div>

          {/* Information */}
          <div className='w-full gap-8 md:gap-0 md:w-[50%] xl:w-[40%] flex flex-col justify-between '>
            <header className='text-2xl font-semibold'>
              <div className='w-[180px] bg-primary block h-[3px] rounded-full mb-10'></div>
              Lorem ipsum dolor sit amet, conse enim ad miLorem{' '}
            </header>
            <main className='text-secondary xl:text-lg'>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad miLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut lab”
            </main>
            <div className='flex gap-4'>
              <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-2'>
                  <PlusIcon />
                  <span className='text-secondary font-semibold'>Evangelizar</span>
                </div>
                <div className='flex items-center gap-2'>
                  <PlusIcon />
                  <span className='text-secondary font-semibold'>Discipular</span>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-2'>
                  <PlusIcon />
                  <span className='text-secondary font-semibold'>Afirmar</span>
                </div>
                <div className='flex items-center gap-2'>
                  <PlusIcon />
                  <span className='text-secondary font-semibold'>Enviar</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </ElementDelay>
    </SectionContainer>
  )
}

export default Vision
