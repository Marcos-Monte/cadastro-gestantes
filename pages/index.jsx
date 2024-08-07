// Importando conteúdo das dependencias
import { useState } from 'react';

// Importando arquivo de estilização
import styles from "@/styles/Home.module.css";

//Importando componentes 
import Head from "next/head";
import Botao from "./componentes/BotaoSubmit";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

// Conteudo dinâmico da pagina
import Geral from './componentes/Geral';
import Gestantes from './componentes/Gestantes';

// Componente Principal
export default function Listas() {

    // Variaveis de Estado
    const [conteudo, setConteudo] = useState(<Geral />)// Conteudo Principal da Pagina

    function geral(){
        setConteudo(<Geral />)
    }

    function gestantePorEquipe(equipe){
        setConteudo(<Gestantes filtro={equipe}/>)
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
                                    funcao={() => geral()}
                                />
                                <Botao 
                                    estilo='botaoSubmit' 
                                    nome='Azul' 
                                    funcao={() => gestantePorEquipe('azul')}
                                />
                                <Botao 
                                    estilo='botaoSubmit' 
                                    nome='Verde' 
                                    funcao={() => gestantePorEquipe('verde')}
                                />
                                <Botao 
                                    estilo='botaoSubmit' 
                                    nome='Amarela' 
                                    funcao={() => gestantePorEquipe('amarela')} 
                                />
                                
                            </nav>
                        </div>
                    }
                />

                <main className={styles.main}>

                    <section className={`${styles.container} limit`}>
                    
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
