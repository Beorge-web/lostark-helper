import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface PopupState {
	addCharPopup: boolean;
}

const initialState: PopupState = {
	addCharPopup: false,
};

export const popupSlicer = createSlice({
	name: 'popup',
	initialState,
	reducers: {
		charPopup: (state, action: PayloadAction<boolean>) => {
			state.addCharPopup = action.payload;
		},
	},
});

export const { charPopup } = popupSlicer.actions;
export const selectPopup = (state: RootState) => state.popup;
export default popupSlicer.reducer;
