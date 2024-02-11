import useFetch from "../services/useFetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CalorieDetails from "../components/CalorieDetails";
import ScoreChart from "../components/ScoreChart";
import { colors } from "../variables";
import RadarActivityChart from "../components/RadarActivityChart";
import AverageSessionChart from "../components/AverageSessionChart";
import DailyBarChart from "../components/DailyBarChart";

const Container = styled.div`
margin: 65px auto;
 @media (max-width: 1024px) {
  margin: 30px auto;
  }
 }
`;
const ChartsWrapper = styled.div`
flex-wrap: wrap;
display: flex;
gap: 20px;
section {
  border-radius: 5px;
  width: 260px;
  height: 260px;
   box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
}
`;

const Title = styled.section`
margin-bottom: 40px;
h1 {
font-size: 3rem;
font-weight: 500;
}
h2 {
font-size: 1.125rem;
font-weight: 400;
}
 span {
  color: ${colors.primary}
 };
  p {
  font-size: 1.125rem;
  }
  @media (max-width: 1024px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

function Profile() {
  const { id } = useParams();

  const userData = useFetch("user", id);

  return (
    <Container>
      {!userData || !userData.userInfos ? (
        <Title>Chargement...</Title>
      ) : (
        <>
          <Title>
            <h1>
              Bonjour <span>{userData.userInfos.firstName}</span>
            </h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏 </h2>
          </Title>
          <CalorieDetails keyData={userData.keyData} />
          <ChartsWrapper>
            <DailyBarChart />
            <ScoreChart score={userData.score} />
            <AverageSessionChart />
            <RadarActivityChart />
          </ChartsWrapper>
        </>
      )}
    </Container>
  );
}

export default Profile;
