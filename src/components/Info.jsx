import Hero from "./Hero";
import { Link } from "react-router-dom";

function Info() {
  const claseHero = "hero__info";
  const title = "Todas tus preguntas aquí";
  const subtitle = "Queremos que estés enterada de todo";
  return (
    <div className="container__where">
      <Hero claseHero={claseHero} title={title} subtitle={subtitle}></Hero>
      <section className="main">
        <p className="main__text">
          <b className="yellow">¿¿Tienes dudas??</b>
        </p>
        <p className="main__text">
          Resolvemos todas tus preguntas, y si todavía te quedan dudas, llámanos
          :)
        </p>

        <div className="main__confirm2">
          <h4 className="main__confirm__title">
            PREGUNTAS QUE NOS HABÉIS HECHO <br /> (Y OTRAS QUE NO)
          </h4>

          <p className="main__text">
            <b className="yellow">
              HORARIO <br />
            </b>{" "}
            El bodorrio empezará a las 19:00hs, pero{" "}
            <b>el autobús te recogerá a las 18:15 o 18:30</b> según vengas desde
            Arenas o desde El Hornillo. Consulta los horarios en{" "}
            <Link to="/como-llegar/" className="link-to">
              cómo llegar
            </Link>
            . <br />
          </p>
          <p className="main__text">
            <b className="yellow">VESTIMENTA</b>
            <br />
            No hay ningún tipo de código de vestimenta, puedes venir{" "}
            <b>como tú quieras.</b>
            <br />
            <b>Sabemos que estarás guapx con lo que decidas ponerte.</b>
          </p>
          <p className="main__text">
            <b className="yellow">
              {" "}
              ZAPATOS <br />
            </b>{" "}
            El suelo (piso) de todo el lugar en el que se celebrará la boda es
            de césped (pasto), por lo que recomendamos llevar{" "}
            <b>zapato plano</b> y cómodo.
          </p>
          <p className="main__text">
            <b className="yellow">
              {" "}
              QUÉ TENGO QUE LLEVAR <br />
            </b>{" "}
            Absolutamente nada, solamente <b>tu presencia.</b> <br />
            Si tienes alguna necesidad especial o algo que puedas necesitar
            durante el tiempo que estemos juntas, no dudes en escribirnos.
            Haremos todo lo posible para que estés cómodx.
          </p>
          <p className="main__text">
            <b className="yellow">
              {" "}
              COMIDA <br />
            </b>{" "}
            Toda la comida de nuestra boda será <b>
              vegetariana y vegana
            </b>. <br />
            Te pedimos por favor que así siga siendo :)
          </p>
        </div>
      </section>
    </div>
  );
}

export default Info;
