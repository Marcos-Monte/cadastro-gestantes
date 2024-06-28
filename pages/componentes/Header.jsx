import styles from '@/styles/Header.module.css';

export default function Header(){
    return(
        <header className={styles.header}>

            <div className={`${styles.container} limit`}>
                <i className={`bi bi-balloon-heart ${styles.logo}`}></i>
            </div>
            
        </header>
    )
}