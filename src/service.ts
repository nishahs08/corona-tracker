import axios from "axios";
export const getData : Object[] | {}= async (country: string | undefined) => {
  try {
    const url = country
      ? `https://covid19.mathdro.id/api/${country}`
      : "https://covid19.mathdro.id/api/";
    const res = await axios.get(url);
    return res.data.countries;
  } catch {
    console.log("something went wrong");
  }
};
