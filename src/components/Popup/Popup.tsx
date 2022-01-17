import { useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import Select, { ActionMeta, OnChangeValue } from 'react-select';
import { options, Option } from '../../vendor/data';
import { addChar } from '../../redux/tableSlicer';

const Popup: React.FC = () => {
	const [form, setForm] = useState({name: '', clas: '', gs: 0});
	const dispatch = useAppDispatch();
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		dispatch(addChar(form));
	};
	const onChange = (options: OnChangeValue<Option, false>, actionMeta: ActionMeta<Option>) => {
		let name: string | undefined = actionMeta.name;
		let value: string | undefined = options?.value;
		if (typeof name === 'string' && typeof value === 'string') setForm({ ...form, [name]: value });
	};
	return (
		<div id='popup' className='popup__overlay'>
			<form className='popup' onSubmit={handleSubmit}>
				<h2 className='popup__title'>Добавить персонажа</h2>
				<a href='/#' className='popup__close'>
					&times;
				</a>
				<div className='popup__field'>
					<label className='popup__label'>Имя</label>
					<input type='text' className='popup__input' name='name' onChange={handleChange} />
				</div>
				<div className='popup__field'>
					<label className='popup__label'>Класс</label>
					<Select
						options={options}
						placeholder='Выбор...'
						className='popup__input-container'
						name='clas'
						classNamePrefix='popup-input'
						onChange={onChange}
					/>
				</div>
				<div className='popup__field'>
					<label className='popup__label'>Рейтинг снаряжения</label>
					<input type='number' className='popup__input' name='gs' onChange={handleChange} />
				</div>
				<button className='popup__submit' type='submit' onSubmit={handleSubmit}>
					Сохранить
				</button>
			</form>
		</div>
	);
};
export default Popup;
