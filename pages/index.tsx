import styles from '../styles/Home.module.css';
import Toolbar from '../components/Toolbar';
import Navbar from '../components/Navbar';
import Main from '../components/Main';


export default function Home() {
  return (
    <div className={styles.container}> 
      <Navbar />
      <Toolbar name='hari' />
      <Main/>
    </div>
  )
}
