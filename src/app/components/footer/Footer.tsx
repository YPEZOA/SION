import SectionContainer from '@/app/components/layouts/elements/SectionContainer';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='py-10 bg-[#1E1E1E]'>
      <SectionContainer styles='md:px-32 flex justify-between items-center my-1'>
        <div className='flex flex-col'>
          <h1 className='text-[#F9F9F9] font-extrabold tracking-tighter text-3xl mb-5'>
            Casa Sion Santiago
            <div className='bg-[#9FA3A9] w-[90px] h-[5px] mt-2 rounded-full'></div>
          </h1>
          <p className='text-[#9FA3A9] font-thin'>Dr. Sotero del rio #77</p>
          <p className='text-[#9FA3A9] font-thin'>La Florida, Chile</p>
          <small className='text-[#D9D9D9] mt-3'>©2023 Casa Sion Santiago.</small>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-[#F9F9F9] font-extrabold tracking-tighter  mb-5'>
            Conoce m&aacute;s
            <div className='bg-[#9FA3A9] w-[60px] h-[5px] mt-1 rounded-full'></div>
          </h1>
          <Link
            className='text-[#F9F9F9] hover:text-[#cccc] active:text-[#cccc]'
            to={'/casas-avivamiento'}
          >
            Casas de avivamiento
          </Link>
          <Link
            className='text-[#F9F9F9] hover:text-[#cccc] active:text-[#cccc] inline-block'
            to={'/contacto'}
          >
            Contacto
          </Link>
        </div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
