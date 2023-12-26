import Button from '@/app/UI/components/Button'
import FaceIcon from '@/app/UI/icons/FaceIcon'
import InstaIcon from '@/app/UI/icons/Instagram'
import ElementDelay from '@/app/components/layouts/elements/ElementDelay'
import SectionContainer from '@/app/components/layouts/elements/SectionContainer'
import { colors } from '@/constants/colors'
import sionIquique from 'src/assets/images/sion-iquique.png'
import sionRancagua from 'src/assets/images/sion-rancagua.png'
import sionSantiago from 'src/assets/images/sion-santiago.png'

const Casas = () => {
  const handleGoTo = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className='bg-[#F9F9F9]'>
      <SectionContainer>
        <div className='flex flex-col justify-center items-center'>
          <ElementDelay>
            <header className='text-center'>
              <h1 className='font-semibold text-black text-3xl mb-6'>
                Asiste a tu Casa más cercana
              </h1>
              <p className='text-secondary md:w-4/6 mx-auto'>
                Sino que siguiendo la verdad en amor, crezcamos en todo en aquel que es la cabeza,
                esto es, <span className='font-semibold'> Cristo</span>.
              </p>
            </header>
          </ElementDelay>
          <ElementDelay styles='w-full'>
            <main className='flex flex-col gap-5 md:gap-0  justify-around items-center  md:flex-row mt-16'>
              <div className='flex flex-col items-center shadow-lg pb-5 w-[290px] bg-white'>
                <img
                  className='w-full'
                  src={sionIquique}
                  alt='Casa sion Iquique'
                  width={120}
                  height={120}
                />
                <h1 className='text-2xl mt-5 font-semibold'>Sion Iquique</h1>
                <p className='text-secondary mt-5'>Patricio Lynch #1351</p>
                <div className='mt-4 flex gap-1'>
                  <Button
                    onClickEvent={() => handleGoTo('https://www.instagram.com/casasioniquique/')}
                    customStyles='py-1 px-1'
                    accesibilityLabel='Instagram Sion Santiago'
                    icon={<InstaIcon color={colors.secondary} />}
                  />

                  <Button
                    onClickEvent={() =>
                      handleGoTo('https://www.facebook.com/profile.php?id=100082932891928')
                    }
                    customStyles='py-1 px-1'
                    accesibilityLabel='Instagram Sion Santiago'
                    icon={<FaceIcon color={colors.secondary} />}
                  />
                </div>
                <div className='mt-10 h-1 bg-primary w-[80px] rounded-full'></div>
              </div>
              <div className='flex flex-col items-center pb-5 shadow-lg w-[290px] bg-white'>
                <img
                  className='w-full'
                  src={sionRancagua}
                  alt='Casa sion Rancagua'
                  width={120}
                  height={120}
                />
                <h1 className='text-2xl font-semibold mt-5'>Sion Rancagua</h1>
                <p className='text-secondary mt-5'>Camino a Doñihue 20</p>
                <div className='mt-4 flex gap-1'>
                  <Button
                    onClickEvent={() => handleGoTo('https://www.facebook.com/CasaSionRancagua')}
                    customStyles='py-1 px-1'
                    accesibilityLabel='Instagram Sion Santiago'
                    icon={<FaceIcon color={colors.secondary} />}
                  />
                </div>
                <div className='mt-10 h-1 bg-primary w-[80px] rounded-full'></div>
              </div>
              <div className='flex flex-col items-center pb-5 shadow-lg w-[290px] bg-white'>
                <img
                  className='w-full'
                  src={sionSantiago}
                  alt='Casa sion Santiago'
                  width={120}
                  height={120}
                />
                <h1 className='text-2xl font-semibold mt-5'>Sion Santiago</h1>
                <p className='text-secondary mt-5'>Dr. Sotero del río #77</p>
                <div className='mt-4 flex gap-1'>
                  <Button
                    onClickEvent={() =>
                      handleGoTo('https://www.instagram.com/casa_sion_santiago_/')
                    }
                    customStyles='py-1 px-1'
                    accesibilityLabel='Instagram Sion Santiago'
                    icon={<InstaIcon color={colors.secondary} />}
                  />
                  <Button
                    onClickEvent={() => handleGoTo('https://www.facebook.com/CasaSionSantiagoo')}
                    customStyles='py-2 px-1'
                    accesibilityLabel='Instagram Sion Santiago'
                    icon={<FaceIcon color={colors.secondary} />}
                  />
                </div>
                <div className='mt-10 h-1 bg-primary w-[80px] rounded-full'></div>
              </div>
            </main>
          </ElementDelay>
        </div>
      </SectionContainer>
    </div>
  )
}

export default Casas
