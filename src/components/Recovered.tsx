import { Grid, Card, Typography, Box } from '@material-ui/core';
import CountUp from 'react-countup';
interface RecoveredProps {
	recovered: number | undefined;
	lastUpdated: string;
}
export const Recovered = (props: RecoveredProps) => {
	return (
		<Grid
			item
			xs={12}
			md={2}
			component={Card}
			direction='column'
			justifyContent='center'
			alignItems='center'
			style={{ borderBottom: '10px solid #0288D1', marginBottom: '15px' }}
		>
			<Box style={{ width: '100%', alignItems: 'center' }}>
				<Typography variant='h4'>Infected</Typography>
				<CountUp start={0} end={props.recovered ? props.recovered : 0} duration={2.75} separator=' '></CountUp>
				<Typography variant='subtitle1'> {props.lastUpdated}</Typography>
			</Box>
		</Grid>
	);
};
