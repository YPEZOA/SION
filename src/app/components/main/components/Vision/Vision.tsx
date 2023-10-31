import HeadingAnimation from "@/app/components/layouts/elements/HeadingAnimation";
import SectionContainer from "@/app/components/layouts/elements/SectionContainer";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  url: string;
  text: string;
  styles?: string;
  transitionDelay?: number;
}

const Card = ({ url, text, styles, transitionDelay }: Props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const elementVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: { delay: transitionDelay, duration: 0.8 },
    },
    hidden: { y: 40, opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      ref={ref}
      variants={elementVariants}
      className={`${styles} shadow-[0_0_10px_#767676] flex flex-col items-start justify-center h-[382px] md:w-[246px] w-[100%] rounded-3xl`}
      style={{
        backgroundImage: `url(${url})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <span className="text-white font-extralight text-2xl tracking-[3px] pl-10 mt-10">
        {text}
      </span>
    </motion.div>
  );
};

const Vision = () => {
  return (
    <div className="bg-[#e7e7e7] my-10 py-2">
      <SectionContainer>
        <HeadingAnimation>
          <h1 className="font-thin tracking-[2px] text-2xl md:text-4xl uppercase text-black">
            nuestra <span className="font-extrabold">visión</span>
          </h1>
        </HeadingAnimation>
        <div className="grid place-items-center lg:place-items-center md:place-items-start sm:grid-cols-2 lg:grid-cols-4 my-10">
          <Card
            url="/src/assets/images/evangelizar.webp"
            text="Evangelizar"
            transitionDelay={0.2}
          />
          <Card
            url="/src/assets/images/afirmar.webp"
            text="Afirmar"
            styles="mt-10"
            transitionDelay={0.3}
          />
          <Card
            url="/src/assets/images/discipular.webp"
            text="Discipular"
            styles="mt-10 md:mt-0"
            transitionDelay={0.5}
          />
          <Card
            url="/src/assets/images/enviar.webp"
            text="Enviar"
            styles="mt-10"
            transitionDelay={0.7}
          />
        </div>
      </SectionContainer>
    </div>
  );
};

export default Vision;
