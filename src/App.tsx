import { Container, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Confirmed } from "./components/Confirmed";
import { Deaths } from "./components/Deaths";
import { Recovered } from "./components/Recovered";
import { useReportApi, useDailyData } from "./hooks";
import { Line } from "react-chartjs-2";
import {CountryPicker} from './components/CountryPicker'
type ReportedData = {
  confirmed: {
    value: number;
    detail: string;
  };
  recovered: {
    value: number;
    detail: string;
  };
  deaths: {
    value: number;
    detail: string;
  };
};
function App() {
  const data = useReportApi();
  const dailyData = useDailyData();
  console.log("dailyData", dailyData);
  if (data) {
    const updatedData = {
      confirmed: data.confirmed.value,
      deaths: data.deaths.value,
      recovered: data.recovered.value,
    };
  }

  const lineChart = dailyData?.length ? (
    <Line
      data={{
        //@ts-ignore
        labels: dailyData.map(data => data.date),
        datasets: [
          {
              //@ts-ignore
            data: dailyData.map(data => data.confirmed),
            label:'Infected',
            borderColor:'#3333ff',
            fill:true
          },
          {
            //@ts-ignore
          data: dailyData.map(data => data.deaths),
          label:'Deaths',
          borderColor:'#3333ff',
          backgroundColor:'rgba(255,0,0,.5)',
          fill:true
        }
        ],
      }}
    ></Line>
  ) : null;

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="space-around">
        <Confirmed confirmed={data?.confirmed.value} />
        <Deaths deaths={data?.deaths.value} />
        <Recovered recovered={data?.recovered.value} />
      </Grid>
      <div>
      <CountryPicker></CountryPicker>
      </div>
      {lineChart}
  
  
      
    </Container>
  );
}

export default App;
