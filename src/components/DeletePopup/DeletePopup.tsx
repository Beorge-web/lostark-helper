import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { deletePopup } from '../../redux/popupSlicer';
import { deleteChar } from '../../redux/tableSlicer';

const DeletePopup: React.FC = () => {
	const dispatch = useAppDispatch();
	const popupState: boolean = useAppSelector((state) => state.popup.deletePopup);
	const charName: string = useAppSelector((state) => state.popup.charName);
	const popupOverlay: string = 'popup__overlay ' + (popupState === true ? 'popup__overlay_active' : '');
	return (
		<div
			id='popup-delete'
			className={popupOverlay}
			onClick={(e) => {
				if (e.currentTarget === e.target) dispatch(deletePopup(''));
			}}>
			<div className='popup popup_delete'>
				<h2 className='popup__title'>Вы точно хотите удалить {charName}?</h2>
				<div className='buttons'>
					<button
						className='button__popup'
						onClick={() => {
							dispatch(deleteChar(charName));
							dispatch(deletePopup(''));
						}}>
						Да
					</button>
					<button
						className='button__popup'
						onClick={() => {
							dispatch(deletePopup(''));
						}}>
						Нет
					</button>
				</div>
			</div>
		</div>
	);
};
export default DeletePopup;
