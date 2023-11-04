import ElementDelay from "@/app/components/layouts/elements/ElementDelay";
import HeadingAnimation from "@/app/components/layouts/elements/HeadingAnimation";
import SectionContainer from "@/app/components/layouts/elements/SectionContainer";
import visionImage from "/image5.jpg";

const Vision = () => {
  return (
    <>
      <HeadingAnimation hasBackground>
        <h1 className="font-thin tracking-[5px] text-2xl md:text-4xl uppercase text-[#F9F9F9]">
          nuestra <span className="font-extrabold">visión</span>
        </h1>
      </HeadingAnimation>
      <div className="flex bg-white">
        <SectionContainer>
          <ElementDelay>
            <p className="text-[#656565]">
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
          </ElementDelay>
        </SectionContainer>
        <div
          style={{
            backgroundAttachment: "fixed",
            backgroundImage: `url(${visionImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "right",
            width: "100%",
            minHeight: "90vh",
          }}
        ></div>
      </div>
    </>
  );
};

export default Vision;
