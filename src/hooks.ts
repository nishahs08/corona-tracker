import { useState, useEffect } from "react";
import axios from "axios";

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
  lastUpdate:string
};
export const useReportApi = (country:string|undefined) => {
  const [data, setData] = useState<ReportedData>();
  useEffect(() => {
    const getData = async () => {
      try {
          const url = country ? `https://covid19.mathdro.id/api/countries/${country}`:'https://covid19.mathdro.id/api/';
        const res = await axios.get(url);
        setData(res.data);
        console.log('country',country,res.data)
      } catch {
        console.log("something went wrong");
      }
    };
    getData();
  }, [country]);
  return data;
};



export const useDailyData = () => {
  const [data, setData] = useState<Object[]>();
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://covid19.mathdro.id/api/daily");
        //@ts-ignore
        const resData = res.data.map((d) => ({
          confirmed: d.confirmed.total,
          deaths: d.deaths.total,
          date: d.reportDate,
        }));
        setData(resData);
        console.log(res.data);
      } catch {
        console.log("something went wrong");
      }
    };
    getData();
  }, []);
  return data;
};

export const useCountriesApi = () =>{
    const [data, setData] = useState([]);
    useEffect(() => {
      const getData = async () => {
        try {
          const res = await axios.get("https://covid19.mathdro.id/api/countries");
          setData(res.data.countries);
          console.log("---",res.data.countries)
        } catch(err) {
          console.log("something went wrong---",err);
        }
      };
      getData();
    }, []);
    return data;
}