import Hero from "./Hero";
import { useEffect } from "react";

function Hotels() {
  const claseHero = "hero__hotels";
  const title = "¿No sabes dónde alojarte?";
  const subtitle = "No te preocupes, nosotras te ayudamos";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container__hotels">
      <Hero claseHero={claseHero} title={title} subtitle={subtitle}></Hero>
      <section className="main">
        <p className="main__text">
          <b className="yellow">¡¡Te damos algunas ideas!!</b>
        </p>
        <p className="main__text">
          Algunxs de ustedes se alojarán en nuestra casa o en casa de nuestros
          familiares, pero por desgracia no tenemos sitio para todxs...
        </p>
        <p className="main__text">
          Aqui les dejamos algunas <b>opciones de hospedaje</b>, para que puedan
          disfrutar más de este lindo día. Todas las opciones se encuentran en
          el <b>centro del pueblo</b>, están pensadas para que tengas todo lo
          necesario, sin romperte mucho la cabeza.
        </p>
        <div className="main__confirm2">
          <h4 className="main__confirm__title">Aquí tienes el listado</h4>
          <ul className="main__list">
            <li className="main__confirm__text">
              <a
                className="main__list__item__link"
                href=" https://hostalelcastilloarenas.com/"
                target="_blank"
              >
                Hostal El Castillo de Arenas
              </a>
            </li>
            <li className="main__confirm__text">
              <a
                className="main__list__item__link"
                href="https://www.posadamia.com/posada-triste-condesa"
                target="_blank"
              >
                Posada La Triste Condesa
              </a>
            </li>
            <li className="main__confirm__text">
              <a
                className="main__list__item__link"
                href="http://www.hostal-avenida.com/"
                target="_blank"
              >
                Hostal Avenida
              </a>
            </li>
            <li className="main__confirm__text">
              <a
                className="main__list__item__link"
                href="https://retirorural.com/"
                target="_blank"
              >
                El Retiro
              </a>
            </li>
            <li className="main__confirm__text">
              <a
                className="main__list__item__link"
                href="https://www.booking.com/hotel/es/hostal-sierra-de-gredos.es.html?aid=375033&label=sierra-de-gredos-8yaD3kvpwwpZTDbrgL3T4wS261305933886%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-181873117683%3Akwd-13241692547%3Alp9047044%3Ali%3Adec%3Adm&sid=ee82e7993dc8116f2d4fe7ab77a76112&dest_id=-371250;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1710688760;srpvid=54bb6bb3613b015e;type=total;ucfs=1&#hotelTmpl"
                target="_blank"
              >
                {" "}
                Hostal Sierra de Gredos
              </a>{" "}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Hotels;
