import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import logoSportSee from "./../../assets/logo-sportsee.svg";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logoSportSee} alt="logo SportSee" />
      </Link>
      <nav className={style.nav}>
        <ul className={style.ul}>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/">Profil</Link>
          </li>
          <li>
            <Link to="/">Réglage</Link>
          </li>
          <li>
            <Link to="/">Communauté</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
