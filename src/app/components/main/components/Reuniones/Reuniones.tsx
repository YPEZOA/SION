import HeadingAnimation from "@/app/components/layouts/elements/HeadingAnimation";
import SectionContainer from "@/app/components/layouts/elements/SectionContainer";
import Cards from "@/app/components/main/components/Reuniones/components/Card/Cards";

const Reuniones = () => {
  return (
    <>
      <HeadingAnimation styles="mt-10">
        <h1 className="font-thin tracking-[2px] text-2xl md:text-4xl uppercase text-black">
          nuestras <span className="font-extrabold">reuniones</span>
        </h1>
      </HeadingAnimation>
      <SectionContainer>
        <Cards />
      </SectionContainer>
    </>
  );
};

export default Reuniones;
