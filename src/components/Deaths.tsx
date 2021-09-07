
import { Grid, Card, Typography } from "@material-ui/core";
import CountUp from "react-countup";
interface DeathsProps {
  deaths: number | undefined;
}
export const Deaths = (props: DeathsProps) => {
  return (
    <Grid item component={Card}  style={{width: "250px",height:'250px',borderBottom:'10px solid green' }}
    >
      <Typography>Infected</Typography>
      <CountUp
        start={0}
        end={props.deaths ? props.deaths : 0}
        duration={2.75}
        separator=" "
      ></CountUp>
       <Typography> {new Date().toString()}</Typography>
      <Typography></Typography>
    </Grid>
  );
};
