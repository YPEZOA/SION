import Button from '@/app/UI/components/Button'
import WhatsappIcon from '@/app/UI/icons/WhatsappIcon'
import ElementDelay from '@/app/components/layouts/elements/ElementDelay'
import danzaImage from 'src/assets/images/mid-content.webp'

const MidContent = () => {
  return (
    <div className='min-h-screen'>
      <section
        className='relative flex justify-center h-[600px] bg-no-repeat bg-cover bg-center md:bg-right bg-fixed'
        style={{
          backgroundImage: `url(${danzaImage})`,
        }}
      >
        <article className='absolute bottom-[-20%] bg-white w-full lg:w-9/12 xl:w-8/12 min-h-[280px] py-10 px-4 lg:py-20 lg:px-24 md:rounded-[5px] shadow-[0px_0px_5px_rgba(0,0,0,0.3)]'>
          <ElementDelay>
            <div className='flex flex-col items-center md:flex-row lg:divide-x-2 justify-between'>
              <div className='flex flex-col gap-4 md:gap-0 items-center md:items-start md:pr-20'>
                <h1 className='text-center md:text-left text-2xl font-semibold'>
                  ¿Tienes dudas o necesitas consejería?
                </h1>
                <span className='text-secondary mt-3'>No dudes en escribirnos</span>
              </div>
              <div>
                <div className='md:ml-20'>
                  <Button
                    customStyles='py-5 px-5 rounded-[5px] hover:scale-95'
                    accesibilityLabel='Chat Whatsapp'
                    icon={<WhatsappIcon />}
                    backgroundColor='bg-primary'
                  />
                </div>
              </div>
            </div>
          </ElementDelay>
        </article>
      </section>
    </div>
  )
}

export default MidContent
