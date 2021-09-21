import { Grid, Card, Typography, Box } from '@material-ui/core';
import { type } from 'os';
import CountUp from 'react-countup';

interface InformationProps {
	numbers: number | undefined;
	lastUpdated: string;
    type :string
}
export const Information : React.FC<InformationProps>= ({numbers,lastUpdated,type}) => {

    const title = type === 'confirmed' ? 'Confirmed' : type === 'deaths' ? 'Deaths' : 'Recovered';
	return (
		<Grid
			item
			component={Card}
			direction='column'
			justifyContent='center'
			alignItems='center'
			style={{ borderBottom: '10px solid #64DD17', marginBottom: '15px' }}
		>
			<Box >
				<Typography variant='h4'>{title}</Typography>
				<CountUp
					start={0}
					end={numbers ? numbers: 0}
					duration={2.75}
					separator=' '
					style={{ fontSize: '20px', color: 'green' }}
				></CountUp>
				<Typography variant='subtitle1'> {lastUpdated}</Typography>
			</Box>
		</Grid>
	);
};
