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
          Tanto si vienes en Uber como si traes tu carro te esperamos{" "}
          <b>
            <a
              href="https://maps.app.goo.gl/BWvkRwvcQZcQscEP9"
              className="link-to"
              target="_blank"
            >
              AQUÍ
            </a>{" "}
            .
          </b>
        </p>
        <p>
          En este lugar el staff de nuestra boda te recibirá y te indicará como
          llegar al Jardín.
        </p>
        <p className="main__text">
          <b className="yellow">Estacionamiento</b>
        </p>
        <p className="main__text">
          Podrás estacionar tu carro en la dirección que indicamos arriba.
        </p>

        <div className="main__confirm2">
          <h4 className="main__confirm__title">Horarios</h4>
          <p className="main__text">
            <b className="yellow">18:00-19:00hs</b> Llegada al Jardín Zacapa en
            trajinera. <br />
            <b className="yellow">A partir de las 19:00</b> Llegada al Jardín
            caminando. <br />
            <br />
            <b className="yellow">02:00hs</b> Tenemos que dejar el Jardín
            Zacapa. <br />
            <b>
              Así que seguiremos el afterparty en el Centro de la Ciudad.
            </b>{" "}
            <br />
            <br />
          </p>
        </div>
      </section>
    </div>
  );
}

export default Where;
