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
            <b>el autobús te recogerá a las 18:15hs o 18:30hs</b> según vengas
            desde Arenas o desde El Hornillo. Consulta los horarios en{" "}
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
              CÓMO LLEGAR DESDE MADRID <br />
            </b>{" "}
            Si vienes desde Madrid, hay varios autobuses a Arenas de San Pedro
            cada día.
            <br />
            No suelen llenarse, pero para evitar sustos os recomendamos{" "}
            <b>comprar los billetes con antelación</b>. <br />
            Los podéis encontrar en la web de{" "}
            <a className="link-to" href="https://samar.es/" target="_blank">
              Samar
            </a>
            .
          </p>
          <p className="main__text">
            <b className="yellow">
              {" "}
              QUÉ TENGO QUE LLEVAR<br />
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
          <p className="main__text">
            <b className="yellow">
              {" "}
              TEMPERATURAS <br />
            </b>{" "}
            Mayo en esta zona es de lo más impredecible, así que pidamos todxs 
            que no llueva.
            <br />
            De todas formas contamos con una máxima de 25-30º en el día y
            alrededor de los 15º en la noche.{" "}
            <b>Os recomendamos traer una rebequita/chamarrita.</b>
          </p>
          <p className="main__text">
            <b className="yellow">
              {" "}
              VOY SOLX Y ME DA COSITA <br />
            </b>{" "}
            No te preocupes, muchxs de nuestrxs amigxs venís solxs, y estamos
            convencidas de que <b>lo vais a pasar genial</b>.
            <br />
            De todas formas si necesitáis que os presentemos a alguien o no os
            sentís cómodxs en algún momento, solo tenéis que decírnoslo.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Info;
