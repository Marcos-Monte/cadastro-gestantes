// Importando conteúdo das dependencias
import { useEffect, useState } from 'react';

// Buscar dados armazenados no BD
import { buscarDados } from '../api';

// Arquivo de Estilização
import styles from '@/styles/Gestantes.module.css';

export default function Geral(){

    // Variaveis de Estado
    const [dados, setDados] = useState([]);// Estado para armazenar todos os dados
    const [erro, setErro]= useState(null);// Estado para armazenar erros
    const [carregando, setCarregando]=useState(true);// Estado para controlar o carregamento

    // Função 'assincrona' : Método GET no banco de Dados
    async function fetchData(){
        try{
            const listaGestantes = await buscarDados();
            // Atribuindo lista a variavel de estado 'dados'
            setDados(listaGestantes)

        }catch(erro){
            setErro('Erro ao carregar dados!')
        } finally {
            setCarregando(false)
        }
    }

    // Garante que a 'busca por dados' seja feita apenas ao inicializar o componente
    useEffect(() => {

        // Método GET
        fetchData();

    }, [])

    if (erro) return <div>Error: {erro}</div>;
    
    return(
        <section className={styles.container}>

            <span className={styles.quantidade}>
                    Quantidade Geral : {dados.length}
            </span>
            
        </section>
    )
}