import { useState } from "react";
import { server } from "../api";

// Função que importa Registro de Gestante na Lista
import Registro from "../componentes/Registro";

import notifySuccess, { notifyError } from "./notifys.jsx";

function formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

export default function mostrarGestantes(listaGestantes, erro = 'Nenhuma Gestante Cadastrada'){

    // console.log('Tipo de listaGestantes:', typeof listaGestantes);
    // console.log('listaGestantes:', listaGestantes);

    const [dados, setDados] = useState(listaGestantes); // Usar listaGestantes como dados iniciais

    // Função para deletar o registro
    const handleDelete = async (id) => {
        console.log("Deletando ID:", id);
            try {
                await server.delete(`/${id}`); // Ajuste o endpoint conforme necessário
                console.log('Registro deletado com sucesso');
                // Atualize a lista de dados após a deleção
                setDados(dados.filter(item => item.id !== id));
                notifySuccess('Registro deletado com sucesso!');
                console.log("Deletando ID:", id);

            } catch (error) {
                console.error('Erro ao deletar o registro:', error.response ? error.response.data : error.message);
                // Alert de Requisição for mal sucecida
                notifyError(error.message || 'Erro ao deletar registro')
            }
    };

    // Função para atualizar o registro
    const handleUpdate = async (id) => {
        console.log("Atualizando ID:", id);
        try {
            const novosDados = { /* Dados atualizados */ };
            await server.put(`/${id}`, novosDados); // Ajuste o endpoint e os dados conforme necessário
            console.log('Registro atualizado com sucesso');
            // Atualize a lista de dados após a atualização
            setDados(dados.map(item => item.id === id ? { ...item, ...novosDados } : item));
            // Alert de Requisição for bem sucecida
            notifySuccess('Registro atualizado com sucesso!');
        } catch (error) {
            console.error('Erro ao atualizar o registro:', error.response ? error.response.data : error.message);
            // Alert de Requisição for mal sucecida
            notifyError(error.message || 'Erro ao deletar registro')
        }
    };

    if(!Array.isArray(listaGestantes)){
        return <p>Dados inválidos: Não é uma lista</p>
    }

    return (listaGestantes.length > 0 ?
    
        listaGestantes.map(

            (gestante) => (
                
                <Registro 
                    key={gestante.id} // Use o ID como chave
                    id={gestante.id}
                    nome={gestante.nome}
                    dn={formatDate(gestante.data)}
                    endereco={gestante.endereco}
                    telefone={gestante.telefone}
                    equipe={gestante.equipe}
                    onDelete={() => handleDelete(gestante.id)} // Passa a função de deletar
                    onUpdate={() => handleUpdate(gestante.id)} // Passa a função de atualizar
                />

            )
        ) : <p>{erro}</p>
    )

}

export function handleFiltro(colecaoDados, equipe){
    if(colecaoDados.length > 0){
        const filtrados = colecaoDados.filter(
            (gestante) => gestante.equipe.toLowerCase() === equipe.toLowerCase()
        )
        
        return filtrados;
        
    } else {
        return colecaoDados;
        
    }
    
}

export function handleSemFiltro(colecaoDados){
    return colecaoDados;
}


