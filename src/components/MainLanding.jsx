import Hero from "./Hero";
import { Link } from "react-router-dom";

function MainLanding({ setShowModal }) {
  const claseHero = "hero__main";
  const title = "18 de mayo de 2024";
  const subtitle = "Arenas de San Pedro";
  const handleClick = (event) => {
    setShowModal(true);
  };
  return (
    <main>
      <Hero claseHero={claseHero} title={title} subtitle={subtitle}></Hero>
      <section className="main">
        <p className="main__text">
          <b>💖 ¡¡Se acerca el bodorrio!! 💖</b>
        </p>
        <p className="main__text">
          Queremos celebrar el amor que compartimos entre nosotras y con
          ustedes, por eso queremos invitarles el <b>18 de mayo</b> de este año
          a la celebración que tendrá lugar en el <b>Jardín del Rio</b> en{" "}
          <b>Arenas de San Pedro</b>, el pueblito en el que vivimos.
        </p>
        <p className="main__text">
          <b>Esperamos disfrutar de tu compañía.</b>
        </p>
        <div className="main__confirm">
          <h4>Confirma tu asistencia aquí:</h4>
          <p className="main__confirm__text" onClick={handleClick}>
            ¡YO VOY!
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
          <Link className="main__btn__info main__btn__info__5" to="/">
            CONTACTO
          </Link>
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
