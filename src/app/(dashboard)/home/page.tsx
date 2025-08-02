import { MyLineChart, MyDonutChart, MyPieChart, MyBarChart } from '@/components/Charts';

const sampleData = [
  { name: 'Income', value: 400 },
  { name: 'Expanses', value: 300 },
  { name: 'Save', value: 2350 },
];

export async function generateMetadata() {
  return { title: 'Dashboard - Track your budget' }
}


export default function Home() {
      const data = sampleData;
    return (
         <div>
      <h1>Dashboard</h1>
      <MyLineChart data={data} />
      <MyDonutChart data={data} />
      <MyPieChart data={data} />
      <MyBarChart data={data} />
    </div>
    )
}