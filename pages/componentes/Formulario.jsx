import axios from "axios";
import { useState } from "react";

import styles from "@/styles/Formulario.module.css";

import { notifyError, notifySuccess } from "../api/notifys.jsx";
import Botao from "./BotaoSubmit.jsx";

const server = axios.create({
  baseURL: 'http://localhost:3000'
})

export default function Formulario() {
  const [telefone, setTelefone] = useState("");
  const [nome, setNome] = useState("");
  const [data, setData] = useState('');
  const [endereco, setEndereco] = useState('');
  const [equipe, setEquipe] = useState('');

  async function addUser(event){

    event.preventDefault();

    // Cria um objeto FormData
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('data', data);
    formData.append('telefone', telefone);
    formData.append('endereco', endereco);
    formData.append('equipe', equipe);

    try {

      await server.post('api/api');

      notifySuccess('Registro feito com sucesso')

    } catch(error){
      
      notifyError(error)

    }

  }

  const handleNomeChange = (e) => {
    const value = e.target.value;
    // console.log("Input Value: ", value); // Verificar o valor do input
    const filteredValue = value.replace(/[^a-zA-Z\s]/g, ""); // Remove caracteres não permitidos
    setNome(filteredValue);
    // console.log("Nome State: ", name); // Verificar o estado
  };

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
            name="data[dn]"
            // value={data}
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
            // value={endereco}
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
