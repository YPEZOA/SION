import ElementDelay from '@/app/components/layouts/elements/ElementDelay'
import HeadingAnimation from '@/app/components/layouts/elements/HeadingAnimation'
import SectionContainer from '@/app/components/layouts/elements/SectionContainer'

const Casas = () => {
  return (
    <>
      <HeadingAnimation hasBackground>
        <h1 className='font-thin tracking-[2px] text-3xl md:text-4xl uppercase text-[#F9F9F9]'>
          nuestra <span className='font-extrabold'>red</span>
        </h1>
      </HeadingAnimation>
      <SectionContainer>
        <div className='flex flex-col gap-10 md:gap-0 md:flex-row items-center justify-around mt-20'>
          <ElementDelay>
            <div className='text-center flex flex-col items-center gap-30 justify-center'>
              <img
                className='drop-shadow-[0_0_3px_#646464]'
                src='src/assets/icons/sion-santiago.png'
                alt='Casa Sion Santiago'
                width={70}
              />
              <span className='text-lg xl:text-3xl mt-1 block font-bold tracking-tighter text-gray-500'>
                La Florida
              </span>

              <h1 className='text-lg tracking-tighter text-gray-500 leading-7 xl:text-1xl'>
                Dr. Sotero Del Río #77
                <div className='flex justify-center mt-1 gap-2'>
                  <a href='https://www.instagram.com/casa_sion_santiago_/' target='blank'>
                    <img
                      className='opacity-40'
                      src='src/assets/icons/instagram.png'
                      alt='Instagram casa Santiago'
                      width={25}
                      height={25}
                    />
                  </a>
                  <a href='https://www.facebook.com/CasaSionSantiagoo' target='blank'>
                    <img
                      className=' opacity-40'
                      src='src/assets/icons/facebook.png'
                      alt='Facebook casa Santiago'
                      width={25}
                      height={25}
                    />
                  </a>
                </div>
              </h1>
            </div>
          </ElementDelay>
          <ElementDelay delay={0.5}>
            <div className='text-center flex flex-col items-center'>
              <img
                className='drop-shadow-[0_0_3px_#646464]'
                src='src/assets/icons/sion-rancagua.png'
                alt='Casa Sion Rancagua'
                width={70}
              />
              <span className='text-lg xl:text-3xl mt-1 font-bold block tracking-tighter text-gray-500'>
                Rancagua
              </span>

              <h1 className='text-lg tracking-tighter text-gray-500 leading-7 xl:text-1xl'>
                Camino A Doñihue 20
              </h1>
              <div className='flex justify-center mt-1 gap-2'>
                <a href='https://www.facebook.com/CasaSionRancagua' target='blank'>
                  <img
                    className=' opacity-40'
                    src='src/assets/icons/facebook.png'
                    alt='Instagram casa Rancagua'
                    width={25}
                    height={25}
                  />
                </a>
              </div>
            </div>
          </ElementDelay>
          <ElementDelay delay={0.6}>
            <div className='text-center flex flex-col items-center'>
              <img
                className='drop-shadow-[0_0_3px_#646464]'
                src='src/assets/icons/sion-iquique.png'
                alt='Casa Sion Iquique'
                width={70}
              />
              <span className='text-lg xl:text-3xl mt-1 block font-bold tracking-tighter text-gray-500'>
                Iquique
              </span>

              <h1 className='text-lg tracking-tighter text-gray-500 leading-7 xl:text-1xl'>
                Patricio lynch #1351
              </h1>
              <div className='flex justify-center mt-1 gap-2'>
                <a href='https://www.instagram.com/casasioniquique/' target='blank'>
                  <img
                    className='opacity-40'
                    src='src/assets/icons/instagram.png'
                    alt='Instagram casa Iquique'
                    width={25}
                    height={25}
                  />
                </a>
                <a href='https://www.facebook.com/profile.php?id=100082932891928' target='blank'>
                  <img
                    className=' opacity-40'
                    src='src/assets/icons/facebook.png'
                    alt='Facebook casa Iquique'
                    width={25}
                    height={25}
                  />
                </a>
              </div>
            </div>
          </ElementDelay>
        </div>
      </SectionContainer>
    </>
  )
}

export default Casas
