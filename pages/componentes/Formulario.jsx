// Biblioteca para gerenciar estado dos componentes
import { useState } from "react";

// Função do Método POST
import { criarRegistro } from "../api/index.js";

// Funções de validação dos campos: Nome e Telefone
import { handleNomeChange, handleWhatsChange } from "../services/service.jsx";

// Estilos CSS
import styles from "@/styles/Formulario.module.css";

export default function Formulario(props) {

  // Campos do novo registro
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [data, setData] = useState('');
  const [endereco, setEndereco] = useState('');
  const [equipe, setEquipe] = useState('');
  const [parceiro, setParceiro] = useState('')

  // Campos da nova Gestação
  const [dum, setDum] = useState('');
  const [gestacoes, setGestacoes] = useState('');

  // Compila os 'inputs' do formulário e cria um novo registro usando o método POST
  function addUser(event){
  // Previne o comportamento Padrão. Impede que o formulário seja enviado de forma tradicional
  event.preventDefault();

  // Cria o objeto Json
  const registro = {
    nome: nome,
    data: new Date(data), // Exemplo de como enviar a data no formato ISO
    endereco: endereco,
    telefone: telefone,
    equipe: equipe,
    parceiro: parceiro === ''? 'Não Declarado': parceiro,
    dum: new Date(dum), // Exemplo de como enviar a data no formato ISO,
    gestacoes: parseInt(gestacoes)
  }

  // if(parceiro === ''){
  //   setParceiro('Não Declarado')
  // }
  
  criarRegistro(registro)

  // Resetando os campos do formulário
  setNome("");
  setData("");
  setEndereco("");
  setTelefone("");
  setEquipe("");
  setParceiro("");
  setDum("");
  setGestacoes("");

}

  return (
    <form
      className={styles.formulario}
      method="post"
      id="formulario"
      onSubmit={addUser}
    >
      <legend className={styles.tituloFormulario}>Cadastro de Gestante</legend>

      <fieldset className={styles.camposFormulario}>
        <legend className={styles.tituloCampos}>Dados da Gestante</legend>

        <div className={styles.info}>
          <label className={styles.label} htmlFor="id-nome">
            Nome
          </label>
          <input
            className={styles.input}
            type="text"
            id="id-nome"
            name="data[nome]"
            value={nome}
            // A função anonima: garante que as funções handleNomeChange e handleWhatsChange sejam chamadas apenas quando o evento de mudança ocorrer, passando o evento e como argumento.
            onChange={(e) => setNome(handleNomeChange(e))}
            placeholder="Nome Completo"
            required
          />
        </div>

        <div className={styles.info}>
          <label className={styles.label} htmlFor="id-dn">
            D. N..
          </label>
          <input
            className={styles.input}
            type="date"
            id="id-dn"
            max={`3024-12-31`}
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />
        </div>

        <div className={styles.info}>
          <label className={styles.label} htmlFor="id-endereco">
            Endereço
          </label>
          <input
            className={styles.input}
            type="text"
            id="id-endereco"
            name="data[endereco]"
            onChange={(e) => setEndereco(e.target.value)}
            value={endereco}
            placeholder="Endereço Completo"
            required
          />
        </div>

        <div className={styles.info}>
          <label className={styles.label} htmlFor="telefone">
            Telefone
          </label>
          <input
            className={styles.input}
            type="tel"
            id="telefone"
            name="data[telefone]"
            // A função anonima: garante que as funções handleNomeChange e handleWhatsChange sejam chamadas apenas quando o evento de mudança ocorrer, passando o evento e como argumento.
            onChange={(e) => setTelefone(handleWhatsChange(e))}
            value={telefone}
            minLength={11}
            maxLength={11}
            placeholder="(XX) XXXXX-XXXX"
            required
          />
        </div>

        <div className={styles.info}>
          <label className={styles.label} htmlFor="id-equipe">
            Equipe
          </label>
          <select
            className={styles.input}
            name="data[equipe]"
            id="id-equipe"
            value={equipe}
            onChange={(event) => setEquipe(event.target.value)}
            required
          >
            <option className={styles.opcao} value="">
              Equipe Responsável
            </option>
            <option className={styles.opcao} value="amarela">
              Amarela
            </option>
            <option className={styles.opcao} value="azul">
              Azul
            </option>
            <option className={styles.opcao} value="verde">
              Verde
            </option>
          </select>
        </div>

        <div className={styles.info}>
          <label className={styles.label} htmlFor="id-parceiro">
            Parceiro
          </label>
          <input
            className={styles.input}
            type="text"
            id="id-parceiro"
            name="data[parceiro]"
            value={parceiro}
            // A função anonima: garante que as funções handleNomeChange e handleWhatsChange sejam chamadas apenas quando o evento de mudança ocorrer, passando o evento e como argumento.
            onChange={(e) => setParceiro(handleNomeChange(e))}
            placeholder="Nome do Parceiro"
          />
        </div>
      </fieldset>

      <fieldset className={styles.camposFormulario}>
        <legend className={styles.tituloCampos}>Dados da Gestação</legend>

        <div className={styles.info}>
          <label className={styles.label} htmlFor="id-dum">
            D.U.M
          </label>
          <input
            className={styles.input}
            type="date"
            id="id-dum"
            // max={data}
            value={dum}
            onChange={(e) => setDum(e.target.value)}
            required
          />
        </div>

        <div className={styles.info}>
          <label className={styles.label} htmlFor="id-qtdeGestacoes">
            Gestações
          </label>
          <input
            className={styles.input}
            type="number"
            id="id-qtdeGestacoes"
            value={gestacoes}
            onChange={(e) => setGestacoes(e.target.value)}
            required
          />
        </div>

      </fieldset>

      {/* <Botao estilo="botaoSubmit" tipo="submit" nome="Cadastrar"/> */}
      {props.botaoSubmit}
    </form>
  );
}
