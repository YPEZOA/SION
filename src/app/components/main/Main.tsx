import Contacto from "@/app/components/main/components/Contacto/Contacto";
import Adoracion from "./components/Adoracion/Adoracion";
import FirstContent from "./components/FirstContent/FirstContent";
import Reuniones from "./components/Reuniones/Reuniones";
import Vision from "./components/Vision/Vision";
import Canal from "@/app/components/main/components/Canal/Canal";
import Casas from "@/app/components/main/components/Casas/Casas";
import Servidores from "@/app/components/main/components/Servidores/Servidores";
import Radio from "@/app/components/main/components/Radio/Radio";

const Main = () => {
  return (
    <>
      <FirstContent />
      <Vision />
      <Reuniones />
      <Adoracion />
      <Casas />
      <Canal />
      <Contacto />
      <Servidores />
      <Radio />
    </>
  );
};

export default Main;
