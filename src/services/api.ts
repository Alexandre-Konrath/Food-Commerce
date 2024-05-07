import axios from 'axios'
import { SnackData } from '../interfaces/snackData'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})
// <SnackData[]> = se não carregar o que esperamos = snacks, ele retorna um erro do typeScript
export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getDrinks = () => api.get<SnackData[]>('/drinks')
export const getIceCreams = () => api.get<SnackData[]>('/ice-creams')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')


export default api
