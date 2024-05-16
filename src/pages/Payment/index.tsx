// import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IMask, IMaskInput } from 'react-imask'

import { yupResolver } from '@hookform/resolvers/yup'

import { PayOrder } from '../../components/OrderCloseAction/PayOrder'
import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'

import { schema, FieldValues } from './Validation/validationSchema'
import { cepValidation } from './Validation/cepValidation';

import { CustomerData } from '../../interfaces/CostumerData'

import { useCart } from '../../hooks/useCart'

import { IoMdSearch } from 'react-icons/io'
import { Container, Inner, Form } from './styles'

export default function Payment() {

  const { payOrder } = useCart()
  const { control, handleSubmit, setValue, formState: { errors } } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  })

  //* função de validação do CEP
  const cepValidationHandler = async () => {
    await cepValidation(setValue, document);
  };


  const onSubmit: SubmitHandler<FieldValues> = (data) => payOrder(data as CustomerData)

  return (
    <Container>
      <Head title='Pagamento' />
      <OrderHeader />
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Informações pessoais</h4>

          <div className='field'>
            <label htmlFor='fullName'>Nome e sobrenome</label>

            <Controller
              name='fullName'
              control={control}
              render={({ field }) => (
                focus(), (<input type='text' id='fullName' autoComplete='off' {...field} />)
              )}
            />
            {errors.fullName && <p className='error'>{errors.fullName.message}</p>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='email'>E-mail</label>
              <Controller
                name='email'
                control={control}
                render={({ field }) => (
                  <input type='email' id='email'  autoComplete="off" {...field} />
                )}
              />
              {errors.email && <p className='error'>{errors.email.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='mobile'>Celular</label>
              <Controller
                name='mobile'
                control={control}
                render={({ field }) => (
                  // máscara para o celualr
                  <IMaskInput
                    type='tel'
                    id='mobile'
                    autoComplete="off"
                    mask={'(00) 90000-0000'}
                    {...field}
                  />
                )}
              />
              {errors.mobile && <p className='error'>{errors.mobile.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='document'>CPF/CNPJ</label>
              <Controller
                name='document'
                control={control}
                render={({ field }) => (
                  // mascara dinâmica para cpf e cnpj juntos
                  <IMaskInput
                    type='text'
                    id='document'
                    mask={[
                      { mask: '000.000.000-00', maxLength: 11 },
                      { mask: '00.000.000/0000-00' },
                    ]}
                    {...field}
                  />
                )}
              />
              {errors.document && <p className='error'>{errors.document.message}</p>}
            </div>
          </div>

          <h4>Endereço de entrega</h4>

          <div className='field'>
            <div className="texto">
              <label htmlFor='zipCode'>CEP</label>
            </div>
            <div id='txtCEP' className='btn-cep'>
              <Controller
                  name='zipCode'
                  control={control}
                  render={({ field }) => (
                    <IMaskInput
                      type='text'
                      id='zipCode'
                      style={{ width: '130px' }}
                      mask={'00000-000'}
                      {...field}
                    />
                  )}
                />
              <button onClick={cepValidationHandler} className='btn-pesquisar' title='pesquisar cep' type='button'>
                <IoMdSearch />
              </button>
            </div>
            {errors.zipCode && <p className='error'>{errors.zipCode.message}</p>}
          </div>

          <div className='field'>
            <label htmlFor='street'>Endereço</label>
            <Controller
              name='street'
              control={control}
              render={({ field }) => <input type='text' id='street' {...field} />}
            />
            {errors.street && <p className='error'>{errors.street.message}</p>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='number'>Número</label>
              <Controller
                name='number'
                control={control}
                render={({ field }) => <input type='text' id='number' {...field} />}
              />
              {errors.number && <p className='error'>{errors.number.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='complement'>Complemento</label>
              <Controller
                name='complement'
                control={control}
                render={({ field }) => <input type='text' id='complement' {...field} />}
              />
              {errors.complement && <p className='error'>{errors.complement.message}</p>}
            </div>
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='neighborhood'>Bairro</label>
              <Controller
                name='neighborhood'
                control={control}
                render={({ field }) => <input type='text' id='neighborhood' {...field} />}
              />
              {errors.neighborhood && <p className='error'>{errors.neighborhood.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='city'>Cidade</label>
              <Controller
                name='city'
                control={control}
                render={({ field }) => <input type='text' id='city' {...field} />}
              />
              {errors.city && <p className='error'>{errors.city.message}</p>}
            </div>

            <div className='field'>
            <label htmlFor='state'>Estado</label>
            <Controller
                name='state'
                control={control}
                render={({ field }) => (
                  <select id='state' {...field}>
                    <option value=''>Selecione</option>
                    <option value='AC'>Acre</option>
                    <option value='AL'>Alagoas</option>
                    <option value='AP'>Amapá</option>
                    <option value='AM'>Amazonas</option>
                    <option value='BA'>Bahia</option>
                    <option value='CE'>Ceará</option>
                    <option value='ES'>Espírito Santo</option>
                    <option value='GO'>Goiás</option>
                    <option value='MA'>Maranhão</option>
                    <option value='MT'>Mato Grosso</option>
                    <option value='MS'>Mato Grosso do Sul</option>
                    <option value='MG'>Minas Gerais</option>
                    <option value='PA'>Pará</option>
                    <option value='PB'>Paraíba</option>
                    <option value='PR'>Paraná</option>
                    <option value='PE'>Pernambuco</option>
                    <option value='PI'>Piauí</option>
                    <option value='RJ'>Rio de Janeiro</option>
                    <option value='RN'>Rio Grande do Norte</option>
                    <option value='RS'>Rio Grande do Sul</option>
                    <option value='RO'>Rondônia</option>
                    <option value='RR'>Roraima</option>
                    <option value='SC'>Santa Catarina</option>
                    <option value='SP'>São Paulo</option>
                    <option value='SE'>Sergipe</option>
                    <option value='TO'>Tocantins</option>
                    <option value='DF'>Distrito Federal</option>
                  </select>
                )}
              />
              {errors.state && <p className='error'>{errors.state.message}</p>}
            </div>
          </div>

          <h4>Pagamento</h4>

          <div className='field'>
            <label htmlFor='creditCardNumber'>Número do cartão</label>
            <Controller
              name='creditCardNumber'
              control={control}
              render={({ field }) => (
                <IMaskInput
                  type='text'
                  id='creditCardNumber'
                  // máscara com três tipos de cartão de crédito
                  mask={[
                    {
                      mask: '0000 000000 0000',
                      maxLength: 14,
                    },
                    {
                      mask: '0000 000000 00000',
                      maxLength: 15,
                    },
                    {
                      mask: '0000 0000 0000 0000',
                    },
                  ]}
                  {...field}
                />
              )}
            />
            {errors.creditCardNumber && <p className='error'>{errors.creditCardNumber.message}</p>}
          </div>

          <div className='field'>
            <label htmlFor='creditCardHolder'>Nome impresso no cartão</label>
            <Controller
              name='creditCardHolder'
              control={control}
              render={({ field }) => <input type='text' id='creditCardHolder' {...field} />}
            />
            {errors.creditCardHolder && <p className='error'>{errors.creditCardHolder.message}</p>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='credit-card-expiration'>Validade (MM/AA)</label>
              <Controller
                name='creditCardExpiration'
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='text'
                    id='creditCardExpiration'
                    mask={[
                      {
                        mask: 'MM/YY',
                        blocks: {
                          // máscara de validação de més
                          MM: {
                            mask: IMask.MaskedRange,
                            from: 1,
                            to: 12,
                          },
                          // máscara de validação de ano
                          YY: {
                            mask: IMask.MaskedRange,
                            // pega a data atual -2000 = ano atual
                            from: new Date().getFullYear() - 2000,
                            to: 99,
                          },
                        },
                      },
                    ]}
                    {...field}
                  />
                )}
              />
              {errors.creditCardExpiration && (
                <p className='error'>{errors.creditCardExpiration.message}</p>
              )}
            </div>

            <div className='field'>
              <label htmlFor='credit-card-code'>Código de segurança (CVV)</label>
              <Controller
                name='creditCardSecurityCode'
                control={control}
                render={({ field }) => (
                  <IMaskInput
                    type='text'
                    id='creditCardSecurityCode'
                    mask={'0000'}
                  {...field} />
                )}
              />
              {errors.creditCardSecurityCode && (
                <p className='error'>{errors.creditCardSecurityCode.message}</p>
              )}
            </div>
          </div>
          <PayOrder />
        </Form>
      </Inner>
    </Container>
  )
}
