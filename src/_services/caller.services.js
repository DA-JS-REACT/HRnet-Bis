import axios from 'axios'
import { pathApi } from '../_services/.env.config'

// import { pathApi } from './env.config'

// Paramétrage de base d'axios
export const Axios = axios.create({
    baseURL: `${pathApi}`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

// // Intercepteur pour la mise en place du token dans la requête
// Axios.interceptors.request.use((request) => {
//     request.headers.Authorization = 'Bearer ' + accountService.getToken()

//     return request
// })
