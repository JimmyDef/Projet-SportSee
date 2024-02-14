import useFetch from "../services/useFetch";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CalorieDetails from "../components/CalorieDetails";
import ScoreChart from "../components/ScoreChart";
import { colors } from "../variables";
import RadarActivityChart from "../components/RadarActivityChart";
import AverageSessionChart from "../components/AverageSessionChart";
import DailyBarChart from "../components/DailyBarChart";

const Container = styled.section`
margin: 40px 5%;
 @media (max-width: 1024px) {
  margin: 20px 3%;
  }
 }
`;
const ChartsWrapper = styled.section`
flex-wrap: wrap;
display: flex;
justify-content: space-between;
gap: 40px 10px;

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
    margin-bottom: 30px;
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;
const Div = styled.div` 
display: flex;
margin-bottom: 40px;
flex-direction: row-reverse;
justify-content: space-between;
gap: 30px ;
  @media (max-width: 1320px) {
  flex-direction:column;
  }
  @media (max-width: 1024px) {
  flex-direction:column;
  }
`;
function Profile() {
  const { id } = useParams();

  const data = useFetch("user", id);

  return (
    <Container>
      {!data || !data.userInfos ? (
        <Title>Chargement...</Title>
      ) : (
        <>
          <Title>
            <h1>
              Bonjour <span>{data.userInfos.firstName}</span>
            </h1>
            <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏 </h2>
          </Title>
          <Div>
            <CalorieDetails keyData={data.keyData} />
            <ChartsWrapper>
              <DailyBarChart />

              <AverageSessionChart />
              <RadarActivityChart />
              <ScoreChart score={data.score} />
            </ChartsWrapper>
          </Div>
        </>
      )}
    </Container>
  );
}

export default Profile;
