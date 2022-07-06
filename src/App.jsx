
import { Post } from './Post';

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
        <Post
        author="Andre Costa"
        content="lorem ipsum dolor sit amet, consectetur adip"
      />
      <Post
        author="Andre Costa"
        content="lorem ipsum dolor sit amet, consectetur adip"
      />
        </main>
      </div>
    </div>
  )
}

export default App
