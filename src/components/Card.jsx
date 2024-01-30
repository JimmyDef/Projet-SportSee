import PropTypes from "prop-types";
import styled from "styled-components";

const CountCard = styled.div`
    border-radius: 5px;
    padding-left: 32px;
    margin-bottom: 39px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.02);
    display: flex;
    width: 255px;
    height: 125px;
    background-color: ${(props) => props.theme.colors.color5};
    align-items: center;
  `;

const Div = styled.div` 
  margin-left: 24px;

    p:nth-child(1) {
        color: ${(props) => props.theme.colors.color3};
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 7px;
    }
    p:nth-child(2) {
        color: ${(props) => props.theme.colors.color4};
        font-size: 0.875rem;
        font-weight: 500;
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
