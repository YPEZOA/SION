import HeadingAnimation from "@/app/components/layouts/elements/HeadingAnimation";
import Cards from "@/app/components/main/components/Reuniones/components/Card/Cards";

const Reuniones = () => {
  return (
    <section className="px-8 md:px-24 py-10">
      <HeadingAnimation>
        <h1 className="font-thin tracking-[7px] text-2xl md:text-4xl uppercase text-black">
          nuestras <span className="font-extrabold">reuniones</span>
        </h1>
      </HeadingAnimation>
      <article className="my-10">
        <Cards/>
      </article>
    </section>
  );
};

export default Reuniones;
