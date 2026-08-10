import React, { useContext } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { UserContext } from "../userContext/UseContext";

export const RevenueChart = () => {
  const { show, setShow } = useContext(UserContext);
  const data = [
    { month: "Jan", revenue: 12000 },
    { month: "Fev", revenue: 18000 },
    { month: "Mar", revenue: 26000 },
    { month: "Abr", revenue: 34000 },
    { month: "Mai", revenue: 47000 },
    { month: "Jun", revenue: 62000 },
  ];
  return (
    <div
      className={`bg-white p-6 rounded-3xl shadow-xl h-87.5
    transition-all duration-700 delay-100
    ${show ? "opacity-100 scale-100" : "opacity-0 scale-95"}
  `}
    >
      <div className="mb-6">
        <p className="text-sm text-gray-500">Receita Empresarial</p>
        <h3 className="text-3xl font-bold">+32%</h3>
        <p className="text-sm text-[#6b7280]">
          crescimento nos últimos 6 meses
        </p>
      </div>

      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="4 4"
            vertical={false}
            stroke="#E5E7Eb"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#94A3B", fontSize: 12 }}
          />
          <YAxis hide />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#02044a"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
