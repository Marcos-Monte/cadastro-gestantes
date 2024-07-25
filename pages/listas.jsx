import axios from 'axios';
import { useEffect, useState } from 'react';

import styles from "@/styles/Listas.module.css";
import Head from "next/head";

import Botao from "./componentes/BotaoSubmit";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

import mostrarGestante from '@/pages/services/index.jsx';

const server = axios.create({
    baseURL: 'http://localhost:3000'
})


export default function Listas() {

    const [dados, setDados] = useState([]); // Estado para armazenar todos os dados
    const [dadosFiltrados, setDadosFiltrados] = useState([]); // Estado para armazenar os dados filtrados
    const [erro, setErro] = useState(null); // Estado para armazenar erros

    // useEffect, garante que a requisição seja feita apenas uma vez ao iniciar a pagina
    useEffect(() => {

        server.get('api/api')
            .then((resposta) => {
                setDados(resposta.data);
                setDadosFiltrados(resposta.data);
            })
            .catch((erro) => {
                setErro(erro.message || 'Erro ao carregar dados')
            })

    }, [] // Array vazio garante que o useEffect rode apenas uma vez
);

    if (erro) return <div>Error: {erro}</div>;

    function handleFiltro(equipe){
        if(dados.length > 0){
            const filtrados = dados.filter(
                (gestante) => gestante.equipe.toLowerCase() === equipe.toLowerCase()
            )
            
            setDadosFiltrados(filtrados)
            
        } else {
            setDadosFiltrados(dados)
            
        }
        
    }

    function handleSemFiltro(){
        setDadosFiltrados(dados)
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
                                    estilo='botaoSubmit' 
                                    nome='Todas' 
                                    funcao={handleSemFiltro} 
                                />
                                <Botao 
                                    estilo='botaoSubmit' 
                                    nome='Azul' 
                                    funcao={() => handleFiltro('azul')} 
                                />
                                <Botao 
                                    estilo='botaoSubmit' 
                                    nome='Verde' 
                                    funcao={() => handleFiltro('verde')} 
                                />
                                <Botao 
                                    estilo='botaoSubmit' 
                                    nome='Amarelo' 
                                    funcao={() => handleFiltro('amarela')} 
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
