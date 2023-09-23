import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useStats } from "../../hooks/useStats";
import "./chart.css";

export default function Chart({ }) {
    const { data, isLoading, error } = useStats();
   
    if (error) return <p> {error.message} </p>;
    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p> data not found....</p>;
  
  return (
    <div className="chart">
      <h3 className="chartTitle">User Analitycs</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="_id" stroke="#5550bd" />
          <YAxis />
          <Line type="monotone" dataKey="total" stroke="#5550bd" />
          <Tooltip />
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
