import ElementDelay from '@/app/components/layouts/elements/ElementDelay'
import contentBackground from 'src/assets/images/first-content.png'
import ArrowDown from '@/app/UI/icons/ArrowDown'

const FirstContent = () => {
  return (
    <section
      className='h-screen bg-no-repeat bg-cover bg-center'
      style={{
        backgroundImage: `url(${contentBackground})`,
      }}
    >
      <div className='flex flex-col items-center justify-between h-full'>
        <div></div>
        <ElementDelay delay={0.2} styles='text-white text-center'>
          <p className='text-3xl md:text-5xl w-11/12 lg:w-8/12 mx-auto mt-40 font-semibold'>
            <span className='h-1 bg-white mb-14 w-1/6 mx-auto'></span>
            Para los hombres es imposible, más para Dios todo es posible.
            <br />
            <span className='text-sm text-primary'>Mateo 19:26</span>
          </p>
        </ElementDelay>
        <ElementDelay delay={0.6}>
          <ArrowDown />
        </ElementDelay>
      </div>
    </section>
  )
}

export default FirstContent
