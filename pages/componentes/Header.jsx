import styles from '@/styles/Header.module.css';
import Link from 'next/link';

export default function Header(props){
    return(
        <header className={styles.header}>

            <div className={`${styles.container} limit`}>

                <i className={`bi bi-balloon-heart ${styles.logo}`}></i>

                <nav className={styles.nav}>
                    <Link className={styles.link} href='/'>Gestantes</Link>
                    <Link className={styles.link} href='/cadastro'>Cadastro</Link>
                </nav>
                
            </div>
            
            {props.children}

        </header>
    )
}