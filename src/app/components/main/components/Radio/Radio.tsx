import SectionContainer from "@/app/components/layouts/elements/SectionContainer";

const Radio = () => {
  return (
    <div
      className="py-10 bg-[#1E1E1E] border-b-2 border-[#9FA3A9] bg-no-repeat bg-right bg-contain"
      style={{
        backgroundImage: `url(/src/assets/images/lineas.png)`,
      }}
    >
      <SectionContainer styles="my-0 md:px-32 flex flex-col md:flex-row text-center md:text-left justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-[#F9F9F9] font-extrabold tracking-tighter text-4xl mb-5 uppercase">
            ACOMPAÑANOS JUNTO A&nbsp;
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#F35700] to-[#FF912C]">
              radio7
            </span>
            <div className="bg-[#E9791A] w-[190px] h-[5px] mt-2 rounded-full"></div>
          </h1>
          <p className="mt-1 tracking-tight font-light text-[#9FA3A9] md:pr-40">
            Programacion "aviva la mañana"
            <span className="mb-10 font-bold text-[#D9D9D9] block">
              Dirigida por los hermanos Claudio y Jani
            </span>
            Nuestro principal y primer propósito es predicar con el evangelio en
            los corazones hambrientos. Nuestro deseo es llevar la palabra de
            Dios a todos los hogares.
          </p>
        </div>
        <div className="flex flex-col">
          <img
            src="/src/assets/icons/radio7-logo.png"
            alt="Radio 7"
            width={250}
          />
        </div>
      </SectionContainer>
    </div>
  );
};

export default Radio;
