import FirstContent from './components/FirstContent/FirstContent'
import Reuniones from './components/Reuniones/Reuniones'
import Vision from './components/Vision/Vision'
import Canal from '@/app/components/main/components/Canal/Canal'
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
      <div className='divide-y-2'>
        <Canal />
        <Servidores />
      </div>
      <Radio />
    </>
  )
}

export default Main
