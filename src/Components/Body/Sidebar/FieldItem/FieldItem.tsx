import { MenuItem } from '../../../../Icons';
import styles from './FieldItem.style.module.scss';
const FieldItem = ({title} : {title: string}) => {
	return (
		<div className={styles.fieldItem}>
			<div className={styles.itemLogo}>
				<MenuItem />
			</div>
			<div>{title}</div>
			
		</div>
	);
};
export default FieldItem;
