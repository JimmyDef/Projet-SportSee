import styled from "styled-components";
import { useParams } from "react-router-dom";
import {
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import PropTypes from "prop-types";
import { colors } from "../variables";
import useFetch from "../services/useFetch";

const Wrapper = styled.section`
position : relative;
  background-color: ${colors.primary};
   font-size: 1.2rem;
  
`;
const H3 = styled.h3`
position : absolute;
top: 25px;
left: 25px;
border-radius: 5px;
 color: ${colors.color2};
 opacity: 0.5;
font-weight: 400;

   font-size: 1rem;
  
`;
const TooltipBox = styled.div`
width: 55px;
height: 30px;
line-height: 30px;
text-align: center;
  background-color: ${colors.color2};
  p {
    color: ${colors.color1};
    font-size: 1rem;
  }
  ;`;
// const LegendDays = styled.div`
// position : absolute;
// bottom: 20px;
// left: 8px;

//   p {
//     letter-spacing: 30px;
//     color: ${colors.color2};
//     opacity: 0.5;
//     font-size: 14px;
//   }
//   ;`;

function AverageSessionChart() {
  const { id } = useParams();
  const dataUser = useFetch("userAverageSessions", id);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <TooltipBox>
          <p>{`${payload[0].value} min`}</p>
        </TooltipBox>
      );
    }
    return null;
  };
  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
  };
  const CustomCursor = ({ points }) => {
    return (
      <Rectangle
        fill="#000000"
        opacity={0.2}
        x={points[0].x}
        width={500}
        height={400}
      />
    );
  };

  CustomCursor.propTypes = {
    points: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
      })
    ),
  };

  return (
    <Wrapper>
      <H3>
        Durée moyenne des <br />
        sessions
      </H3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={730}
          height={250}
          data={dataUser}
          margin={{ top: 80, bottom: 16, left: 16, right: 16 }}>
          <XAxis
            dataKey="name"
            dy={0}
            axisLine={false}
            tickLine={false}
            tick={{ fill: colors.color2, opacity: "0.5", fontSize: "1rem" }}
          />
          <YAxis hide={true} domain={["dataMin-20", "dataMax+10"]} />
          <Tooltip content={CustomTooltip} cursor={<CustomCursor />} />

          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#colorUv)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "#FFFFFF",
              strokeWidth: 8,
              r: 4,
            }}
          />
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="20%" stopColor="rgba(255, 255, 255, 0.55)" />
              <stop offset="40%" stopColor="rgba(255, 255, 255, 0.6)" />
              <stop offset="60%" stopColor="rgba(255, 255, 255, 0.65)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}

export default AverageSessionChart;
