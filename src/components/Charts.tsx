'use client';

import {
  LineChart, Line,
  PieChart, Pie, Cell,
  BarChart, Bar,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

export function MyLineChart({ 
  data, 
  showLegend = true, 
  legendVAlign = 'bottom',
  legendAlign='center',
  legendLayout='horizontal',
  height = "100%" 
}: { 
  data: { name: string; value: number }[];
  showLegend?: boolean;
  legendVAlign?: 'middle'|'bottom'|'top'; //vertical align
  legendAlign?: 'left' | 'right' | 'center';
  legendLayout?: 'vertical' | 'horizontal';
  height?: string | number;
}) {
  return (
   <ResponsiveContainer width="100%" height={height}>
      <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
        <XAxis dataKey="name" fontSize={12} />
        <YAxis fontSize={12} />
        <Tooltip />
        {showLegend && (
          <Legend 
            verticalAlign={legendVAlign} 
            align={legendAlign}
            layout={legendLayout} 
            wrapperStyle={{ fontSize: '12px', paddingTop: 10 }} 
          />
        )}
        <Line type="monotone" dataKey="value" stroke={COLORS[0]} strokeWidth={2} dot />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function MyDonutChart({ 
  data, 
  showLegend = true, 
  legendVAlign = 'bottom',
  legendAlign='center',
  legendLayout='horizontal',
  height = "100%",
  size = "medium"
}: { 
  data: { name: string; value: number }[];
  showLegend?: boolean;
  legendVAlign?: 'middle'|'bottom'|'top'; //vertical align
  legendAlign?: 'left' | 'right' | 'center';
  legendLayout?: 'vertical' | 'horizontal';
  height?: string | number;
  size?: "small" | "medium" | "large";
}) {
  const sizes = {
    small: { inner: 30, outer: 50 },
    medium: { inner: 60, outer: 100 },
    large: { inner: 80, outer: 120 }
  };
  
  const { inner, outer } = sizes[size];
  
  return (
  <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={inner}
          outerRadius={outer}
          paddingAngle={2}
        >
          {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
        </Pie>
        {showLegend && (
          <Legend 
            verticalAlign={legendVAlign} 
            align={legendAlign}
            layout={legendLayout} 
            wrapperStyle={{ fontSize: '12px', marginTop: 5 }} 
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  );
}

export function MyPieChart({ 
  data, 
  showLegend = true,
  legendVAlign = 'bottom',
  legendAlign='left',
  legendLayout='vertical',
  height = "100%",
  size = "medium"
}: { 
  data: { name: string; value: number }[];
  showLegend?: boolean;
  legendVAlign?: 'middle'|'bottom'|'top'; //vertical align
  legendAlign?: 'left' | 'right' | 'center';
  legendLayout?: 'vertical' | 'horizontal';
  height?: string | number;
  size?: "small" | "medium" | "large";
}) {
  const sizes = {
    small: { radius: 40 },
    medium: { radius: 80 },
    large: { radius: 120 }
  };
  
  const { radius } = sizes[size];
  
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={radius}
        >
          {data.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
        </Pie>
        {showLegend && (
          <Legend 
            verticalAlign={legendVAlign} 
            align={legendAlign} 
            layout={legendLayout} 
            wrapperStyle={{ fontSize: '12px', marginTop: 5 }} 
          />
        )}
      </PieChart>
    </ResponsiveContainer>
  );
}

export function MyBarChart({ 
  data, 
  showLegend = true, 
  height = "100%" 
}: { 
  data: { name: string; value: number }[];
  showLegend?: boolean;
  height?: string | number;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 5 }}>
        <XAxis dataKey="name" fontSize={12} />
        <YAxis fontSize={12} />
        <Tooltip />
        {showLegend && (
          <Legend 
            verticalAlign="bottom" 
            align="center" 
            layout="horizontal" 
            wrapperStyle={{ fontSize: '12px', paddingTop: 5 }} 
          />
        )}
        <Bar dataKey="value" fill={COLORS[1]} radius={[2, 2, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}