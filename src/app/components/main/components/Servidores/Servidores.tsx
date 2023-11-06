import ElementDelay from "@/app/components/layouts/elements/ElementDelay";
import HeadingAnimation from "@/app/components/layouts/elements/HeadingAnimation";
import SectionContainer from "@/app/components/layouts/elements/SectionContainer";
import servidoresImage from "src/assets/images/image8.png";

const Servidores = () => {
  return (
    <section className="mt-40 bg-white">
      <HeadingAnimation hasBackground styles="text-right">
        <h1 className="font-thin tracking-[3px] text-2xl md:text-4xl uppercase text-[#F9F9F9]">
          <span className="font-extrabold">servidores</span> en casa
        </h1>
      </HeadingAnimation>
      <div className="flex">
        <div
          style={{
            backgroundAttachment: "fixed",
            backgroundImage: `url(${servidoresImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "left",
            width: "100%",
            minHeight: "90vh",
          }}
        ></div>
        <SectionContainer>
          <ElementDelay styles="flex flex-col justify-between text-[#656565] text-right">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad miLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad miLorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad mi , consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad mi , consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad
            </p>
            <small className="grow font-bold">No te quedes fuera</small>
          </ElementDelay>
        </SectionContainer>
      </div>
    </section>
  );
};

export default Servidores;
