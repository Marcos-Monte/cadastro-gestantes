// Importando conteúdo das dependencias
import axios from 'axios';

import notifySuccess, { notifyError } from "../services/notifys.jsx";

// Configuranco uma Instancia de Axios. Para fazer requisições HTTP
export const server = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL ,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Função que faz a requisição HTTP GET e mostrando os dados
export const buscarDados = async () => {
    let resultado;
        
    // Envia requisição 'GET' para o endpoint da API-backend com os dados do formulário
    try {
        const resposta = await server.get('');
        // console.log('Resposta da API:', resposta.data); // Verifique aqui
        resultado =  resposta.data // Dados armazenados na variável de estado
        // console.log('Resposta da API:', resultado); // Verifique aqui

    } catch(erro) {
        resultado = erro.response ? erro.response.data : 'Erro ao carregar dados'
    }

    return resultado;
}

// Função para deletar o registro
export const deletarRegistro = async (id, dados) => {
    console.log("Deletando ID:", id);

    let resultado;
        try {
            await server.delete(`/${id}`); // Ajuste o endpoint conforme necessário
            console.log('Registro deletado com sucesso');
            // Atualize a lista de dados após a deleção
            resultado = dados.filter(item => item.id !== id);
            notifySuccess('Registro deletado com sucesso!');
            console.log("Deletando ID:", id);
            buscarDados()

        } catch (error) {
            resultado = 'Erro ao deletar o registro:', error.response ? error.response.data : error.message;
            // Alert de Requisição for mal sucecida
            notifyError('Erro ao deletar registro')
        }

        return resultado;
};

// Função para atualizar o registro
export const atualizarRegistro = async (id) => {
    console.log("Atualizando ID:", id);

    let resultado;

    try {
        const novosDados = { /* Dados atualizados */ };
        await server.put(`/${id}`, novosDados); // Ajuste o endpoint e os dados conforme necessário
        console.log('Registro atualizado com sucesso');
        // Atualize a lista de dados após a atualização
        resultado = dados.map(item => item.id === id ? { ...item, ...novosDados } : item);
        // Alert de Requisição for bem sucecida
        notifySuccess('Registro atualizado com sucesso!');
    } catch (error) {
        resultado = 'Erro ao atualizar o registro:', error.response ? error.response.data : error.message;
        // Alert de Requisição for mal sucecida
        notifyError(error.message || 'Erro ao deletar registro')
    }

    return resultado;

};

// Função para adicionar novo registro
export const criarRegistro = async (registro) => {
    
    try{
        // Envia requisição 'POST' para o endpoint da API-backend com os dados do formulário
        await server.post('/cadastro', registro, {
            // Cabeçalho que indica que os dados estão em formato JSON
            headers: {
            'Content-Type' : 'application/json'
            },
        }); 
        // Promessa se a requisição for bem sucecida
        notifySuccess('Dados enviados com sucesso');

    } catch(error) {
        // Promessa se a requisição não sucedida
        console.error('Erro ao enviar dados:', error.response ? error.response.data : error.message);
        notifyError(error.response ? error.response.data.error : 'Erro ao enviar dados');
        notifyError(error.message || 'Erro ao enviar dados')

    }
}

