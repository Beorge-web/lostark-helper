import DailyTable from '../DailyTable/DailyTable';
import Popup from '../Popup/Popup';

import Buttons from '../Buttons/Buttons';
import DeletePopup from '../DeletePopup/DeletePopup';

const Main: React.FC = () => {
	return (
		<>
			{/* <TableForm /> */}
			<DailyTable />
			<Popup />
			<DeletePopup />
			<Buttons />
		</>
	);
};
export default Main;
