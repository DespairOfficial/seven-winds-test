import Content from './Content/Content'
import Sidebar from './Sidebar/Sidebar'
import styles from './Body.style.module.scss'
const Body = ()=>{
	return <div className={styles.main}>
		<Sidebar />
		<Content/>
	</div>
}
export default Body