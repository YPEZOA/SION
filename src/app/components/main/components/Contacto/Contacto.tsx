const Contacto = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/src/assets/images/danza.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: " 300px",
      }}
      className="flex justify-center items-center my-20"
    >
      <button
        className="uppercase"
        type="button"
        aria-label="Contacto Whatsapp"
      >
        Cont&aacute;ctanos
      </button>
    </section>
  );
};

export default Contacto;
