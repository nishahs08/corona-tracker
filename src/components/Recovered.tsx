
import {Information} from './Information'
interface RecoveredProps {
	recovered: number | undefined;
	lastUpdated: string;
}
export const Recovered :React.FC<RecoveredProps>= ({recovered,lastUpdated}) => {
	return (
		<Information type='recovered' numbers={recovered} lastUpdated={lastUpdated}/>
	);
};

