import styles from "@/styles/Listas.module.css";
import Head from "next/head";

import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Registro from "./componentes/Registro";

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

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste molestiae tempore consequatur tempora quam nobis maiores, neque placeat, consectetur laudantium corporis aperiam distinctio nesciunt quibusdam doloremque similique porro quisquam odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam earum ducimus officiis aliquam culpa repudiandae sint magni, blanditiis voluptate quos illo. Quis necessitatibus laboriosam veritatis, mollitia deserunt quos maiores <quam className="lorem"></quam></p>
                    <Registro />
                    <Registro />
                    <Registro />
                    <Registro />
                    <Registro />
                </main>

                <Footer />

            </div>
        </>
    )
}
