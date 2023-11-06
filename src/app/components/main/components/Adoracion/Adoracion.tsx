import HeadingAnimation from "@/app/components/layouts/elements/HeadingAnimation";
import danzaImage from "src/assets/images/danza.webp";

const Adoracion = () => {
  return (
    <section
      className="flex items-center h-[600px] bg-fixed backdrop-opacity-60"
      style={{
        backgroundImage: `url(${danzaImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <HeadingAnimation>
        <h1 className="text-center font-light lg:pl-24 text-4xl text-white lg:w-[40%]">
          Lorem ipsum dolor sit ao quam totam nostrum voluptas explicabo ut
          ipsa? tibus iste pariatur incidunt!
        </h1>
      </HeadingAnimation>
    </section>
  );
};

export default Adoracion;
