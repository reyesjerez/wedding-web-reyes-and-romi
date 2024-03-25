function Contact({ setShowContact }) {
  const handleClick = (event) => {
    setShowContact(false);
  };
  return (
    <>
      <div className="modal"></div>
      <div className="modal_flex">
        <section className="modal__content main">
          <i className="fa-solid fa-x modal__cross" onClick={handleClick}></i>
          <h2 className="modal__content__title yellow">
            Lolo y Coqueti te atienden
          </h2>
          <p className="confirm__item">
            <b>
              Si has llegado a esta web, deberías tener nuestro teléfono, pero
              por si acaso, aquí te dejamos nuestros números :)
            </b>
          </p>
          <p className="blue">
            <b>Romi:</b> +34 631 586 732
            <br />
            <b>Reyes:</b> +34 664 297 287
          </p>
        </section>
      </div>
    </>
  );
}

export default Contact;
