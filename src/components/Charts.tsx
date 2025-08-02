'use client';

import {
  LineChart, Line,
  PieChart, Pie, Cell,
  BarChart, Bar,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

export function MyLineChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* legenda po prawej z dodatkowym paddingiem */}
        <Legend 
          verticalAlign="middle" 
          align="right" 
          layout="vertical" 
          wrapperStyle={{ paddingLeft: 20 }} 
        />
        <Line type="monotone" dataKey="value" stroke={COLORS[0]} strokeWidth={2} dot />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function MyDonutChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={4}
        >
          {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
        </Pie>
        {/* legenda na dole z marginesem */}
        <Legend 
          verticalAlign="bottom" 
          align="center" 
          layout="horizontal" 
          wrapperStyle={{ marginTop: 10 }} 
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function MyPieChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
        >
          {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
        </Pie>
        {/* legenda po lewej, z customowym przesunięciem w osi X */}
        <Legend 
          verticalAlign="middle" 
          align="left" 
          layout="vertical" 
          wrapperStyle={{ marginLeft: 15 }} 
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export function MyBarChart({ data }: { data: { name: string; value: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        {/* legenda u góry, z dolnym paddingiem */}
        <Legend 
          verticalAlign="top" 
          align="left" 
          layout="horizontal" 
          wrapperStyle={{ paddingBottom: 10 }} 
        />
        <Bar dataKey="value" fill={COLORS[1]} barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
}