import useFetch from "../services/useFetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinIcon from "../assets/protein-icon.svg";
import carbsIcon from "../assets/carbs-icon.svg";
import lipIcon from "../assets/lipides-icon.svg";
import Card from "./../components/Card";

const Container = styled.div`
margin: 65px auto;
// margin-top: 65px;
// display: flex;

`;

const Title = styled.section`
margin-bottom: 75px;
h1 {
font-size: 3rem;
font-weight: 500;
}

 span {
  color: ${(props) => props.theme.colors.primary}
 };
  p {
  font-size: 1.125rem;
  }
`;
const CardsContainer = styled.section`

`;

const ChatsContainer = styled.section`

`;

function Profile() {
  const { id } = useParams();

  const userData = useFetch("user", id, "formatData");
  if (!userData || !userData.userInfos) {
    return <Title>Chargement...</Title>;
  }

  return (
    <Container>
      <Title>
        <h1>
          Bonjour <span>{userData.userInfos.firstName}</span>
        </h1>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
      </Title>
      <CardsContainer>
        <Card
          title={"Calories"}
          count={`${userData.keyData.calorieCount}g`}
          img={caloriesIcon}
        />
        <Card
          title={"Proteines"}
          count={`${userData.keyData.proteinCount}g`}
          img={proteinIcon}
        />
        <Card
          title={"Glucides"}
          count={`${userData.keyData.carbohydrateCount}g`}
          img={carbsIcon}
        />
        <Card
          title={"Lipides"}
          count={`${userData.keyData.lipidCount}g`}
          img={lipIcon}
        />
      </CardsContainer>
    </Container>
  );
}

export default Profile;
