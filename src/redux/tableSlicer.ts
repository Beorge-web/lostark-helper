import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface TableState {
	value: number;
	char: {
		name: string;
		gs: number;
		clas: string;
		_id: number;
	};
}

interface charState {
	name: string;
	gs: number;
	clas: string;
}
const initialState: TableState = {
	value: 0,
	char: {
		name: '',
		gs: 0,
		clas: '',
		_id: Object.keys(localStorage).length || 0,
	},
};

export const tableSlicer = createSlice({
	name: 'table',
	initialState,
	reducers: {
		createTables: (state, action: PayloadAction<number>) => {
			state.value = action.payload;
		},
		addChar: (state, action: PayloadAction<charState>) => {
			const { gs, name, clas }: charState = action.payload;
			state.char.gs = gs;
			state.char.name = name;
			state.char.clas = clas;
			state.char._id++;
		},
	},
});

export const { createTables, addChar } = tableSlicer.actions;
export const selectTable = (state: RootState) => state.table;
export default tableSlicer.reducer;
