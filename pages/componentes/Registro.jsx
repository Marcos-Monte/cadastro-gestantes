import styles from '@/styles/Registro.module.css';

export default function Registro(){
    return (
        <div className={styles.registro}>
            <p className={styles.nome}>Marcos Monte</p>
            <p className={styles.dn}>18/11/1988</p>
            <p className={styles.endereco}>Rua Renata Camara Agondi</p>
            <p className={styles.telefone}>13 996398240</p>
        </div>
    )
}