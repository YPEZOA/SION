import escuelasInfoimage from 'src/assets/images/escuelas-infobackground.webp'
import Cards from './components/Cards'

const Information = () => {
  return (
    <section className='relative flex justify-end'>
      <div
        className='bg-no-repeat bg-fixed bg-cover lg:w-[70%] h-[665px] bg-left flex items-center justify-end'
        style={{ backgroundImage: `url(${escuelasInfoimage})` }}
      >
        <img
          className='absolute left-3 top-0'
          src='src/assets/images/bird.png'
          alt='Pigeot'
          width={120}
          height={120}
        />
        <img
          className='absolute left-12 bottom-20'
          src='src/assets/images/bird2.png'
          alt='Pigeot'
          width={100}
          height={100}
        />
        <div className='lg:ml-10 absolute lg:left-10'>
          <Cards />
        </div>
      </div>
    </section>
  )
}

export default Information
