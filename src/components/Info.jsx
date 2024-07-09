import Hero from "./Hero";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Info() {
  const claseHero = "hero__info";
  const title = "Todas tus preguntas aquí";
  const subtitle = "Queremos que estés enteradx de todo";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container__where">
      <Hero claseHero={claseHero} title={title} subtitle={subtitle}></Hero>
      <section className="main">
        <p className="main__text">
          <b className="yellow">¿¿Tienes dudas??</b>
        </p>
        <p className="main__text">
          Resolvemos todas tus preguntas, y si todavía te quedan dudas,
          escríbenos :)
        </p>

        <div className="main__confirm2">
          <h4 className="main__confirm__title">
            PREGUNTAS QUE NOS HAN HECHO <br /> (Y OTRAS QUE NO)
          </h4>

          <p className="main__text">
            <b className="yellow">
              HORARIO <br />
            </b>{" "}
            El bodorrio empezará a las 18:00hs, pero tendrás que estar un
            poquito antes{" "}
            <a
              href="https://maps.app.goo.gl/BWvkRwvcQZcQscEP9"
              className="link-to"
              target="_blank"
            >
              AQUÍ
            </a>
            . Si aún te quedan dudas, puedes consultar toda la información en
            <Link to="/como-llegar/" className="link-to">
              {" "}
              cómo llegar
            </Link>
            . <br />
          </p>
          <p className="main__text">
            <b className="yellow">VESTIMENTA</b>
            <br />
            El código de vestimenta para nuestra boda es{" "}
            <b> Cocktail Elegante.</b>
            <br />
            <b>Te pedimos por favor que intentes evitar estos colores:</b>
            <div className="bullet__container">
              <div className="bullet white"></div>
              <div className="bullet bourgundy"></div>
            </div>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Info;
