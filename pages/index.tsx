import styles from '../styles/Home.module.css';
import Toolbar from '../components/Toolbar/index'
import Navbar from '../components/Navbar';
import Main from '../components/Main';


export default function Home() {
  return (
    <div className={styles.container}> 
      <Navbar />
      <Toolbar/>
      <Main/>
    </div>
  )
}
