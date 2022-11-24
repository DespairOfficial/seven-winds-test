import {Share, Options} from '../../Icons'
import styles from './Header.style.module.scss'
const Header = () =>{
	return (
		<div className={styles.main}>
			<div className={styles.options}><Options/></div>
			<div className={styles.share}><Share/></div>
			<div className={styles.menu}>
				<div className={styles.selected}>Просмотр</div>
				<div>Управление</div>		
			</div>
				
		</div>
	)
}
export default Header