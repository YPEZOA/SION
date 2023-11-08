import ElementDelay from "@/app/components/layouts/elements/ElementDelay";
import SectionContainer from "@/app/components/layouts/elements/SectionContainer";
import backgroundContact from "src/assets/images/background-contact.webp";

const Contacto = () => {
  const whatsappChating = () => {
    const url = "https://wa.me/56920071717";
    window.open(url);
  };

  return (
    <section
      className="bg-no-repeat bg-cover bg-right h-[300px] flex items-center justify-center mt-20"
      style={{ backgroundImage: `url(${backgroundContact})` }}
    >
      <ElementDelay delay={0.2}>
        <SectionContainer styles="flex flex-col-reverse gap-10 md:flex-row xl:gap-40 items-center md:px-32">
          <button
            onClick={() => whatsappChating()}
            type="button"
            aria-label="Contacto Whatsapp"
            className=" transition-all duration-200 uppercase hover:bg-[#00781A] text-white bg-[#00BD2A] py-2 px-5 rounded-full flex items-center justify-center gap-2"
          >
            <img
              src="src/assets/icons/whatsapp-icon.png"
              alt="Whatsapp"
              width={30}
              height={20}
            />
            cont&aacute;ctanos
          </button>
          <h1 className="text-white text-center font-medium tracking-tight text-3xl">
            ¿Tienes dudas o necesitas consejer&iacute;a?
            <span className="block">No dudes en escribirnos</span>
          </h1>
        </SectionContainer>
      </ElementDelay>
    </section>
  );
};

export default Contacto;
