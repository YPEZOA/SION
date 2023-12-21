import SectionContainer from '@/app/components/layouts/elements/SectionContainer'
import { Link } from 'react-router-dom'
import logoSion from 'src/assets/icons/casa-sion-logo.png'

const Footer = () => {
  return (
    <footer className='bg-secondary relative'>
      <SectionContainer styles='flex flex-col gap-10 md:flex-row md:justify-between items-start md:items-center text-white relative py-14'>
        <div className='flex flex-col'>
          <img className='mb-4 opacity-70' src={logoSion} alt='Sion logo' width={35} height={35} />
          <h1 className='text-[#F9F9F9] font-extrabold tracking-tighter text-3xl mb-5'>
            Casa Sion Santiago
            <div className='bg-primary w-[90px] h-[5px] mt-2 rounded-full'></div>
          </h1>
          <p className='font-thin'>Dr. Sotero del rio #77</p>
          <p className='font-thin'>La Florida, Chile</p>
          <small className='mt-3'>©2023 Casa Sion Santiago.</small>
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-white font-extrabold tracking-tighter  mb-5'>
            Conoce m&aacute;s
            <div className='bg-primary w-[60px] h-[5px] mt-1 rounded-full'></div>
          </h1>
          <Link className=' hover:text-[#cccc] active:text-[#cccc]' to={'/casas-avivamiento'}>
            Casas de avivamiento
          </Link>
          <Link className='hover:text-[#cccc] active:text-[#cccc] inline-block' to={'/contacto'}>
            Contacto
          </Link>
        </div>
      </SectionContainer>
    </footer>
  )
}

export default Footer
