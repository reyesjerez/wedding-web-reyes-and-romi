import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__title" text="REYES + ROMI">
        REYES + ROMI
      </Link>
      <nav className="header__menu">
        <Link
          to="/alojamiento"
          className="header__menu__item"
          text="Alojamiento"
        >
          ALOJAMIENTO
        </Link>
        <Link
          to="/como-llegar"
          className="header__menu__item"
          text="Cómo llegar"
        >
          CÓMO LLEGAR
        </Link>
        <Link to="/regalos" className="header__menu__item" text="Regalos">
          REGALOS
        </Link>
        <Link
          to="/informacion-extra"
          className="header__menu__item"
          text="Info Extra"
        >
          INFO EXTRA
        </Link>
      </nav>
    </header>
  );
}

export default Header;
