import styles from '@/styles/Registro.module.css';

export default function Registro(props){
    return (
        <div className={styles.registro}>
            <p className={styles.nome}>Nome: {props.nome}</p>
            <p className={styles.dn}>Data de Nascimento: {props.dn}</p>
            <p className={styles.endereco}>Endereço: {props.endereco}</p>
            <p className={styles.telefone}>telefone: {props.telefone}</p>
            <p className={styles.equipe}>Equipe Responsável: {props.equipe}</p>
        </div>
    )
}