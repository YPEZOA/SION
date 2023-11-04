import HeadingAnimation from "@/app/components/layouts/elements/HeadingAnimation";
import SectionContainer from "@/app/components/layouts/elements/SectionContainer";
import Cards from "@/app/components/main/components/Reuniones/components/Card/Cards";

const Reuniones = () => {
  return (
    <div className="mb-40 mt-20">
      <HeadingAnimation>
        <h1 className="font-thin tracking-[2px] text-2xl md:text-4xl uppercase text-black">
          nuestras <span className="font-extrabold">reuniones</span>
        </h1>
      </HeadingAnimation>
      <SectionContainer>
        <Cards />
      </SectionContainer>
    </div>
  );
};

export default Reuniones;
