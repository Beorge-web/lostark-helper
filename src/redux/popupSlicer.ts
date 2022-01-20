import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface PopupState {
	addCharPopup: boolean;
	deletePopup: boolean;
	charName: string;
}

const initialState: PopupState = {
	addCharPopup: false,
	deletePopup: false,
	charName: '',
};

export const popupSlicer = createSlice({
	name: 'popup',
	initialState,
	reducers: {
		charPopup: (state, action: PayloadAction<boolean>) => {
			state.addCharPopup = action.payload;
		},
		deletePopup: (state, action: PayloadAction<string>) => {
			state.deletePopup = !state.deletePopup;
			state.charName = action.payload;
		},
	},
});

export const { charPopup, deletePopup } = popupSlicer.actions;
export const selectPopup = (state: RootState) => state.popup;
export default popupSlicer.reducer;
