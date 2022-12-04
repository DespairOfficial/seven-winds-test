import { ChevronDown } from '../../../Icons';
import FieldItem from './FieldItem/FieldItem';
import styles from './Sidebar.style.module.scss';
const Sidebar = () => {
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<div>
					<div>Название проекта</div>
					<div className={styles.abbreviation}>Аббревиатура</div>
				</div>
				<div className={styles.chevron}>
					<ChevronDown />
				</div>
			</div>
			<div className={styles.field}>
				<FieldItem title="По проекту" />
				<FieldItem title="Объекты" />
				<FieldItem title="РД" />
				<FieldItem title="МТО" />
				<FieldItem title="СМР" isSelected={true}/>
				<FieldItem title="График" />
				<FieldItem title="МиМ" />
				<FieldItem title="Рабочие" />
				<FieldItem title="Капвложения" />
				<FieldItem title="Бюджет" />
				<FieldItem title="Финансирование" />
				<FieldItem title="Панорамы" />
				<FieldItem title="Камеры" />
				<FieldItem title="Поручения" />
				<FieldItem title="Контрагенты" />
			</div>
		</div>
	);
};
export default Sidebar;
