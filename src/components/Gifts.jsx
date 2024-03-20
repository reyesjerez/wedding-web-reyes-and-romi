import Hero from "./Hero";
import { useEffect } from "react";

function Gifts() {
  const claseHero = "hero__gifts";
  const title = "No queremos que te preocupes";
  const subtitle = "¡Así que el regalo no será un impedimento";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container__where">
      <Hero claseHero={claseHero} title={title} subtitle={subtitle}></Hero>
      <section className="main">
        <p className="main__text">
          <b className="yellow">¡¡Sin complicaciones!!</b>
        </p>
        <p className="main__text">
          Si te apetece tener un detallito con nosotras, te lo ponemos muy
          fácil.
        </p>

        <p className="main__text">
          Como la mayoría de ustedes saben, estamos reformando nuestra casita, y
          todavía necesitamos mucho material y muebles. Por ello, hemos optado
          por que puedan hacer donaciones a nuestra cuenta común, para que
          podamos seguir trabajando como albañilas profesionales.
        </p>
        <p className="main__text">
          Además sabemos que cada uno tiene unas posibilidades deferentes, por
          lo que dejamos a tu elección el hecho de aportar o la cantidad si
          decides hacerlo :)
        </p>

        <p className="main__text">
          <b className="yellow">
            ¡¡Tu aportación nos apoyará mucho y podremos seguir avanzando!!
          </b>
        </p>
        <div className="main__confirm2">
          <h4 className="main__confirm__title">Cómo aportar</h4>
          <p className="main__text">
            <b className="yellow">
              BIZUM: <br />
            </b>{" "}
            Al contacto de Reyes: <b>664 297 287</b>. <br />
            <br />
            <b className="yellow">
              TRANSFERENCIA: <br />
            </b>{" "}
            A nuestra cuenta común del Santander: <br />
            Romina Cabrera Pérez <br />
            <b>ES27 0049 5525 5127 1396 5734</b>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Gifts;
