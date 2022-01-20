import { useAppDispatch } from '../../redux/hooks';
import { charPopup } from '../../redux/popupSlicer';
import { AppDispatch } from '../../redux/store';

import { useAppSelector } from '../../redux/hooks';
import { updateDaily, updateFull } from '../../redux/tableSlicer';
import { ICheckbox, localChar } from '../../vendor/types';

const Buttons: React.FC = () => {
	const dispatch = useAppDispatch();
	return (
		<div className='buttons'>
			<button
				className='button__popup'
				onClick={() => {
					dispatch(charPopup(true));
				}}>
				Добавить персонажа
			</button>
			<button
				className='button__popup'
				onClick={(e) => {
					dispatch(updateDaily());
				}}>
				Обновить ежедневные
			</button>
			<button
				className='button__popup'
				onClick={(e) => {
					dispatch(updateFull());
				}}>
				Обновить все
			</button>
		</div>
	);
};
export default Buttons;
