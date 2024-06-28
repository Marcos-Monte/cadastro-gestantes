import styles from '@/styles/Formulario.module.css'

import handleSubmit from '../api/submit.js'
import Botao from './BotaoSubmit.jsx'

export default function Formulario(){
    return(
        <form className={styles.formulario} action="https://sheetdb.io/api/v1/pexqrnjxmcmxj" methor='post' id="formulario" onSubmit={handleSubmit}>

            <legend className={styles.tituloFormulario}>Cadastro de Gestante</legend>

            <fieldset className={styles.camposFormulario}>

            <legend className={styles.tituloCampos}>Dados da Gestante</legend>

            <div className={styles.info}>
                <label className={styles.label} htmlFor="id-nome">Nome</label>
                <input className={styles.input}type="text" id="id-nome" name="data[nome]" placeholder='Nome Completo'/>
            </div>
            
            <div className={styles.info}>
                <label className={styles.label} htmlFor="id-dn">D. N..</label>
                <input className={styles.input} type="date" id="id-dn" name="data[dn]" />
            </div>

            <div className={styles.info}>
                <label className={styles.label}htmlFor="id-endereco">Endereço</label>
                <input className={styles.input} type="text" id="id-endereco" name="data[endereco]" placeholder='Endereço Completo'/>
            </div>

            <div className={styles.info}>
                <label className={styles.label}htmlFor="id-telefone">Telefone</label>
                <input className={styles.input} type="tel" id="id-telefone" name="data[telefone]"placeholder='Nome Completo' />
            </div>

            </fieldset>

            <Botao estilo='botaoSubmit' tipo='submit' nome='Cadastrar'/>

        </form>
    )
}