import { Grid, Card, Typography, Box } from '@material-ui/core';
import CountUp from 'react-countup';
import { Information } from './Information';
interface ConfirmedProps {
	confirmed: number | undefined;
	lastUpdated: string;
}
export const Confirmed :React.FC<ConfirmedProps> = ({confirmed,lastUpdated}) => {
	return (
		<Information type='confirmed' numbers={confirmed} lastUpdated={lastUpdated}/>
	);
};
