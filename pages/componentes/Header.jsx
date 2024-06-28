import styles from '@/styles/Header.module.css';
import Link from 'next/link';

export default function Header(){
    return(
        <header className={styles.header}>

            <div className={`${styles.container} limit`}>

                <i className={`bi bi-balloon-heart ${styles.logo}`}></i>

                <nav className={styles.nav}>
                    <Link className={styles.link} href='/'>Cadastro</Link>
                    <Link className={styles.link} href='/listas'>Listas</Link>
                </nav>
            </div>

        </header>
    )
}