import DailyTable from '../DailyTable/DailyTable';
import Popup from '../Popup/Popup';
import PopupButton from '../PopupButton/PopupButton';
import TableForm from '../TableForm/TableForm';

const Main: React.FC = () => {
	return (
		<>
			<TableForm />
			<DailyTable />
			<Popup />
			<PopupButton />
		</>
	);
};
export default Main;
