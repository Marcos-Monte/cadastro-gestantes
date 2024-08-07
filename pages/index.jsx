// Importando conteúdo das dependencias
import { useEffect, useState } from 'react';

// Import de instancia de Axios: Biblioteca para fazer requisições HTTP
import { server } from './api';

// Importando arquivo de estilização
import styles from "@/styles/Listas.module.css";

//Importando componentes 
import Head from "next/head";
import Botao from "./componentes/BotaoSubmit";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

// Conteudo dinâmico da pagina
import Geral from './componentes/Geral';
import Gestantes from './componentes/Gestantes';
import { handleFiltro } from './services/service';

// Componente Principal
export default function Listas() {

    // Variaveis de Estado
    const [dados, setDados] = useState([]); // Estado para armazenar todos os dados
    const [dadosFiltrados, setDadosFiltrados] = useState([]); // Estado para armazenar os dados filtrados
    const [erro, setErro] = useState(null); // Estado para armazenar erros

    // Conteudo Principal da Pagina
    const [conteudo, setConteudo] = useState(<Geral />)

    // Função que faz a requisição HTTP GET e mostrando os dados
    const buscarDados = async () => {
        
        // Envia requisição 'GET' para o endpoint da API-backend com os dados do formulário
        try {
            const resposta = await server.get('/');
            console.log('Resposta da API:', resposta.data); // Verifique aqui
            setDados(resposta.data) // Dados armazenados na variável de estado
            setDadosFiltrados(resposta.data) // Dados armazenados na variável de estado

        } catch(erro) {
            setErro(erro.response ? erro.response.data : 'Erro ao carregar dados')
        }
    }

    // useEffect, garante que a requisição seja feita apenas uma vez ao iniciar a pagina
    useEffect(() => {

        buscarDados(); // Buscar dados ao montar o componente

        // // Configurar intervalo de polling
        // const intervalo = setInterval(() => {
        //     buscarDados(); // Buscar dados a cada 5 segundos
        // }, 5000);

        // // Limpar o intervalo quando o componente for desmontado
        // return () => clearInterval(intervalo);

    }, [] // Array vazio garante que o useEffect rode apenas uma vez
);

    if (erro) return <div>Error: {erro}</div>;

    function handleClickFilter(equipe){
        const dadosFiltradosPorEquipe = handleFiltro(dados, equipe);
        setDadosFiltrados(dadosFiltradosPorEquipe);
        setConteudo(<Gestantes listaGestantes={dadosFiltradosPorEquipe} />);
    }

    return (
        <>
            <Head>
                <title>Gestantes</title>
                <meta name="description" content="Pagina de cadastro de gestantes" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={`${styles.body}`}>

                <Header 
                    children={
                        
                        <div className={styles.containerFiltros}>
                            <nav className={`${styles.filtros} limit`}>
                                <Botao 
                                    estilo='botaoSubmit2' 
                                    nome='Geral' 
                                    funcao= {() => {
                                        setConteudo(<Geral />)}} 
                                />
                                <Botao 
                                    estilo='botaoSubmit' 
                                    nome='Azul' 
                                    funcao={() => {
                                        handleClickFilter('azul')
                                    }} 
                                />
                                <Botao 
                                    estilo='botaoSubmit' 
                                    nome='Verde' 
                                    funcao={() => {
                                        handleClickFilter('verde')
                                    }}  
                                />
                                <Botao 
                                    estilo='botaoSubmit' 
                                    nome='Amarela' 
                                    funcao={() => {
                                        handleClickFilter('amarela')
                                    }}  
                                />
                                
                            </nav>
                        </div>
                    }
                />

                <main className={styles.main}>

                    <section className={`${styles.container} limit`}>

                        <span className={styles.quantidade}>
                            Quantidade : {dadosFiltrados.length}
                        </span>
                    
                        <div className={styles.listas}>

                                {
                                    conteudo
                                    
                                }

                        </div>

                    </section>
                    
                </main>

                <Footer />

            </div>
        </>
    )
}
