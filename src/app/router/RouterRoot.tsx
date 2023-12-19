import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import Footer from '@/app/components/footer/Footer'
import ScrollToTop from '../components/scroll/ScrollToTop'
import CasasAvivamiento from '../components/pages/CasasAvivamiento/CasasAvivamiento'
import Escuelas from '../components/pages/Escuelas/Escuelas'
import useMain from '../components/main/useMain'
import ArrowUpScroll from '../UI/icons/Arrowup'

export const RouterRoot = () => {
  const { scrollPosition } = useMain()
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <div className='relative flex flex-col min-h-screen'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/casas-avivamiento' element={<CasasAvivamiento />} />
          <Route path='/escuelas' element={<Escuelas />} />
          <Route path='/contacto' element={<Main />} />
        </Routes>
        {scrollPosition >= 1000 && (
          <button
            onClick={() => window.scrollTo(0, 0)}
            className='right-4 bottom-5 md:right-10 md:bottom-20 fixed bg-primary rounded-full p-2 hover:scale-95'
            type='button'
            aria-labelledby='Scroll al inicio'
          >
            <ArrowUpScroll />
          </button>
        )}
      </div>
      <Footer />
    </BrowserRouter>
  )
}
