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

          <small className="flex justify-end items-center">
            <div className="h-1 w-1 rounded-md bg-red-500 mr-1"></div> señal en
            vivo
          </small>
        </div>
      </ElementDelay>
      <div className="md:flex justify-between items-center mt-12 md:mt-3">
        <HeadingAnimation>
          <article className="xl:w-[80%] flex flex-col md:mb-0 mb-3">
            <div className="flex items-center">
              <img
                src="/src/assets/icons/youtube-logo.png"
                alt="Canal Youtube"
                width={30}
                height={30}
              />
              <span>Casa Si&oacute;n Santiago</span>
              <a
                href="https://www.youtube.com/@CasaSionSantiago"
                target="blank"
              >
                <img
                  className="ml-1 mb-1"
                  src="/src/assets/icons/external-link.png"
                  alt="Link Canal"
                  width={20}
                  height={20}
                />
              </a>
            </div>
            <h1 className="text-3xl sm:font-black lg:text-5xl tracking-tighter">
              Suscr&iacute;bete a nuestro canal de Youtube
            </h1>
          </article>
        </HeadingAnimation>
        <ElementDelay delay={0.5} styles="w-[100%] xl:w-[50%] 2xl:w-[30%]">
          <iframe
            className="rounded-xl"
            src="https://www.youtube.com/embed/g9A9Kw-Da0I?autoplay=1&mute=1"
            allow="autoplay; encrypted-media"
            title="video"
            height={240}
            width={"100%"}
            loading="lazy"
          ></iframe>
        </ElementDelay>
      </div>
    </section>
  );
};

export default Canal;
