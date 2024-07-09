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
          Como la mayoría de ustedes saben, estamos reformando nuestra casita en
          España, y todavía necesitamos mucho material y muebles. Por ello,
          hemos optado por que puedan hacer donaciones a nuestra cuenta común,
          para que podamos seguir trabajando como albañilas profesionales cuando
          volvamos.
        </p>
        <p className="main__text">
          Además sabemos que cada unx tiene unas posibilidades diferentes, por
          lo que dejamos a tu elección el hecho de aportar o la cantidad, si
          decides hacerlo :)
        </p>

        <p className="main__text">
          <b className="yellow">
            ¡¡Tu aportación nos ayudará mucho y podremos seguir avanzando!!
          </b>
        </p>
        <div className="main__confirm2">
          <h4 className="main__confirm__title">Cómo aportar</h4>
          <p className="main__text">
            <b className="yellow">
              TRANSFERENCIA: <br />
            </b>{" "}
            A nuestra cuenta común del BBVA: <br />
            Liliana Romina Cabrera Pérez <br />
            <b>CLABE: 0121 8001 5639 723363</b>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Gifts;
