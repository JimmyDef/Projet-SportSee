import { RadarChart, ResponsiveContainer } from "recharts";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import useFetch from "../services/useFetch";
import {
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
} from "recharts";
import styled from "styled-components";
import { colors } from "../variables";

const Wrapper = styled.section`
background-color: ${colors.color3};
`;
const TooltipBox = styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
border: 1px solid ${colors.color1};
line-height: 30px;
text-align: center;
  background-color: ${colors.color2};
  p {
    color: ${colors.color1};
    font-size: 0.8rem;
    
  }
  ;`;
function RadarActivityChart() {
  const { id } = useParams();

  const perfData = useFetch("userPerformance", id);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <TooltipBox>
          <p>{`${payload[0].value}`}</p>
        </TooltipBox>
      );
    }
    return null;
  };
  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };

  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          outerRadius={70}
          data={perfData}
          startAngle={30}
          endAngle={-330}>
          <PolarGrid gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            radius="100%"
            tickLine={false}
            dy={4}
            dataKey="subject"
            fontSize={12}
            stroke="white"
            tickSize={15}
          />
          <PolarRadiusAxis
            angle={30}
            tick={false}
            axisLine={false}
            domain={[0, 260]}
          />
          <Radar
            dataKey="value"
            stroke="transparent"
            fill={colors.primary}
            fillOpacity={0.8}
          />
          <Tooltip content={CustomTooltip} cursor={false} />
        </RadarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

export default RadarActivityChart;
