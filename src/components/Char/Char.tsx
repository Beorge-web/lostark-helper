import avr from '../../images/avr.png';
import { options } from '../../vendor/data';
interface CharProps {
	name: string;
	key?: number;
	gs: number;
	clas: string;
}
const Char: React.FC<CharProps> = ({ name, gs, clas }) => {
	let char_icon = options.filter((i) => i.value === clas)
	console.log(char_icon[0].img)
	return (
		<div className='todo__char'>
			<div className='todo__char-info'>
				<img src={char_icon[0].img} alt='Char' className='todo__char-icon' />
				<div className='todo__char-more'>
					<p className='todo_char-name'>{name}</p>
					<p className='todo_char-gs'>{gs}</p>
				</div>
			</div>
			<div className='todo__char-check'>
				<label className='container-checkbox'>
					<input type='checkbox' />
					<span className='checkmark'></span>
				</label>
				<label className='container-checkbox'>
					<input type='checkbox' />
					<span className='checkmark'></span>
				</label>
				<label className='container-checkbox'>
					<input type='checkbox' />
					<span className='checkmark'></span>
				</label>
				<label className='container-checkbox'>
					<input type='checkbox' />
					<span className='checkmark'></span>
				</label>
				<label className='container-checkbox'>
					<input type='checkbox' />
					<span className='checkmark'></span>
				</label>
				<label className='container-checkbox'>
					<input type='checkbox' />
					<span className='checkmark'></span>
				</label>
				<label className='container-checkbox'>
					<input type='checkbox' />
					<span className='checkmark'></span>
				</label>
				<label className='container-checkbox'>
					<input type='checkbox' />
					<span className='checkmark'></span>
				</label>
				<label className='container-checkbox'>
					<input type='checkbox' />
					<span className='checkmark'></span>
				</label>
			</div>
		</div>
	);
};
export default Char;
