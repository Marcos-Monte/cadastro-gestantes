// Biblioteca para fazer requisições HTTP
import axios from "axios";
// Biblioteca para gerenciar estado dos componentes
import { useState } from "react";
// Estilos CSS
import styles from "@/styles/Formulario.module.css";
//Notificações (toast)
import { notifyError, notifySuccess } from "../api/notifys.jsx";
// Componente Botão
import Botao from "./BotaoSubmit.jsx";

// Configurando uma 'instancia' de axios
const server = axios.create({
  // URL do servidor (Backend)
  baseURL: 'https://cadastro-gestantes.vercel.app/api'
})

export default function Formulario() {
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [data, setData] = useState('');
  const [endereco, setEndereco] = useState('');
  const [equipe, setEquipe] = useState('');

  async function addUser(event){
  // Previne o comportamento Padrão. Impede que o formulário seja enviado de forma tradicional
  event.preventDefault();

  // Cria o objeto Json
  const registro = {
    nome: nome,
    data: new Date(data), // Exemplo de como enviar a data no formato ISO
    endereco: endereco,
    telefone: telefone,
    equipe: equipe
  }
  

  try{
    // Envia requisição 'POST' para a URL 'api/api' com os dados do formulário
    await server.post('/', registro, {
      // Cabeçalho que indica que os dados estão em formato JSON
      headers: {
        'Content-Type' : 'application/json'
      },
    }); 
   // Promessa se a requisição for bem sucecida
    notifySuccess('Dados enviados com sucesso');
    // Resetando os campos do formulário
    setNome("");
    setData("");
    setEndereco("");
    setTelefone("");
    setEquipe("");

  } catch(error) {
    // Promessa se a requisição não sucedida
    console.error('Erro ao enviar dados:', error.response ? error.response.data : error.message);
    notifyError(error.response ? error.response.data.error : 'Erro ao enviar dados');
    notifyError(error.message || 'Erro ao enviar dados')

  }
}

 // Filtra a entrada e permite apenas letras e espaços. Atualiza o estado 'nome'
  const handleNomeChange = (e) => {
    const value = e.target.value;
    // console.log("Input Value: ", value); // Verificar o valor do input
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, ""); // Remove caracteres não permitidos
    setNome(filteredValue);
    // console.log("Nome State: ", name); // Verificar o estado
  };

  // Remove catacteres não numéricos e formata o valor de entrada
  const handleWhatsChange = (e) => {
    const value = e.target.value;
    // Remover todos os caracteres não numéricos
    const onlyNums = value.replace(/[^\d]/g, "");

    // Aplicar a máscara se tiver até 11 dígitos
    if (onlyNums.length <= 11) {
      const formattedValue = onlyNums.replace(
        /^(\d{2})(\d{5})(\d{4})$/,
        "($1) $2-$3"
      );
      setTelefone(formattedValue);
    }
    // Se tiver mais de 11 dígitos, não atualiza o estado (ignora entrada adicional)
  };

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
            onChange={handleNomeChange}
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
            onChange={handleWhatsChange}
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
      </fieldset>

      <Botao estilo="botaoSubmit" tipo="submit" nome="Cadastrar"/>
    </form>
  );
}
