import arcane_icon from '../images/arcan-icon.png';
import arch_icon from '../images/arch-icon.png';
import avatar_icon from '../images/avatar-icon.png';
import bard_icon from '../images/bard-icon.png';
import bers_icon from '../images/bers-icon.png';
import blade_icon from '../images/blade-icon.png';
import destr_icon from '../images/destr-icon.png';

import dual_icon from '../images/dual-icon.png';
import dh_icon from '../images/dh-icon.png';
import guns_icon from '../images/guns-icon.png';
import lance_icon from '../images/lance-icon.png';
import furi_icon from '../images/furi-icon.png';
import pal_icon from '../images/pal-icon.png';
import gunner_icon from '../images/gunner-icon.png';
import reaper_icon from '../images/reaper-icon.png';
import scout_icon from '../images/scout-icon.png';
import sm_icon from '../images/sm-icon.png';
import sorc_icon from '../images/sorc-icon.png';
import taig_icon from '../images/taig-icon.png';
import wl_icon from '../images/wl-icon.png';
import sum_icon from '../images/sum-icon.png';

export interface Option {
	value: string;
	label: string;
	img: string;
}
export const options: Option[] = [
	{ value: 'арканолог', label: 'Арканолог', img: arcane_icon },
	{ value: 'лучник', label: 'Лучник', img: arch_icon },
	{ value: 'аватар', label: 'Аватар', img: avatar_icon },
	{ value: 'бард', label: 'Бард', img: bard_icon },
	{ value: 'берсерк', label: 'Берсерк', img: bers_icon },
	{ value: 'клинок', label: 'Клинок', img: blade_icon },
	{ value: 'копье', label: 'Копье', img: lance_icon },
	{ value: 'сокрушитель', label: 'Сокрушитель', img: destr_icon },
	{ value: 'дх', label: 'ДХ', img: dh_icon },
	{ value: 'gunslinger', label: 'Gunslinger', img: guns_icon },
	{ value: 'дуалист', label: 'Дуалист', img: dual_icon },
	{ value: 'фурия', label: 'Фурия', img: furi_icon },
	{ value: 'механист', label: 'Механист', img: gunner_icon },
	{ value: 'паладин', label: 'Паладин', img: pal_icon },
	{ value: 'жнец', label: 'Жнец', img: reaper_icon },
	{ value: 'скаут', label: 'Скаут', img: scout_icon },
	{ value: 'чародейка', label: 'Чародейка', img: sorc_icon },
	{ value: 'призывательница', label: 'Призывательница', img: sum_icon },
	{ value: 'тайгон', label: 'Тайгон', img: taig_icon },
	{ value: 'ки-мастер', label: 'Ки-мастер', img: sm_icon },
	{ value: 'Страж', label: 'Страж', img: wl_icon },
];
