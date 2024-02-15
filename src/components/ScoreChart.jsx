import styled from "styled-components";
import { RadialBarChart, RadialBar, Tooltip } from "recharts";
import PropTypes from "prop-types";
import { colors } from "../variables";
import { Loader } from "./loader/Loaders";

const Wrapper = styled.section`
position : relative;
background-color: ${colors.color5};`;

const P = styled.p`
text-align: center;
line-height: 250px;
color: ${colors.color1};
`;
const H3 = styled.h3`
position : absolute;
font-size: 15px;
font-weight: 500;
top: 25px;
left: 25px;
`;

const Content = styled.div`
font-size: 1.5rem;
font-weight: 700;
padding-top: 40px;
height: 155px;
width: 155px;
border-radius: 50%;
background-color: ${colors.color2};
transform: translate(-50%, -50%);
top: 50%;
left: 50%;
position : absolute;
text-align: center;
  p {
    text-align: center;
    line-height: 1.5rem;
    margin-top: 5px;
    font-size: 1rem;
    font-weight: 500;
    color: ${colors.color4};
  }
`;

function ScoreChart({ score }) {
  const data = [
    {
      scale: 100,
      fill: "transparent",
    },
    {
      scale: score,
      fill: colors.primary,
    },
  ];

  return (
    <Wrapper>
      <H3>Score</H3>
      <Content>
        {score}% <br />
        <p>
          de votre <br />
          objectif
        </p>
      </Content>
      <RadialBarChart
        width={260}
        height={260}
        innerRadius="50%"
        outerRadius="85%"
        data={data}
        barSize={13}
        startAngle={90}
        endAngle={450}>
        <RadialBar
          background={false}
          clockWise={true}
          cornerRadius={10}
          dataKey="scale"
        />

        <Tooltip active={false} />
      </RadialBarChart>
    </Wrapper>
  );
}
ScoreChart.propTypes = {
  score: PropTypes.number,
};
export default ScoreChart;
