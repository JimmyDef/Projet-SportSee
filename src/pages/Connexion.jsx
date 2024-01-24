import { Link } from "react-router-dom";
import styled from "styled-components";

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
  background-color: #020203;
  text-align: center;
  border-radius: 50px;
  padding: 8px;
  width: 200px;
     &:hover {
        color: #f1f1f1;
        background-color: red;
        // border: 1px solid #f1f1f1;
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

}
  `;

function Connexion() {
  return (
    <Section>
      <h1>Connexion</h1>
      <ul>
        <li>
          <Link to="/Profile/12">
            <p>Karl</p>
            <p>(id: 12)</p>
          </Link>
        </li>
        <li>
          <Link to="/Profile/18">
            <p>Cécilia</p>
            <p>(id: 18)</p>
          </Link>
        </li>
      </ul>
    </Section>
  );
}

export default Connexion;
