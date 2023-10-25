import ElementDelay from "@/app/components/layouts/elements/ElementDelay";
import HeadingAnimation from "@/app/components/layouts/elements/HeadingAnimation";

const Canal = () => {
  return (
    <section
      className=" bg-white px-8 md:px-24 py-10 md:h-[400px]"
      style={{
        backgroundImage: "url('/src/assets/images/sion.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "container",
        backgroundPosition: "right",
      }}
    >
      <ElementDelay>
        <div className="text-right leading-4">
          <p>
            Cada <span className="font-black">Domingo</span> a las 11:00hrs.
          </p>
          <small>señal en vivo</small>
        </div>
      </ElementDelay>
      <div className="flex justify-between items-center mt-3">
        <HeadingAnimation styles="2xl:w-[30%]">
          <article className="flex flex-col">
            <div className="flex items-center">
              <img
                src="/src/assets/icons/youtube-logo.png"
                alt="Canal Youtube"
                width={30}
                height={30}
              />
              <span>Casa Si&oacute;n Santiago</span>
            </div>
            <h1 className="font-black text-5xl tracking-tighter">
              Suscr&iacute;bete a nuestro canal de Youtube
            </h1>
          </article>
        </HeadingAnimation>
        <iframe
          className="rounded-xl w-[100%] md:w-[50%] xl:w-[40%]"
          src="https://www.youtube.com/embed/g9A9Kw-Da0I"
          height={240}
        ></iframe>
      </div>
    </section>
  );
};

export default Canal;
