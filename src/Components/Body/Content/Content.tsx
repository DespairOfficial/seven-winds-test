import styles from './Content.style.module.scss';
import Table from './Table/Table';
const Content = () => {
	return (
		<div className={styles.main}>
			<div className={styles.title}>
				<div>Строительно-монтажные работы</div>
			</div>
			<Table/>
		</div>
	);
};
export default Content;
