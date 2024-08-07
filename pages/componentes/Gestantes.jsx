// Importando conteúdo das dependencias
import { useEffect, useState } from 'react';

// Buscar dados armazenados no BD
import { buscarDados } from '../api/index.js';

// Arquivo de Estilização
import styles from '@/styles/Gestantes.module.css';

// Função que importa Registro de Gestante na Lista
import Registro from "../componentes/Registro";

// Métodos 'delete e update'
import { atualizarRegistro, deletarRegistro } from '../api';

// Função para formatar data de nascimento
import { formatDate } from "../services/service";

export default function Gestantes(props){

    // Variaveis de Estado
    const [dados, setDados] = useState([]); // Estado para armazenar todos os dados
    const [erro, setErro] = useState(null); // Estado para armazenar erros
    const [carregando, setCarregando] = useState(true); // Estado para controlar o carregamento

    // Função 'assincrona' : Método GET no banco de Dados
    const fetchData = async (equipe) => {
        try{
            const resultado = await buscarDados();

            // Filtrando a lista
            const resultadoFiltrado = resultado.filter(
                (gestante) => gestante.equipe === equipe
            )

            // Atribuindo lista filtrada a variavel de estado 'dados'
            setDados(resultadoFiltrado)
            
        } catch(erro){
            setErro('Erro ao carregar dados')

        }finally {
            setCarregando(false)

        }
    }

    // useEffect agora inclui 'props.filtro' como dependência
    useEffect(() => {
        
        if (props.filtro) {
            fetchData(props.filtro);
        }

    }, [props.filtro]); // Adiciona props.filtro ao array de dependências
    
    if (erro) return <div>Error: {erro}</div>;

    return (
        <div className={styles.container}>
            <span className={styles.quantidade}>
                    Quantidade : {dados.length}
            </span>
            {
                
                dados.length > 0 ?
    
                dados.map(
        
                    (gestante) => (
                        
                        <Registro 
                            key={gestante.id} // Use o ID como chave
                            id={gestante.id}
                            nome={gestante.nome}
                            dn={formatDate(gestante.data)}
                            endereco={gestante.endereco}
                            telefone={gestante.telefone}
                            equipe={gestante.equipe}
                            onDelete={() => deletarRegistro(gestante.id, dados)} // Passa a função de deletar
                            onUpdate={() => atualizarRegistro(gestante.id)} // Passa a função de atualizar
                        />
        
                    )
                ) : <p>{erro}</p>
            }
        </div>
    )

}