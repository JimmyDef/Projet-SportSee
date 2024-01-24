import { Link } from "react-router-dom";
import logoYoga from "./../assets/yoga-icon.svg";
import logoSwim from "./../assets/swim-icon.svg";
import logoBike from "./../assets/biking-icon.svg";
import logoWorkOut from "./../assets/workout-icon.svg";
import styled from "styled-components";

const Aside = styled.aside`
 
  background-color: ${(props) => props.theme.colors.bgrd};
  width: 110px;
  min-height: calc(100dvh - ${(props) => props.theme.header.height} );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;


nav {
  margin-bottom: 240px;
}
ul {
  margin: 200px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 316px;
  width: 64px;
  li {
    background-color: white;
    width: 100%;
    height: 64px;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
a {
  &:hover {
    color: $color-primary;
  }
}
p {
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  transform: rotate(-90deg) translateX( 50%);
  width: 150px;
  

}

`;

function Sidebar() {
  return (
    <Aside className="">
      <nav>
        <ul>
          <li>
            <Link to="#">
              <img src={logoYoga} alt="logo yoga" />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={logoSwim} alt="logo nage " />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={logoBike} alt="logo vélo " />
            </Link>
          </li>
          <li>
            <Link to="#">
              <img src={logoWorkOut} alt="logo altère" />
            </Link>
          </li>
        </ul>
      </nav>
      <p>Copiryght, SportSee 2020</p>
    </Aside>
  );
}
export default Sidebar;
