import { isValidCNPJ, isValidCPF, isValidPhone  } from '@brazilian-utils/brazilian-utils'
import isValidCreditCard from 'card-validator'

import * as yup from 'yup'


//! esquema para tartar o erro de todos os campos
export const schema = yup
  .object({
    //* validação de nome
    fullName: yup
      .string()
      .required('O nome é obrigatório.')
      .min(3, 'O nome deve ser completo.')
      .matches(/(\w.+\s).+/gi, 'O nome deve conter o sobrenome.'),
    //* validação de email
    email: yup.string().required('O email é obrigatório.').email('O email deve ser válido.'),
    //* validação de celular
    mobile: yup
      .string()
      .required('O celular é obrigatório.')
      // expressões regulares
      .transform((value) => value.replace(/[^\d]/g, ''))
      // função que executa a função de validação de celular com a lib @brazilian-utils
      .test('validateMobile', 'O numero de celular é inválido.', (value) => isValidPhone(value)),
    //* validação de CPF/CNPJ
    document: yup
      .string()
      .required('O CPF/CNPJ é obrigatório.')
      .transform((value) => value.replace(/[^\d]/g, ''))
      .test(
        'validateDocument',
        'O CPF/CNPJ é inválido.',
        // pode ser feito tambem via api backend
        (value) => isValidCPF(value) || isValidCNPJ(value),
      ),
      //* validação de cep
    zipCode: yup
      .string()
      .required('O CEP é obrigatório.')
      .transform((val) => val.trim().replace(/[^\d]+/g, '')),

    //* outros campos sem muita validação
    street: yup.string().required('O endereço é obrigatório.'),
    number: yup.string().required('O número é obrigatório.'),
    complement: yup.string(),
    neighborhood: yup.string().required('O bairro é obrigatório.'),
    city: yup.string().required('A cidade é obrigatória.'),
    state: yup.string().required('O estado é obrigatório.'),
    //* o maldito campo de validação de cartão de credito
    creditCardNumber: yup
    .string()
    .required('O número do cartão é obrigatório.')
    .transform((val) => val.replace(/[^\d]+/g, ''))
    // validar se o numero de cartão de credito é valido/existe com a lib card-validator
    .test(
      'validateCreditCardNumber',
      'O número do cartão é inválido.',
      (value) => isValidCreditCard.number(value).isValid,
    ),
    //* validação de nome de cartão de crédito
    creditCardHolder: yup
      .string()
      .required('O nome do titular é obrigatório.')
      .min(3, 'O nome do titular deve ser completo.')
      .matches(/(\w.+\s).+/gi, 'O nome do titular deve conter o sobrenome.'),
    //* validação de data de expiração
    creditCardExpiration: yup
      .string()
      .required('A data de validate é obrigatória.')
      .transform((value) => {
        // pegar o més e o ano
        const [month, year] = value.split('/')

        // se o digito de month year forem mais ou menos assim = 02/25 ele retorna para o new Date
        if (month && year && month.length === 2 && year.length === 2)
          //               + converter para numero +
          return new Date(+`20${year}`, +month - 1, 1).toISOString()

        return value
      })
      .test(
        'validateCreditCardExpiration',
        'A data de validate é inválida.',
        (value) => new Date(value) >= new Date(),

        // se o expirationDate for maior ou igual ele retorna true, senão ele retorna false
        // (value) => {
        //   const expirationDate = new Date(value)
        //   const today = new Date()

        //   return expirationDate >= today
        // }
      ),
    //* validação do CVV
    creditCardSecurityCode: yup
      .string()
      .required('O CVV é obrigatório.')
      .transform((value) => value.replace(/[^\d]+/g, ''))
      .min(3, 'O CVV deve possuir entre 3 e 4 dígitos.')
      .max(4, 'O CVV deve possuir entre 3 e 4 dígitos.'),
    })
  .required()

export type FieldValues = yup.InferType<typeof schema>
