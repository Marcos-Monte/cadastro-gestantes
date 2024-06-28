import styles from '@/styles/Botao.module.css'

export default function Botao(props){
    return(
        <button 
            className={styles[props.estilo]} 
            type={props.tipo} 
            onClick={props.funcao}
        >
            {props.nome}
        </button>
    )
}
