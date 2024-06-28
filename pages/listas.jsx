import styles from "@/styles/Listas.module.css";
import Head from "next/head";

import Filtros from "./componentes/Filtros";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

import ShowSheetData from "./componentes/ShowSheetData";

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

                <Header 
                    children={<Filtros />}
                />

                <main className={styles.main}>

                    {/* <Filtros /> */}

                    <section className={`${styles.container} limit`}>
                        <ShowSheetData />
                    </section>
                    
                </main>

                <Footer />

            </div>
        </>
    )
}
