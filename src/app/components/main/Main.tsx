import Contacto from '@/app/components/main/components/Contacto/Contacto'
import FirstContent from './components/FirstContent/FirstContent'
import Reuniones from './components/Reuniones/Reuniones'
import Vision from './components/Vision/Vision'
import Canal from '@/app/components/main/components/Canal/Canal'
import Casas from '@/app/components/main/components/Casas/Casas'
import Servidores from '@/app/components/main/components/Servidores/Servidores'
import Radio from '@/app/components/main/components/Radio/Radio'
import MidContent from './components/MidContent/MidContent'

const Main = () => {
  return (
    <>
      <FirstContent />
      <Vision />
      <Reuniones />
      <MidContent />
      <Canal />
      <Radio />
    </>
  )
}

export default Main
