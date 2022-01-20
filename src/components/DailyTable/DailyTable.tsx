/* eslint-disable react-hooks/exhaustive-deps */
// import { useMemo } from 'react';

import chaos_icon from '../../images/chaos.png';
import guards_icon from '../../images/guards.png';
import w_guards_icon from '../../images/w-guards.png';
import daily_icon from '../../images/daily.png';
import argos from '../../images/argos.png';
import boldan from '../../images/boldan.png';
import booba from '../../images/boobakis.png';
import clown from '../../images/clown.png';
import avr from '../../images/avr.png';
import Char from '../Char/Char';
import { useAppSelector } from '../../redux/hooks';

const DailyTable: React.FC = () => {
	const currentChars = useAppSelector((state) => state.table.localChars);
	return (
		<div className='todo'>
			<div className='todo__header'>
				<div className='todo__space'>Персонажи</div>
				<ul className='todo__daily-list'>
					<li className='todo__item'>
						<img className='todo__item-icon' src={chaos_icon} alt='Activity icon'></img>
						<p className='todo__item-name'>Хаос</p>
					</li>
					<li className='todo__item'>
						<img className='todo__item-icon' src={guards_icon} alt='Activity icon'></img>
						<p className='todo__item-name'>Гварды</p>
					</li>
					<li className='todo__item'>
						<img className='todo__item-icon' src={daily_icon} alt='Activity icon'></img>
						<p className='todo__item-name'>Дейлики</p>
					</li>
					{/* </ul> */}
					{/* <ul className='todo__weekly-list'> */}
					<li className='todo__item'>
						<img className='todo__item-icon' src={w_guards_icon} alt='Activity icon'></img>
						<p className='todo__item-name'>Гер. гварды</p>
					</li>
					<li className='todo__item'>
						<img className='todo__item-icon' src={argos} alt='Activity icon'></img>
						<p className='todo__item-name'>Аргос</p>
					</li>
					<li className='todo__item'>
						<img className='todo__item-icon' src={boldan} alt='Activity icon'></img>
						<p className='todo__item-name'>Волдан</p>
					</li>
					<li className='todo__item'>
						<img className='todo__item-icon' src={booba} alt='Activity icon'></img>
						<p className='todo__item-name'>Белакис</p>
					</li>
					<li className='todo__item'>
						<img className='todo__item-icon' src={clown} alt='Activity icon'></img>
						<p className='todo__item-name'>Ку-Сатот</p>
					</li>
					<li className='todo__item'>
						<img className='todo__item-icon' src={avr} alt='Activity icon'></img>
						<p className='todo__item-name'>Аврельсуд</p>
					</li>
				</ul>
			</div>

			{!!currentChars === true
				? currentChars.map((i) => (
						<Char name={i!.name} gs={i!.info.gs} id={i.info.id} key={i.info.id} clas={i.info.clas} completed={i.info.isChecked} />
				  ))
				: null}
		</div>
	);
};
export default DailyTable;
