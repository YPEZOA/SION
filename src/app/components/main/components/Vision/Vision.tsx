import ElementDelay from '@/app/components/layouts/elements/ElementDelay';
import HeadingAnimation from '@/app/components/layouts/elements/HeadingAnimation';
import SectionContainer from '@/app/components/layouts/elements/SectionContainer';

import visionImage from 'src/assets/images/vision-image.png';

const Vision = () => {
  return (
    <>
      <HeadingAnimation hasBackground>
        <h1 className='font-thin tracking-[5px] text-2xl md:text-4xl uppercase text-[#F9F9F9]'>
          nuestra <span className='font-extrabold'>visión</span>
        </h1>
      </HeadingAnimation>
      <div className='flex flex-col lg:flex-row md:flex-col-reverse bg-white'>
        <SectionContainer styles='flex flex-col gap-20'>
          <ElementDelay>
            <p className='text-[#656565] text-center md:text-left'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad miLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad miLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mi ,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad mi , consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad
            </p>
          </ElementDelay>

          <ElementDelay>
            <ul className='flex flex-col gap-4'>
              <li className='flex gap-4 items-center'>
                <img src='src/assets/icons/plus-icon.png' alt='Plus Icon' width={20} height={20} />
                <span className='tracking-wider font-bold'>Evangelizar</span>
              </li>
              <li className='flex gap-4 items-center'>
                <img src='src/assets/icons/plus-icon.png' alt='Plus Icon' width={20} height={20} />
                <span className='tracking-wider font-bold'>Afirmar</span>
              </li>
              <li className='flex gap-4 items-center'>
                <img src='src/assets/icons/plus-icon.png' alt='Plus Icon' width={20} height={20} />
                <span className='tracking-wider font-bold'>Discipular</span>
              </li>
              <li className='flex gap-4 items-center'>
                <img src='src/assets/icons/plus-icon.png' alt='Plus Icon' width={20} height={20} />
                <span className='tracking-wider font-bold'>Enviar</span>
              </li>
            </ul>
          </ElementDelay>
        </SectionContainer>
        <div
          className='hidden md:block bg-fixed bg-no-repeat bg-contain bg-right w-full min-h-screen md:h-80'
          style={{
            backgroundImage: `url(${visionImage})`,
          }}
        ></div>
      </div>
    </>
  );
};

export default Vision;
