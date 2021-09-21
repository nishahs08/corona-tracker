import { Container, Grid, Typography, Box } from '@material-ui/core';
import {Skeleton} from '@material-ui/lab'
import React, { useState } from 'react';
import './App.css';
import { Confirmed } from './components/Confirmed';
import { Deaths } from './components/Deaths';
import { Recovered } from './components/Recovered';
import { useReportApi, useDailyData } from './hooks';
import { Line, Bar } from 'react-chartjs-2';
import { CountryPicker } from './components/CountryPicker';

function App() {
  const [country, setCountry] = useState('');
  const data = useReportApi(country);
  const dailyData = useDailyData();

  const lineChart = dailyData?.length ? (
    <Line
      data={{
        //@ts-ignore
        labels: dailyData.map((data) => data.date),
        datasets: [
          {
            //@ts-ignore
            data: dailyData.map((data) => data.confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            //@ts-ignore
            data: dailyData.map((data) => data.deaths),
            label: 'Deaths',
            borderColor: '#3333ff',
            backgroundColor: 'rgba(255,0,0,.5)',
            fill: true,
          },
        ],
      }}
    ></Line>
  ) : null;

  const barChart = data?.confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovred', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['rgba(0,0,255,0.5)', 'rgba(0,255,0,0.5)', 'rgba(255,0,0,0.5)'],
            data: [data.confirmed.value, data.recovered.value, data.deaths.value],
          },
        ],
      }}
    ></Bar>
  ) : null;
  const onChange = (value: string) => {
    setCountry(value);
  };

  return (
    <Container maxWidth='lg'>
      <Grid container direction='column' alignContent='center' style={{width:'100%'}}>
        <Grid item xs={12} md={12} >
          <Typography variant='h2'>COVID</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container >
            <Confirmed
              confirmed={data?.confirmed.value}
              lastUpdated={data?.lastUpdate ? data?.lastUpdate : new Date().toString()}
            />
            <Deaths
              deaths={data?.deaths.value}
              lastUpdated={data?.lastUpdate ? data?.lastUpdate : new Date().toString()}
            />
            <Recovered
              recovered={data?.recovered.value}
              lastUpdated={data?.lastUpdate ? data?.lastUpdate : new Date().toString()}
            />
          </Grid>
        </Grid>
        <Grid xs={12} md={12}>
          <CountryPicker onChange={onChange} />
          {data? 
            <Box >{country ? barChart : lineChart}</Box>
        
          :
          <Skeleton variant="rect" style={{ width: '80%' }} height={400} />
}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
