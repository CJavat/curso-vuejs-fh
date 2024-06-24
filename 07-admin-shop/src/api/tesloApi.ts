import axios from 'axios';

const tesloApi = axios.create({
  baseURL: import.meta.env.VITE_TESLO_API_URL,
});

//TODO: Interceptors

console.log(import.meta.env);

export { tesloApi };
