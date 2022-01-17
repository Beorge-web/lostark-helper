import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks'
import { createTables } from '../../redux/tableSlicer';
const TableForm: React.FC = () => {
	const [input, setInput] = useState<number>(1);
    const dispatch = useAppDispatch();

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const num: number = Number(e.target.value)
		setInput(num);
	};
	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		dispatch(createTables(input))
	};
	return (
		<form className='table-form' onSubmit={submitHandler}>
			<div className='table-form__field'>
				<label htmlFor='twins-number' className='table-form__label'>
					Количество твинов
				</label>
				<input type='range' className='table-form__input' min='1' max='16' name='twins-number' value={input} onChange={changeHandler} />
				<button type='submit'>Сохранить {input} </button>
			</div>
		</form>
	);
}
export default TableForm;
