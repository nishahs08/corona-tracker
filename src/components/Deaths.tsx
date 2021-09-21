
import { Information } from './Information';

interface DeathsProps {
	deaths: number | undefined;
	lastUpdated: string;
}
export const Deaths: React.FC<DeathsProps> = ({ deaths, lastUpdated }) => {
	return <Information type='confirmed' numbers={deaths} lastUpdated={lastUpdated} />;
};
