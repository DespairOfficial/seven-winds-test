import { MenuItem } from '../../../../Icons';
import styles from './FieldItem.style.module.scss';
const FieldItem = ({
	title,
	isSelected,
}: {
	title: string;
	isSelected?: boolean;
}) => {
	return (
		<div
			className={
				styles.fieldItem 
			}
			style={isSelected ? {backgroundColor: '#A1A1AA'} : {}}
		>
			<div className={styles.itemLogo}>
				<MenuItem />
			</div>
			<div>{title}</div>
		</div>
	);
};
export default FieldItem;
