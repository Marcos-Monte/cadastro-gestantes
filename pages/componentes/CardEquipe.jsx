import styles from '@/styles/CardEquipe.module.css';

export default function CardEquipe(props){

    const alto = props.alto;
    const baixo = props.baixo;
    
    const total = alto + baixo;

    return(
        <div className={styles.card}>

            <h2 className={styles.titulo}>{props.equipe}</h2>

            <div className={styles.tabela}>

                <span className={styles.item}>Alto Risco: {alto}</span>
                <span className={styles.item}>Baixo Risco: {baixo}</span>
                <span className={styles.item}>Total: {total}</span>
                
            </div>
        </div>
    )
}