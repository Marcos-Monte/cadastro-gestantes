import styles from '@/styles/Footer.module.css';

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <span className={styles.assinatura}>Desenvolvido por <a className={styles.ancora} href="https://www.linkedin.com/in/montemarcos/" target='_blank'>@Marcos Monte</a></span>
        </footer>
    )
}