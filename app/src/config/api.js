import axios from "axios"; // Importando a dependência do axios para conectar com a API

// Criando instancia de conexão HTTP
const api = axios.create({
    baseURL: 'http://192.168.0.7:8080'

  });

// Exportando instancia do axios
export default api;