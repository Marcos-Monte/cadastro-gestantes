import styles from '@/styles/Filtros.module.css';

import Botao from '@/pages/componentes/BotaoSubmit.jsx';

export default function Filtros(){

    function handleCategoria(){
        console.log('Botao')
    }

    return(
        <div className={styles.container}>
            <nav className={`${styles.filtros} limit`}>
                <Botao estilo='botaoSubmit' nome='Categoria1' tipo='submit' funcao={handleCategoria} />
                <Botao estilo='botaoSubmit' nome='Categoria2' tipo='submit' funcao={handleCategoria} />
                <Botao estilo='botaoSubmit' nome='Categoria2' tipo='submit' funcao={handleCategoria} />
            </nav>
        </div>
    )
}