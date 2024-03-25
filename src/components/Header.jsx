import { Link } from "react-router-dom";

function Header({ showMenu, setShowMenu }) {
  const handleClickNav = (event) => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };
  const handleClick = (event) => {
    setShowMenu(false);
  };
  return (
    <header className="header">
      <Link
        to="/"
        className="header__title"
        text="REYES + ROMI"
        onClick={handleClick}
      >
        REYES + ROMI
      </Link>
      <i
        className="fa-solid fa-bars fa-xl pepino responsive"
        onClick={handleClickNav}
      ></i>
      {showMenu && (
        <nav className="header__responsive ">
          <Link
            to="/alojamiento"
            className="header__responsive__item"
            text="Alojamiento"
            onClick={handleClickNav}
          >
            ALOJAMIENTO
          </Link>
          <Link
            to="/como-llegar"
            className="header__responsive__item"
            text="Cómo llegar"
            onClick={handleClickNav}
          >
            CÓMO LLEGAR
          </Link>
          <Link
            to="/regalos"
            className="header__responsive__item"
            text="Regalos"
            onClick={handleClickNav}
          >
            REGALOS
          </Link>
          <Link
            to="/informacion-extra"
            className="header__responsive__item"
            text="Info Extra"
            onClick={handleClickNav}
          >
            INFO EXTRA
          </Link>
        </nav>
      )}
      <nav className="header__menu  ">
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
