import ScrollCarousel from 'scroll-carousel-react'
import CarouselItem from './CarouselItem'
import { carouselItems } from '@/constants/carouselItems'
import ElementDelay from '@/app/components/layouts/elements/ElementDelay'

const Carousel = () => {
  return (
    <ElementDelay>
      <ScrollCarousel autoplay speed={6} smartSpeed direction='ltr'>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} data={item} />
        ))}
      </ScrollCarousel>
    </ElementDelay>
  )
}
export default Carousel
