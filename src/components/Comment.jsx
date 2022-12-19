import { Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return (
        <div className={styles.comment}>
            <img src="https://github.com/andre.costa101.png" />

            <div className={styles.CommentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Andre</strong>
                            <time title='11 de maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! </p>
                </div>
                <footer>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                </footer>
            </div>
        </div>
    )
}