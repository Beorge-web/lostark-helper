import { useAppDispatch } from '../../redux/hooks';
import { charPopup } from '../../redux/popupSlicer';
import { AppDispatch } from '../../redux/store';

const PopupButton: React.FC = () => {
	const dispatch: AppDispatch = useAppDispatch();
	return (
		<button
			className='button__popup'
			onClick={() => {
				dispatch(charPopup(true));
			}}>
			Добавить персонажа
		</button>
	);
};
export default PopupButton;
