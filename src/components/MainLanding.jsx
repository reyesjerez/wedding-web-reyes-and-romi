import Hero from "./Hero";
import { Link } from "react-router-dom";

function MainLanding({ setShowModal, setShowContact }) {
  const claseHero = "hero__main";
  const title = "18 de octubre de 2024";
  const subtitle = "Jardín Zacapa, Xochimilco";
  const handleClickModal = (event) => {
    setShowModal(true);
  };
  const handleClickContact = (event) => {
    setShowContact(true);
  };
  return (
    <main>
      <Hero claseHero={claseHero} title={title} subtitle={subtitle}></Hero>
      <section className="main">
        <p className="main__text">
          <b>💖 ¡¡El bodorrio salta el charco!! 💖</b>
        </p>
        <p className="main__text">
          {/* Queremos celebrar el amor que compartimos entre nosotras y con
          ustedes, por eso queremos invitarles el <b>18 de octubre</b> de este
          año a la celebración que tendrá lugar a las <b>18:00hs</b> en el{" "} */}
          Dicen las malas lenguas que ya hubo boda, sin embargo no hay
          matrimonio que valga sin una buena fiesta mexicana. Por eso queremos
          invitarles el <b>18 de octubre</b> a la celebración que tendrá lugar a
          las <b>18:00hs</b> en el{" "}
          <b>
            <a
              href="https://maps.app.goo.gl/BWvkRwvcQZcQscEP9"
              className="link-to"
              target="_blank"
            >
              Jardín Zacapa
            </a>
          </b>{" "}
          en <b>Xochimilco</b>, al sur de la Ciudad de México.
        </p>
        <p className="main__text">
          <b>Esperamos disfrutar de tu compañía.</b>
        </p>
        <div className="main__confirm">
          <h4>Confirma tu asistencia aquí:</h4>
          <p className="main__confirm__text" onClick={handleClickModal}>
            ¡YO LE CAIGO!
          </p>
        </div>
        <h4 className="main__text">
          Si tienes un ratito, nos gustaría que leyeras esta información:
        </h4>
        <div className="main__btn">
          <Link
            className="main__btn__info main__btn__info__1"
            to="/alojamiento"
          >
            DÓNDE ALOJARME
          </Link>
          <Link
            className="main__btn__info main__btn__info__2"
            to="/como-llegar"
          >
            CÓMO LLEGAR
          </Link>
          <Link className="main__btn__info main__btn__info__3" to="/regalos">
            MESA DE REGALOS
          </Link>
          <Link
            className="main__btn__info main__btn__info__4"
            to="/informacion-extra"
          >
            INFO EXTRA
          </Link>
          <div
            className="main__btn__info main__btn__info__5"
            onClick={handleClickContact}
          >
            CONTACTO
          </div>
        </div>

        <p className="postdata">
          La info que te enviamos en esta página puede cambiar en las semanas
          previas a la boda, porfi, compruébala la semana de antes :)
        </p>
      </section>
    </main>
  );
}

export default MainLanding;
