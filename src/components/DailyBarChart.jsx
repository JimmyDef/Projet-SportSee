import styled from "styled-components";
import {
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { colors } from "../variables";
import useFetch from "../services/useFetch";
import { useParams } from "react-router-dom";
import { Loader } from "./loader/Loaders";

const Wrapper = styled.div`
position: relative;
border-radius: 5px;
background-color: ${colors.color5};
width: 100%;
height: 300px;
padding-right: 30px;`;

const P = styled.p`
text-align: center;
line-height: 250px;
color: ${colors.color1};
`;

const LegendBox = styled.div`
position: absolute;
background-color: ${colors.color5};
border-radius: 5px;
top: 30px;
width: 95%;
margin:  0;
display: flex;
justify-content: space-between;
h3 {
  display: inline;  
  margin-left: 40px;
  font-size: 0.9rem;
  font-weight: 500;
}
ul {
  li { 
    margin-left: 30px;
    display: inline;
    font-size: 0.875rem;
    font-weight: 500;
    div { 
      margin-right: 5px;
      display: inline-block;
      background-color: ${colors.color3};
      height: 10px;
      width: 10px;
      border-radius: 50%;
    } 
  }
   li:nth-child(2) div {
      background-color: ${colors.primary};
    }
     }
}`;

const TooltipBox = styled.div`
transform: translateX(20px);
width: 60px;
height: 80px;
line-height: 30px;
padding-top: 10px;
text-align: center;
background-color:#B30909;
p {
  color: ${colors.color2};
  font-size: 0.8rem;
  }`;

function DailyBarChart() {
  const { id } = useParams();
  const { fetchedData, isLoading, error } = useFetch("userActivity", id);

  if (error)
    return (
      <Wrapper>
        <P>Données innaccessibles.</P>
      </Wrapper>
    );
  return (
    <>
      <Wrapper>
        {isLoading ? (
          <Loader extraClass="red" />
        ) : (
          <>
            <LegendBox>
              <h3>Activité quotidienne</h3>
              <ul>
                <li>
                  <div></div>
                  Poids (kg)
                </li>
                <li>
                  <div></div> Calories Brûlées (kCal)
                </li>
              </ul>
            </LegendBox>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={fetchedData}
                barGap={8}
                margin={{ top: 100, right: 20, left: 50, bottom: 20 }}>
                <CartesianGrid
                  strokeDasharray="5 5"
                  horizontalPoints={[100, 188]}
                  vertical={false}
                />
                <XAxis
                  tick={{ fontSize: 14, fontWeight: 500 }}
                  dy={15}
                  tickLine={false}
                  dataKey="name"
                  padding={{ left: -45, right: -48 }}
                  axisLine={{ stroke: "#DEDEDE" }}
                />
                <YAxis
                  dataKey="calories"
                  domain={[0, "dataMax+20"]}
                  yAxisId="left"
                  hide={true}
                  axisLine={false}
                />
                <YAxis
                  dataKey="kg"
                  domain={["dataMin-1", "dataMax+2"]}
                  orientation="right"
                  yAxisId="right"
                  tickCount={3}
                  tickLine={false}
                  dx={40}
                  axisLine={false}
                  tick={{ fontSize: 14, fontWeight: 500 }}
                />
                <Tooltip
                  offset={20}
                  content={CustomTooltip}
                  cursor={{
                    fill: "rgba(0, 0,0, 0.3)",
                  }}
                />
                <Bar
                  dataKey="kg"
                  fill={colors.color3}
                  barSize={10}
                  radius={[5, 5, 0, 0]}
                  yAxisId="right"
                />
                <Bar
                  dataKey="calories"
                  fill={colors.primary}
                  barSize={10}
                  radius={[5, 5, 0, 0]}
                  yAxisId="left"
                />
              </BarChart>
            </ResponsiveContainer>
          </>
        )}
      </Wrapper>
    </>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <TooltipBox>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}Kcal`}</p>
      </TooltipBox>
    );
  }
  return null;
};
CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
};
export default DailyBarChart;
