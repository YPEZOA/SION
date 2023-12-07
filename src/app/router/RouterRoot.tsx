import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Main from '../components/main/Main'
import Footer from '@/app/components/footer/Footer'
import EscuelasWeta from '../components/pages/Escuelas/Escuelas'
import ScrollToTop from '../components/scroll/ScrollToTop'
import { CasasAvivamiento } from '../components/pages/CasasAvivamiento/CasasAvivamiento'

export const RouterRoot = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <div className='flex flex-col min-h-screen'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/escuelas' element={<EscuelasWeta />} />
          <Route path='/casas-avivamiento' element={<CasasAvivamiento />} />
          <Route path='/contacto' element={<Main />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}
