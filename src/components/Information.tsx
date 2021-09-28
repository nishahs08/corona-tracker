import { Grid, Card, Typography } from '@material-ui/core';
import CountUp from 'react-countup';

interface InformationProps {
	numbers: number | undefined;
	lastUpdated: string;
	type: string
}
export const Information: React.FC<InformationProps> = ({ numbers, lastUpdated, type }) => {

	const title = type === 'confirmed' ? 'Confirmed' : type === 'deaths' ? 'Deaths' : 'Recovered';
	const date = new Date(lastUpdated);
	const formattedDate = date.getDate() + ' - ' + (date.getMonth() + 1) + ' - ' + date.getFullYear();
	const _color = type === 'confirmed' ? '#03DAC5' : type === 'deaths' ? '#B00020' : '#6200ee';
	return (
		<Grid
			item
			xs={12}
			md={3}
			component={Card}
			direction='column'
			justifyContent='center'
			alignItems='center'
			alignContent='center'
			style={{ borderBottom: `10px solid ${_color}`, margin: '15px' }}
		>

			<Typography variant='h5' style={{ color: _color }}>{title}</Typography>	
				<CountUp
					start={0}
					end={numbers ? numbers : 0}
					duration={2.75}
					separator=' '
					style={{ fontSize: '20px', color: 'green' }}
				/>
			<Typography variant='subtitle2'> {formattedDate}</Typography>

		</Grid>
	);
};
