import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
  Bar,
} from "recharts";
import styled from "styled-components";

function Chart() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
    },
  ];

  return (
    <Box>
      <Title>일별 매출 수</Title>
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip />
          <Legend type="diamond" />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}

const Title = styled.span`
  font-size: 1.2rem;
`;

const Box = styled.div`
  z-index: 1000;
  width: 100%;
  height: 500px;
`;
export default Chart;
