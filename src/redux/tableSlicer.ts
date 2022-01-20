import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICheckbox, localChar } from '../vendor/types';
import { RootState } from './store';

function allStorage() {
	let values = [],
		keys = Object.keys(localStorage),
		i = keys.length;

	while (i--) {
		values.push(localStorage.getItem(keys[i]));
	}
	return values.map((i) => JSON.parse(i || '{}')).sort((a, b) => a.info.id - b.info.id);
}
let localChars: localChar[] = allStorage();

interface TableState {
	value: number;
	char: {
		name: string;
		gs: number;
		clas: string;
		id: number;
		isChecked: ICheckbox;
	};
	localChars: localChar[];
	nameToDelete: string;
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
		id: Object.keys(localStorage).length || 0,
		isChecked: {
			chaos: false,
			guards: false,
			daily: false,
			w_guards: false,
			argos: false,
			boldan: false,
			bela: false,
			clown: false,
			avr: false,
		},
	},
	localChars: localChars,
	nameToDelete: '',
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
			state.char.id++;
			const newChar = {
				name,
				info: {
					gs,
					clas,
					id: state.char.id,
					isChecked: state.char.isChecked,
				},
			};
			localStorage.setItem(name, JSON.stringify(newChar));
			const updatedChars: localChar[] = allStorage();
			state.localChars = updatedChars;
		},
		updateDaily: (state) => {
			const updatedChars: localChar[] = allStorage()
				.slice(0)
				.map((i) => {
					i.info.isChecked.chaos = false;
					i.info.isChecked.guards = false;
					i.info.isChecked.daily = false;
					return i;
				});
			state.localChars = updatedChars;
		},
		updateFull: (state) => {
			const updatedChars: localChar[] = allStorage()
				.slice(0)
				.map((i: localChar) => {
					let prop: keyof ICheckbox;
					for (prop in i.info.isChecked) {
						i.info.isChecked[prop] = false;
					}
					return i;
				});
			state.localChars = updatedChars;
		},
		deleteChar: (state, action: PayloadAction<string>) => {
			localStorage.removeItem(action.payload);
			const updatedChars: localChar[] = allStorage();
			state.localChars = updatedChars;
		},
	},
});

export const { createTables, addChar, updateDaily, updateFull, deleteChar } = tableSlicer.actions;
export const selectTable = (state: RootState) => state.table;
export default tableSlicer.reducer;
