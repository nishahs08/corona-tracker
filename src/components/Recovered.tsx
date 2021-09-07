import { Grid, Card, Typography } from "@material-ui/core";
import CountUp from "react-countup";
interface RecoveredProps {
  recovered: number | undefined;
}
export const Recovered = (props: RecoveredProps) => {
  return (
    <Grid item component={Card}  style={{width: "250px",height:'250px',borderBottom:'10px solid green' }}
    >
      <Typography>Infected</Typography>
      <CountUp
        start={0}
        end={props.recovered ? props.recovered : 0}
        duration={2.75}
        separator=" "
      ></CountUp>
      <Typography> {new Date().toString()}</Typography>
      <Typography></Typography>
    </Grid>
  );
};
