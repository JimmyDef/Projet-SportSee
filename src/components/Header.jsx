import { Link } from "react-router-dom";
// import style from "./Header.module.scss";
import logoSportSee from "./../assets/logo-sportsee.svg";
import styled from "styled-components";

const MainHeader = styled.header`
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: ${(props) => props.theme.header.height};
  background-color: ${(props) => props.theme.colors.bgrd};
  color: ${(props) => props.theme.colors.color2};
  a {
    color: ${(props) => props.theme.colors.color2};
  }
  nav {
    width: 100%;
  }
  ul {
    display: flex;
    justify-content: space-around;
    }`;

const LogoLink = styled.div` 
  margin: 0 40px 0 28px;
  `;

function Header() {
  return (
    <MainHeader>
      <LogoLink to="/">
        <img src={logoSportSee} alt="logo SportSee" />
      </LogoLink>
      <nav>
        <ul>
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
    </MainHeader>
  );
}

export default Header;
