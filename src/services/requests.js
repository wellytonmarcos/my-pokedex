import axios from "axios";

// Cria uma função que retorna um client axios configurado
export function createApiClient(baseURL, timeout = 5000) {
  const client = axios.create({ baseURL, timeout });

  // Interceptor global de resposta
  client.interceptors.response.use(
    (response) => response.data,
    (error) => {
      console.error(`[${baseURL}] Erro na API:`, error);
      return Promise.reject(error);
    }
  );

  return client;
}
