import styles from "@/styles/Home.module.css";
import Head from "next/head";

import Footer from "./componentes/Footer";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Gestantes</title>
        <meta name="description" content="Pagina de cadastro de gestantes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.body}`}>

        <Header />
        <main className={styles.main}>
          <Formulario />
        </main>
        <Footer />

      </div>
    </>
  );
}
