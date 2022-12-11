
import { Post } from './components/Post';

import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { SideBar } from './components/SideBar';



function App() {

  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <SideBar/>
        <main>
        <Post/>
        <Post/>
        <Post/>
        </main>
      </div>
    </div>
  )
}

export default App
