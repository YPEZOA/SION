import LocationIcon from '@/app/UI/icons/Location'

interface CarouselProps {
  comuna: string
  direccion: string
}

type Carousel = {
  data: CarouselProps
}

const CarouselItem: React.FC<Carousel> = ({ data }) => {
  const { comuna, direccion } = data
  return (
    <div className='flex flex-col justify-between bg-gradient-to-br from-[#41405B] to-[#272640] text-white rounded-[8px] h-[180px] w-[380px] py-10 px-10'>
      <h1 className='text-xl'>
        <div className='bg-primary h-[3px] w-[100px] mb-2'></div>
        {comuna}
      </h1>
      <span className='font-extralight flex items-end gap-1'>
        <LocationIcon />
        {direccion}
      </span>
    </div>
  )
}

export default CarouselItem
