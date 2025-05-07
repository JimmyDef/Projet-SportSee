import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../variables";

const Section = styled.section`
margin: 150px auto;
h1 {
  text-align: center;
  margin-bottom: 100px;
}
ul {
  display: flex;
  flex-direction: row;
  gap: 150px;
  list-style: none;
}
li {
  box-shadow: rgba(0, 0, 0, 0.6) 0px 3px 8px;
  background-color: ${colors.color1};
  text-align: center;
  border-radius: 50px;
  padding: 8px;
  width: 200px;
  transition: all 0.3s;
  &:hover {
      shadow: 5px 0 10px black; 
    background-color:${colors.primary};
   
    
  }
}
  a {
    color: white;
    text-decoration: none;
    display: block;
    p:nth-child(1) {
      margin-bottom: 5px;
    }
    p:nth-child(2) {
      font-size: 0.8rem;
    }

  }
`;

function Connexion() {
  return (
    <Section>
      <h1>Connexion</h1>
      <ul>
        <li>
          <Link to="/profile/12">
            <p>Karl</p>
            <p>(id: 12)</p>
          </Link>
        </li>
        <li>
          <Link to="/profile/18">
            <p>Cécilia</p>
            <p>(id: 18)</p>
          </Link>
        </li>
      </ul>
    </Section>
  );
}

export default Connexion;
