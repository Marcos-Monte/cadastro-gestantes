// Importando conteúdo das dependencias
import axios from 'axios';
import { useEffect, useState } from 'react';

// Importando arquivo de estilização
import styles from "@/styles/Listas.module.css";

//Importando componentes 
import Head from "next/head";
import Botao from "./componentes/BotaoSubmit";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

// Importando funções da camada de serviços
import mostrarGestante, { handleFiltro, handleSemFiltro } from '@/pages/services/service.jsx';

// Configuranco uma Instancia de Axios. Para fazer requisições HTTP
const server = axios.create({
    baseURL: 'https://cadastro-gestantes.vercel.app/'
})

// Componente Principal
export default function Listas() {

    const [dados, setDados] = useState([]); // Estado para armazenar todos os dados
    const [dadosFiltrados, setDadosFiltrados] = useState([]); // Estado para armazenar os dados filtrados
    const [erro, setErro] = useState(null); // Estado para armazenar erros

    // Função que faz a requisição HTTP GET e mostrando os dados
    function buscarDados(){

        // Requisição 'GET' usando 'server' (http://localhost:3000/ + api/api)
        server.get('api/api')
            .then((resposta) => {
                setDados(resposta.data); // Dados armazenados na variável de estado
                setDadosFiltrados(resposta.data); // Dados armazenados na variável de estado
            })
            .catch((erro) => {
                setErro(erro.message || 'Erro ao carregar dados') // Dados armazenados na variável de estado
            })
    }

    // useEffect, garante que a requisição seja feita apenas uma vez ao iniciar a pagina
    useEffect(() => {

        buscarDados()

    }, [] // Array vazio garante que o useEffect rode apenas uma vez
);

    if (erro) return <div>Error: {erro}</div>;


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
                                    estilo='botaoSubmit' 
                                    nome='Todas' 
                                    funcao= {() => setDadosFiltrados(handleSemFiltro(dados))} 
                                />
                                <Botao 
                                    estilo='botaoSubmit' 
                                    nome='Azul' 
                                    funcao={() => setDadosFiltrados(handleFiltro(dados, 'azul'))} 
                                />
                                <Botao 
                                    estilo='botaoSubmit' 
                                    nome='Verde' 
                                    funcao={() => setDadosFiltrados(handleFiltro(dados, 'verde'))} 
                                />
                                <Botao 
                                    estilo='botaoSubmit' 
                                    nome='Amarelo' 
                                    funcao={() => setDadosFiltrados(handleFiltro(dados, 'amarela'))} 
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
                                    mostrarGestante(dadosFiltrados, 'Nenhuma Gestante Cadastrada')
                                    
                                }

                        </div>

                    </section>
                    
                </main>

                <Footer />

            </div>
        </>
    )
}
