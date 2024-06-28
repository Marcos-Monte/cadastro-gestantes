import styles from "@/styles/Listas.module.css";
import Head from "next/head";

import Botao from "./componentes/BotaoSubmit";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

import { useEffect, useState } from 'react';

import mostrarGestante from '@/pages/services/index.js';


export default function Listas() {

    const [data, setData] = useState([]);
    const [dataFiltrada, setDataFiltrada] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('/api/getSheetData');
                
                if (!response.ok) {
                throw new Error('Failed to fetch data');
                }

                const result = await response.json();
                
                setData(result);
                setDataFiltrada(result); // Inicialmente, mostramos todos os dados

            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();

    }, []);

    if (error) return <div>Error: {error}</div>;

    function handleFiltro(equipe){
        const filtrados = data.filter(
            (gestante) => gestante.equipe.toLowerCase() === equipe.toLowerCase()
        );
        setDataFiltrada(filtrados)
    }

    function handleSemFiltro(){
        setDataFiltrada(data)
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
                            Quantidade : {dataFiltrada.length}
                        </span>
                    
                        <div className={styles.listas}>

                                {
                                    mostrarGestante(dataFiltrada, 'Nenhuma Gestante Cadastrada')
                                    
                                }

                        </div>

                    </section>
                    
                </main>

                <Footer />

            </div>
        </>
    )
}
