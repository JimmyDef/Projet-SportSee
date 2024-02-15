import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../variables";

const CountCard = styled.div`
border-radius: 5px;
padding: 0 32px;
box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
display: flex;
width: 230px;
height: 125px;
background-color: ${colors.color5};
align-items: center;
@media (max-width: 1320px) {
  width: 200px;
  height: 80px;
}
@media (max-width: 1320px) {
  flex-direction: row;
  width: 165px;
  height: 70px;
  padding: 0 15px;
}  `;

const Div = styled.div` 
margin-left: 24px;
  p:nth-child(1) {
    color: ${colors.color3};
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 7px;
 }
  p:nth-child(2) {
    color: ${colors.color4};
    font-size: 0.875rem;
    font-weight: 500;
  }

@media (max-width: 1024px) {
  margin-left: 18px;
  p:nth-child(1) {
    font-size: 1rem;
  }
}
  `;

const Card = ({ title, count, img }) => {
  return (
    <CountCard>
      <img src={img} alt={`Logo ${title}`} />
      <Div>
        <p>{count}</p>
        <p>{title}</p>
      </Div>
    </CountCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  count: PropTypes.string,
  img: PropTypes.string,
};

export default Card;
