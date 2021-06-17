import React, { useState, useEffect } from 'react';
import { Bar, Line } from 'react-chartjs-2';
// import { fetchDailyData } from '../api';
import daily from '../api/daily.json';
import '../styles/chart.css';

interface DailyData {
  confirmed: null | number;
  recovered: null | number;
  deaths: number | null;
  date: string;
}

interface Props {
  data: {
    confirmed: number;
    recovered: number;
    deaths: number;
  };
  country: string;
}

const Chart = ({ data: { confirmed, recovered, deaths }, country }: Props) => {
  const [dailyData, setDailyData] = useState<DailyData[]>([]);

  useEffect(() => {
    const newData = daily.map((data) => ({
      confirmed: data.positive,
      recovered: data.recovered,
      deaths: data.death,
      date: data.dateChecked,
    }));
    console.log(newData);
    setDailyData(newData);
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [confirmed, recovered, deaths],
          },
        ],
      }}
      type="bar"
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  const lineChart = dailyData[0] ? (
    <Line
      type="line"
      data={{
        labels: dailyData.map(({ date }) =>
          new Date(date).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          {
            data: dailyData.map((data) => data.recovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className="chart-container">{country ? barChart : lineChart}</div>
  );
};

export default Chart;
