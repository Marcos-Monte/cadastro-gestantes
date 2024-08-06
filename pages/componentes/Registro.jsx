import Botao from './BotaoSubmit';

import styles from '@/styles/Registro.module.css';

export default function Registro(props){

    // Função para lidar com o clique no registro
    const handleClick = () => {
        console.log("Registro clicado:", props.id);
        props.pegarIdRegistro(props.id); // Passa o ID para a função onClick fornecida via props
    };

    // Função para lidar com o clique no botão de deletar
    const handleDelete = () => {
        console.log("Delete clicado para ID:", props.id);
        if (props.onDelete) {
            props.onDelete(props.id); // Passa o ID para a função onDelete fornecida via props
        }
    };

    // Função para lidar com o clique no botão de atualizar
    const handleUpdate = () => {
        console.log("Update clicado para ID:", props.id);
        if (props.onUpdate) {
            props.onUpdate(props.id); // Passa o ID para a função onUpdate fornecida via props
        }
    };

    return (
        <div className={styles.registro} onClick={handleClick}>

            <div className={styles.dados} >
                <p className={styles.nome}>Nome: {props.nome}</p>
                <p className={styles.dn}>Data de Nascimento: {props.dn}</p>
                <p className={styles.endereco}>Endereço: {props.endereco}</p>
                <p className={styles.telefone}>telefone: {props.telefone}</p>
                <p className={styles.equipe}>Equipe Responsável: {props.equipe}</p>
            </div>

            <div className={styles.botoes}>
                <Botao 
                    estilo='botaoRegistro'
                    nome='Atualizar'
                    funcao={handleUpdate}
                /> 
                <Botao 
                    estilo='botaoRegistro'
                    nome='Deletar'
                    funcao={handleDelete}
                /> 
            </div>
        </div>
    )
}