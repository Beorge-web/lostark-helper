import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import Select, { ActionMeta, OnChangeValue } from 'react-select';
import { options, Option } from '../../vendor/data';
import { addChar } from '../../redux/tableSlicer';
import { charPopup } from '../../redux/popupSlicer';
import { AppDispatch } from '../../redux/store';

const Popup: React.FC = () => {
	const [form, setForm] = useState({ name: '', clas: '', gs: 0 });
	const isValid = () => {
		console.log(form);
		return form.name !== '' && form.clas !== '' && form.gs > 0;
	};

	const dispatch: AppDispatch = useAppDispatch();
	const popupState: boolean = useAppSelector((state) => state.popup.addCharPopup);
	const popupOverlay: string = 'popup__overlay ' + (popupState === true ? 'popup__overlay_active' : '');
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		dispatch(addChar(form));
		dispatch(charPopup(false));
		setForm({ name: '', clas: '', gs: 0 });
	};
	const onChange = (options: OnChangeValue<Option, false>, actionMeta: ActionMeta<Option>) => {
		let name: string | undefined = actionMeta.name;
		let value: string | undefined = options?.value;
		if (typeof name === 'string' && typeof value === 'string') setForm({ ...form, [name]: value });
	};
	return (
		<div id='popup' className={popupOverlay}>
			<form className='popup' onSubmit={handleSubmit}>
				<h2 className='popup__title'>Добавить персонажа</h2>
				<button
					type='button'
					onClick={(e) => {
						e.preventDefault();
						dispatch(charPopup(false));
						setForm({ name: '', clas: '', gs: 0 });
					}}
					className='popup__close'>
					&times;
				</button>
				<div className='popup__field'>
					<label className='popup__label'>Имя</label>
					<input type='text' className='popup__input' name='name' onChange={handleChange} value={form.name} required />
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
					<input type='number' className='popup__input' name='gs' onChange={handleChange} value={form.gs} required min={1} />
				</div>
				<button className='popup__submit' type='submit' onSubmit={handleSubmit} disabled={isValid() ? false : true}>
					Сохранить
				</button>
			</form>
		</div>
	);
};
export default Popup;
