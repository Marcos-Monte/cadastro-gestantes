// Importando conteúdo das dependencias
import { useEffect, useState } from 'react';

// Buscar dados armazenados no BD
import { buscarDados } from '../api';

// Filtrar: equipe / risco
import { filtrarRisco } from '../services/service';

// Arquivo de Estilização
import styles from '@/styles/Gestantes.module.css';

// Componente com dados de cada equipe
import CardEquipe from './CardEquipe';

export default function Geral(){

    // Variaveis de Estado
    const [dados, setDados] = useState([]);// Estado para armazenar todos os dados

    const [altoAzul, setAltoAzul] = useState([]);
    const [baixoAzul, setBaixoAzul] = useState([]);
    const [altoVerde, setAltoVerde]= useState([]);
    const [baixoVerde, setbaixoVerde]= useState([]);
    const [altoAmarela, setAltoAmarela]= useState([]);
    const [baixoAmarela, setBaixoAmarela]= useState([]);

    const [erro, setErro]= useState(null);// Estado para armazenar erros
    const [carregando, setCarregando]=useState(true);// Estado para controlar o carregamento

    // Função 'assincrona' : Método GET no banco de Dados
    async function fetchData(){
        try{
            // Todos os dados do BD
            const listaGestantes = await buscarDados();

            // Riscos: Azul
            const altoRiscoAzul = filtrarRisco(listaGestantes, 'azul', 'alto')
            const baixoRiscoAzul = filtrarRisco(listaGestantes, 'azul', 'baixo')

            // Riscos: Verde
            const altoRiscoVerde = filtrarRisco(listaGestantes, 'verde', 'alto')
            const baixoRiscoVerde = filtrarRisco(listaGestantes, 'verde', 'baixo')

            // Riscos: Amarela
            const altoRiscoAmarela = filtrarRisco(listaGestantes, 'amarela', 'alto')
            const baixoRiscoAmarela = filtrarRisco(listaGestantes, 'amarela', 'baixo')

            // Atribuindo lista a variavel de estado 'dados'
            setDados(listaGestantes)

            setAltoAzul(altoRiscoAzul)
            setBaixoAzul(baixoRiscoAzul)

            setAltoVerde(altoRiscoVerde)
            setbaixoVerde(baixoRiscoVerde)

            setAltoAmarela(altoRiscoAmarela)
            setBaixoAmarela(baixoRiscoAmarela)

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

            <CardEquipe 
                equipe='Azul'
                baixo={baixoAzul}
                alto={altoAzul}
                
            />

            <CardEquipe 
                equipe='Verde'
                baixo={baixoVerde}
                alto={altoVerde}
                
            />

            <CardEquipe 
                equipe='Amarela'
                baixo={baixoAmarela}
                alto={altoAmarela}
                
            />
            
        </section>
    )
}