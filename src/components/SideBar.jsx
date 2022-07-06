import { PencilLine } from 'phosphor-react';
import styles from './SideBar.module.css';

export function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"
            />
        
            <div className={styles.profile}>
                <img  className={styles.avatar} src="https://avatars.githubusercontent.com/u/48858873?v=4" alt="foto perfil" />

                <strong>Andre Costa</strong>
                <span>Node JS / React JS</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20}/>
                   Editar seu perfil 
                </a>
            </footer>
        </aside>
    );
}