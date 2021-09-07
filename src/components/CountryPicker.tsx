import { FormControl, NativeSelect } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useCountriesApi } from "../hooks";
import axios from "axios";
interface CountryPickerProps {
  onChange: (value: string) => void;

}
export const CountryPicker = (props: CountryPickerProps) => {
  const countries = useCountriesApi();
  const [data, setData] = useState<any>();
  
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://covid19.mathdro.id/api/countries");
        setData(res);
      } catch (err) {
        console.log("something went wrong---", err);
      }
    };
    getData();
  }, []);
  const [country, setCountry] = useState("");
  return (
    <FormControl>
      <NativeSelect
        defaultValue=""
        onChange={(e: any) => props.onChange(e.target.value)}
      >
          <option value=''>Global</option>
        {countries.length
          ? countries.map((c: any, i) => (
              <option key={i} value={c.name}>
                {c.name}
              </option>
            ))
          : null}
      </NativeSelect>
    </FormControl>
  );
};
