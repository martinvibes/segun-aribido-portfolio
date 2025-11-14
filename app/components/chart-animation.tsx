"use client";
import { motion } from "framer-motion";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";

const chartData = [
  { value: 1200 },
  { value: 2400 },
  { value: 1800 },
  { value: 3200 },
  { value: 2800 },
  { value: 4100 },
  { value: 3500 },
];

interface AnimatedChartProps {
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function AnimatedChart({
  width = "80%",
  height = "200px",
  className = "",
}: AnimatedChartProps) {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={className}
      style={{ width, height }}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          key={key}
          data={chartData}
          margin={{ top: 10, right: 10, left: -40, bottom: 10 }}
        >
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#86efac" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#86efac" stopOpacity={0.1} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#22c55e"
            strokeWidth={2}
            fill="url(#chartGradient)"
            dot={false}
            isAnimationActive={true}
            animationDuration={2000}
            animationEasing="ease-in-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}
