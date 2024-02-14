import PropTypes from "prop-types";
import Card from "./../components/Card";
import styled from "styled-components";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinIcon from "../assets/protein-icon.svg";
import carbsIcon from "../assets/carbs-icon.svg";
import lipIcon from "../assets/lipides-icon.svg";

const CardsContainer = styled.section`
margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;


  @media (max-width: 1320px) {
    width: 100%;
      flex-direction: row;
      margin-bottom: 8px;
      justify-content: space-between;
  align-items: space-between;

       img {
    width: 45px;
    height: 45px;
  }
    }
`;

function CalorieDetails({ keyData }) {
  return (
    <CardsContainer>
      <Card
        title={"Calories"}
        count={`${keyData.calorieCount}g`}
        img={caloriesIcon}
      />
      <Card
        title={"Proteines"}
        count={`${keyData.proteinCount}g`}
        img={proteinIcon}
      />
      <Card
        title={"Glucides"}
        count={`${keyData.carbohydrateCount}g`}
        img={carbsIcon}
      />
      <Card title={"Lipides"} count={`${keyData.lipidCount}g`} img={lipIcon} />
    </CardsContainer>
  );
}

CalorieDetails.propTypes = {
  keyData: PropTypes.shape({
    calorieCount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    proteinCount: PropTypes.number,
    carbohydrateCount: PropTypes.number,
    lipidCount: PropTypes.number,
  }),
};
export default CalorieDetails;
