function Confirm({ setShowModal }) {
  const handleInput = (event) => {
    const value = event.currentTarget;
  };
  const handleClick = (event) => {
    setShowModal(false);
  };
  return (
    <>
      <div className="modal"></div>
      <section className="modal__content main">
        <i className="fa-solid fa-x modal__cross" onClick={handleClick}></i>
        <h2 className="modal__content__title yellow">
          ¡¡Confirma tu asistencia!!
        </h2>
        <form
          className="confirm"
          action="https://formspree.io/f/xnqebybo"
          method="POST"
        >
          <label className="confirm__item" htmlFor="name">
            Nombre:{" "}
            <input
              className="confirm__item__input"
              type="text"
              name="name"
              id="name"
              required
              onInput={handleInput}
            />
          </label>

          <label className="confirm__item" htmlFor="phone">
            Teléfono:{" "}
            <input
              className="confirm__item__input"
              type="number"
              name="phone"
              id="phone"
              required
              onInput={handleInput}
            />
          </label>

          <label className="confirm__item" htmlFor="people">
            Cuántos sois:{" "}
            <input
              className="confirm__item__input"
              type="number"
              id="people"
              name="people"
              required
              onInput={handleInput}
            />
          </label>
          <input
            className=" confirm__btn  main__confirm__text"
            type="submit"
            value="CONFIRMAR!!"
          />
        </form>
      </section>
    </>
  );
}

export default Confirm;
