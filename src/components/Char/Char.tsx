import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../redux/hooks';
import { deletePopup } from '../../redux/popupSlicer';
import { options } from '../../vendor/data';
import { ICheckbox } from '../../vendor/types';
interface CharProps {
	name?: string;
	id?: number;
	gs?: number;
	clas?: string;
	completed?: ICheckbox;
}

const Char: React.FC<CharProps> = ({ name, gs, clas, id, completed }) => {
	const dispatch = useAppDispatch();
	const [isChecked, setChecked] = useState<ICheckbox>({
		chaos: false,
		guards: false,
		daily: false,
		w_guards: false,
		argos: false,
		boldan: false,
		bela: false,
		clown: false,
		avr: false,
	});
	let char_icon = options.filter((i) => i.value === clas);
	const char_avatar: string = char_icon[0].img;
	useEffect(() => {
		setChecked(completed || isChecked);
	}, [completed]);
	useEffect(() => {
		const currentChar = {
			name,
			info: {
				gs,
				clas,
				id,
				isChecked,
			},
		};
		localStorage.setItem(name!, JSON.stringify(currentChar));
	}, [isChecked]);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const target = event.target;
		const name = target.name;
		const checked = target.checked;
		setChecked({ ...isChecked, [name]: checked });
	};
	return (
		<div className='todo__char'>
			<div className='todo__char-info'>
				<button
					type='button'
					className='todo__char-delete'
					title='Удалить персонажа'
					onClick={() => {
						dispatch(deletePopup(name!));
					}}></button>
				<img src={char_avatar || ''} alt='Char' className='todo__char-icon' title={clas} />
				<div className='todo__char-more'>
					<p className='todo__char-name'>{name}</p>
					<p className='todo__char-gs'>{gs}</p>
				</div>
			</div>
			<div className='todo__char-check'>
				<label className='container-checkbox' style={{ backgroundColor: '#61605b' }}>
					<input type='checkbox' name='chaos' checked={isChecked.chaos} onChange={handleChange} />
					<span className='checkmark' style={{ backgroundColor: '#61605b' }}></span>
				</label>
				<label className='container-checkbox' style={{ backgroundColor: '#821205' }}>
					<input type='checkbox' name='guards' checked={isChecked.guards} onChange={handleChange} />
					<span className='checkmark' style={{ backgroundColor: '#821205' }}></span>
				</label>
				<label className='container-checkbox' style={{ backgroundColor: '#92b952' }}>
					<input type='checkbox' name='daily' checked={isChecked.daily} onChange={handleChange} />
					<span className='checkmark' style={{ backgroundColor: '#92b952' }}></span>
				</label>
				<label className='container-checkbox' style={{ backgroundColor: '#054c8b' }}>
					<input type='checkbox' name='w_guards' checked={isChecked.w_guards} onChange={handleChange} />
					<span className='checkmark' style={{ backgroundColor: '#054c8b' }}></span>
				</label>
				<label className='container-checkbox' style={{ backgroundColor: '#c6c8ca' }}>
					<input type='checkbox' name='argos' checked={isChecked.argos} onChange={handleChange} />
					<span className='checkmark' style={{ backgroundColor: '#c6c8ca' }}></span>
				</label>
				<label className='container-checkbox' style={{ backgroundColor: '#4f7121' }}>
					<input type='checkbox' name='boldan' checked={isChecked.boldan} onChange={handleChange} />
					<span className='checkmark' style={{ backgroundColor: '#4f7121' }}></span>
				</label>
				<label className='container-checkbox' style={{ backgroundColor: '#8a0039' }}>
					<input type='checkbox' name='bela' checked={isChecked.bela} onChange={handleChange} />
					<span className='checkmark' style={{ backgroundColor: '#8a0039' }}></span>
				</label>
				<label className='container-checkbox' style={{ backgroundColor: '#E67E00' }}>
					<input type='checkbox' name='clown' checked={isChecked.clown} onChange={handleChange} />
					<span className='checkmark' style={{ backgroundColor: '#E67E00' }}></span>
				</label>
				<label className='container-checkbox' style={{ backgroundColor: '#5700a8' }}>
					<input type='checkbox' name='avr' checked={isChecked.avr} onChange={handleChange} />
					<span className='checkmark' style={{ backgroundColor: '#5700a8' }}></span>
				</label>
			</div>
		</div>
	);
};
export default Char;
