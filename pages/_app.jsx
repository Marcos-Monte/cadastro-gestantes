import "@/styles/globals.css";

// Para convigurar o 'head' da aplicação
import Head from "next/head";

// Biblioteca, instalada, para PopUp's (Alerts)
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pagina de Cadastro de Gestantes" />
        <link rel="icon" href="/ico.webp" />  
      </Head>
      <Component {...pageProps} />;
      <ToastContainer style={{ zIndex: 9999 }} />
    </>
  )
}
