import styles from "@/styles/Home.module.css";
import Head from "next/head";

import Botao from "./componentes/BotaoSubmit";
import Footer from "./componentes/Footer";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";

export default function Home() {

  const botao = <Botao estilo="botaoSubmit" tipo="submit" nome="Cadastrar"/>

  return (
    <>
      <Head>
        <title>Gestantes</title>
        <meta name="description" content="Pagina de cadastro de gestantes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`${styles.body}`}>

        <Header />

        <main className={styles.main}>

          <section className={`${styles.container} limit`}>
            
            <Formulario 
              botaoSubmit={botao}
            />
            
          </section>
          
        </main>
        
        <Footer />

      </div>
    </>
  );
}
