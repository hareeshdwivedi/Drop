import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, getDatasetAtEvent } from 'react-chartjs-2';
import data from '../../data/data';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = (props: {
  setClicks: any;
  setImpression: Function
  click: Number;
  impressions: Number;
  dateRange: any;
}) => {
  const {
    setClicks,
    setImpression,
    click,
    impressions,
    dateRange
  } = props

  useEffect(() => {
  }, dateRange)

  const chartRef = useRef<any>()

  const handleClick = (event:any, data:any) => {
    const points = chartRef.current.getElementsAtEventForMode(event, 'nearest', { intersect: true }, true);
    if (points.length) {
      const firstPoint = points[0];
      const label = chartRef.current.data.datasets[firstPoint.datasetIndex].label;
      let value = chartRef.current.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
      const {x, y} = data[0].element.$context?.parsed
      if (label === "Clicks") {
        value = Number(value) + Number(click)
        setClicks(value)
      } else {
        value = Number(value) + Number(impressions)
        setImpression(value)
      }
    }
  }

  const options = {
    responsive: true,
    onClick: (evt: any, elements: any) => {
      if(elements.length > 0) {
        console.log(elements,elements[0].element.$context)
        handleClick(evt, elements)
      }
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Products trends by Months',
        padding: {
          align: "start",
          top: 10,
          bottom: 30
        },
      },
    },
  };

  let labels: any = data.map((item) => { 
    let toData = new Date(dateRange.toDate).getTime();
    let fromDate = new Date(dateRange.fromDate).getTime();
    let date = new Date(item.date).getTime();
    if (toData && fromDate) {
      if (fromDate <= date 
        && toData >=date) {
        return item.date 
      }
    } else {
      return item.date 
    }
  });


  const dataSet = {
    labels,
    datasets: [
      {
        label: 'Clicks',
        data: data.map((item) => { 
          let toData = new Date(dateRange.toDate).getTime();
          let fromDate = new Date(dateRange.fromDate).getTime();
          let date = new Date(item.date).getTime();
          if (toData && fromDate) {
            if (fromDate <= date 
            && toData >=date) {
              return item.clicks 
            }
          } else {
            return item.clicks 
          }
        }),
        borderColor: '#36A2EB',
        backgroundColor: '#36A2EB',   
      },
      {
        label: 'Impressions',
        data: data.map((item) => {
          let toData = new Date(dateRange.toDate).getTime();
          let fromDate = new Date(dateRange.fromDate).getTime();
          let date = new Date(item.date).getTime();
          if (toData && fromDate) {
            if (fromDate <= date 
              && toData >=date) {
              return item.impressions 
            }
          } else {
            return item.impressions 
          }
        }),
        borderColor: '#0edd97',
        backgroundColor: '#0edd97',
      }
    ],
  };

  return <Line options={options} data={dataSet}
        ref={chartRef}
  />;
}
