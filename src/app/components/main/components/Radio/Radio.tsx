import SectionContainer from "@/app/components/layouts/elements/SectionContainer";

const Radio = () => {
  return (
    <div
      className="py-10 bg-[#1E1E1E] border-b-2 border-[#9FA3A9] bg-no-repeat bg-right bg-contain"
      style={{
        backgroundImage: `url(src/assets/images/lineas.png)`,
      }}
    >
      <SectionContainer styles="my-1 lg:px-32 flex flex-col md:flex-row text-center md:text-left justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-[#F9F9F9] font-extrabold tracking-tighter text-4xl mb-5 uppercase">
            ACOMPAÑANOS JUNTO A&nbsp;
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#F35700] to-[#FF912C]">
              radio7
            </span>
            <div className="bg-[#E9791A] w-[190px] h-[5px] mt-2 rounded-full"></div>
          </h1>
          <p className="mt-1 tracking-tight font-light text-[#9FA3A9] md:pr-40">
            Programacion "aviva la mañana", <small>desde las 7:00 hasta las 9:30AM</small>
            <span className="mb-10 font-bold text-[#D9D9D9] block">
              Dirigida por los hermanos Claudio y Jani
            </span>
            Nuestro principal y primer propósito es predicar con el evangelio en
            los corazones hambrientos. Nuestro deseo es llevar la palabra de
            Dios a todos los hogares.
          </p>
          <article className="flex flex-col mt-4">
            <p className="tracking-tight text-white">
              Descarga nuestra App disponible para Android y IOS
            </p>
            <div className="flex items-center justify-center md:justify-normal gap-4 mt-1 transition-all">
              <a
                target="blank"
                href="https://play.google.com/store/apps/details?id=app.jeusnetapp.rad7fm&hl=es_CL&gl=US"
              >
                <img
                  className="cursor-pointer hover:opacity-70 duration-300"
                  src="src/assets/icons/playstore.png"
                  alt="Aplicacion Radio7 Android"
                  width={40}
                />
              </a>
              <a
                target="blank"
                href="https://apps.apple.com/gt/app/radio-7-fm/id6446144759"
              >
                <img
                  className="cursor-pointer mt-1 hover:opacity-70 duration-300"
                  src="src/assets/icons/appstore.png"
                  alt="Aplicacion Radio7 Apple"
                  width={28}
                />
              </a>
            </div>
          </article>
        </div>
        <div className="mt-10 md:mt-0">
          <img src="src/assets/icons/radio7-logo.png" alt="Radio 7" width={350} />
        </div>
      </SectionContainer>
    </div>
  );
};

export default Radio;
