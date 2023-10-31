import ElementDelay from "@/app/components/layouts/elements/ElementDelay";
import contentBackground from "/src/assets/images/first-content.webp";
import { colors } from "@/constants/colors";

const FirstContent = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-end md:h-[758px]"
      style={{
        backgroundImage: `url(${contentBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="flex flex-col items-center pb-10 md:pb-10">
        <ElementDelay
          delay={0.5}
          styles="mb-10 md:mb-32 text-white text-center"
        >
          <p className="font-thin text-4xl md:text-8xl tracking-tighter drop-shadow-[2px_0_2px_#000]">
            Red Casa <span className="font-black">Sion</span>
          </p>
          <p className="mt-5 px-5 drop-shadow-[3px_0_1px_#000]">
            Para los hombres es imposible, más para Dios todo es posible.
            <br />
            <span style={{ color: colors.orangeSecondary500 }}>
              Mateo 19:26
            </span>
          </p>
        </ElementDelay>
        <ElementDelay delay={0.2}>
          <img
            className="pointer-events-none"
            src="/src/assets/icons/arrow-down.png"
            alt="Down page icon"
            width={50}
            height={26}
          />
        </ElementDelay>
      </div>
    </section>
  );
};

export default FirstContent;
