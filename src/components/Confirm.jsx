function Confirm() {
  const handleInput = (event) => {
    const value = event.currentTarget;
  };

  return (
    <div className="modal">
      <section className="modal__content">
        <h2 className="modal__content__title">¡¡Confirma tu asistencia!!</h2>
        <form className="confirm">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" onInput={handleInput} />
          <label htmlFor="phone">Teléfono:</label>
          <input type="number" id="phone" onInput={handleInput} />
          <label htmlFor="people">Cuántos sois:</label>
          <input type="number" id="people" onInput={handleInput} />
          <input type="button" value="Confirmado!!" />
        </form>
      </section>
    </div>
  );
}

export default Confirm;
