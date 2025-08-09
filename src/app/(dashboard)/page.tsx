import {
  MyLineChart,
  MyDonutChart,
  MyPieChart,
  MyBarChart,
} from '@/components/Charts';

import { BiTrendingUp } from 'react-icons/bi';
import { BiTrendingDown } from 'react-icons/bi';
import { FaSackDollar } from 'react-icons/fa6';

const sampleData = [
  { name: '01-02-2025', value: 400 },
  { name: '02-02-2025', value: 40 },
  { name: '03-02-2025', value: 100 },
  { name: '04-02-2025', value: 20 },
  { name: '05-02-2025', value: 4 },
  { name: '06-02-2025', value: 120 },
  { name: '07-02-2025', value: 40 },
  { name: '08-02-2025', value: 400 },
  { name: '09-02-2025', value: 440 },
  { name: '10-02-2025', value: 440 },
  { name: '11-02-2025', value: 40 },
  { name: '12-02-2025', value: 0 },
  { name: '13-02-2025', value: 0 },
  { name: '14-02-2025', value: 0 },
  { name: '15-02-2025', value: 20 },
  { name: '16-02-2025', value: 10 },
  { name: '17-02-2025', value: 20 },
  { name: '18-02-2025', value: 30 },
  { name: '19-02-2025', value: 40 },
  { name: '20-02-2025', value: 50 },
];

const pieChartData = [
  { value: 12, name: 'Income' },
  { value: 19, name: 'Expenses' },
];

export async function generateMetadata() {
  return { title: 'Dashboard - Track your budget' };
}

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="w-full flex gap-4 flex-col md:flex-row">
        <article className="rounded-lg border border-gray-100 w-full bg-white p-6 md:w-1/3 md-h-[200px]">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Year summary</p>

              <p className="text-lg font-medium text-gray-900 flex">
                <BiTrendingUp className=" text-green-500"></BiTrendingUp>{' '}
                $240.94
              </p>
              <p className="md:text-lg  font-medium text-gray-900 flex">
                <BiTrendingDown className=" text-red-500"></BiTrendingDown>
                $240.94
              </p>
            </div>

            <span className="rounded-full bg-blue-100 p-3 text-blue-600">
              <FaSackDollar />
            </span>
          </div>
        </article>
        <article className="rounded-lg border border-gray-100 w-full bg-white p-6 md:w-1/3">
          <div className="flex flex-col">
            <p className="text-sm text-gray-500 self-start">This Month</p>
            <div className="w-full h-32 min-h-[120px]">
              <MyPieChart
                data={pieChartData}
                showLegend={true}
                size="small"
                height="100%"
              />
            </div>
          </div>
        </article>
        <article className="rounded-lg border border-gray-100 w-full bg-white p-6 md:w-1/3">
          <div className="flex flex-col">
            <p className="text-sm text-gray-500 self-start">Last Month</p>
            <div className="w-full h-32 min-h-[120px]">
              <MyPieChart
                data={pieChartData}
                showLegend={true}
                size="small"
                height="100%"
              />
            </div>
          </div>
        </article>
      </div>

      <div className="w-full flex flex-col lg:flex-row mt-4 gap-4">
        <div className="lg:w-[50%]">
          <article className="rounded-lg border border-gray-100 w-full bg-white p-6 ">
            <div className="flex items-center gap-4">
              <BiTrendingUp className="w-[45px]" />
              <div>
                <h3 className="text-lg font-medium">Bank Accounts</h3>
              </div>
            </div>

            <ul className="space-y-2">
              <li className="flex justify-between items-center border-b-2 p-2">
                <strong className="font-medium text-gray-500 text-md">
                  Project A
                </strong>

                <div className="text-xs text-gray-400">
                  <span>90.24zł</span>
                  <br />
                  <span>PLN-zł</span>
                </div>
              </li>
              <li className="flex justify-between items-center border-b-2 p-2">
                <strong className="font-medium text-gray-500">Project A</strong>

                <div className="text-xs text-gray-400">
                  <span>90.24zł</span>
                  <br />
                  <span>PLN-zł</span>
                </div>
              </li>
              <li className="flex justify-between items-center border-b-2 p-2">
                <strong className="font-medium text-gray-500">Project A</strong>

                <div className="text-xs text-gray-400">
                  <span>90.24zł</span>
                  <br />
                  <span>PLN-zł</span>
                </div>
              </li>
            </ul>
          </article>
        </div>
        <div className="lg:w-[50%]">
          <article className="rounded-lg border border-gray-100 w-full bg-white p-6">
            <div className="flex flex-col">
              <p className="text-sm text-gray-500 self-start">Last Month</p>
              <div className="w-full h-44 min-h-[120px]">
                <MyLineChart
                  data={sampleData}
                  height="100%"
                  showLegend={false}
                />
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* TODO To be completed */}
      {/* <div className="w-full flex flex-col md:flex-row mt-4 gap-4">
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Trends</h3>
            <div className="w-full h-64">
              <MyLineChart data={sampleData} height="100%" />
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-white p-6 rounded-lg border border-gray-100">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Budget Distribution</h3>
            <div className="w-full h-64">
              <MyDonutChart data={sampleData} height="100%" size="medium" />
            </div>
          </div>
        </div>
        <div className="w-full bg-white p-6 rounded-lg border border-gray-100 mt-4">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Monthly Comparison</h3>
          <div className="w-full h-80">
            <MyBarChart data={sampleData} height="100%" />
          </div>
        </div> */}
    </>
  );
}
