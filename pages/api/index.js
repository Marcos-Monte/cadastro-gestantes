// Importando conteúdo das dependencias
import axios from 'axios';

// Configuranco uma Instancia de Axios. Para fazer requisições HTTP
export const server = axios.create({
    baseURL: 'https://apicadastrogestantes.onrender.com'
})
