import axios from 'axios'

import { CustomerData } from '../interfaces/CostumerData'
import { SnackData } from '../interfaces/snackData'
import { Snack } from '../interfaces/Snack'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
})
// <SnackData[]> = se não carregar o que esperamos = snacks, ele retorna um erro do typeScript
export const getBurgers = () => api.get<SnackData[]>('/snacks?snack=burger')
export const getDrinks = () => api.get<SnackData[]>('/snacks?snack=drink')
export const getIceCreams = () => api.get<SnackData[]>('/snacks?snack=ice-cream')
export const getPizzas = () => api.get<SnackData[]>('/snacks?snack=pizza')

//* chamada da api
// recebe os dados de cart e customer
export const processCheckout = (cart: Snack[], customer: CustomerData) =>
  api.post('/checkout', {
    cart,
    customer: {
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      document: customer.document,
      zipCode: customer.zipCode,
      street: customer.street,
      number: customer.number,
      complement: customer.complement,
      neighborhood: customer.neighborhood,
      city: customer.city,
      state: customer.state,
    },
    payment: {
      creditCardNumber: customer.creditCardNumber,
      creditCardHolder: customer.creditCardHolder,
      // eitar a data de expiração do cartão para que o assas aceite esse tipo de data
      creditCardExpiration: `${new Date(customer.creditCardExpiration).getMonth() + 1}/${new Date(
        customer.creditCardExpiration,
      ).getFullYear()}`,
      creditCardSecurityCode: customer.creditCardSecurityCode,
    },
  })

export default api
