import Hero from "./Hero";
import { useEffect } from "react";

function Where() {
  const claseHero = "hero__where";
  const title = "¡Te lo ponemos fácil!";
  const subtitle = "Aquí tienes todos los detalles para llegar a la hora";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container__where">
      <Hero claseHero={claseHero} title={title} subtitle={subtitle}></Hero>
      <section className="main">
        <p className="main__text">
          <b className="yellow">¡¡Cómo llegar a nuestra boda!!</b>
        </p>
        <p className="main__text">
          Tenemos una norma fundamental, no pueden llevar el coche al lugar de
          celebración.
        </p>
        <p className="main__text">
          <b className="yellow">¿Cómo es eso posible?</b>
        </p>
        <p className="main__text">
          Como no queremos que nadie se arriesgue yendo por las curvas de vuelta
          a casa, tenemos un autobús que lo hará por ustedes.
        </p>

        <div className="main__confirm2">
          <h4 className="main__confirm__title">Horarios del autobús</h4>
          <p className="main__text">
            <b className="yellow">18:00hs:</b> Recogida en la plaza del Castillo
            (Arenas). <br />
            <b className="yellow">18:15hs:</b> Recogida en la fuente del puente
            (El Hornillo). <br />
            <b className="yellow">18:30hs:</b> Llegada a la finca. <br />
            <b className="yellow">1:00hs:</b> Salida de la Finca con parada en
            El Hornillo y Arenas. <br />
            <b className="yellow">4:00hs:</b> Salida de la Finca con parada en
            El Hornillo y Arenas.
            <br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default Where;
