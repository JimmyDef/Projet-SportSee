import styled from "styled-components";
import {
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";
import { colors } from "../variables";

function DailyBarChart() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ];
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
    // </ResponsiveContainer>
  );
}

export default DailyBarChart;
