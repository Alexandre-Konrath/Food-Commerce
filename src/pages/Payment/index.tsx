import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IMaskInput } from 'react-imask'

import * as yup from 'yup'

import { PayOrder } from '../../components/OrderCloseAction/PayOrder'
import { Head } from '../../components/Head'
import { OrderHeader } from '../../components/OrderHeader'

import { IoMdSearch } from 'react-icons/io'
import { Container, Inner, Form } from './styles'

//* esquema com o nome, email e celular para tratar os erros
const schema = yup
  .object({
    fullName: yup
      .string()
      .required('Nome e sobrenome são obrigatórios.')
      .min(3, 'Nome e sobrenome muito curto.'),
    email: yup.string().email().required(),
    mobile: yup.string().required(),
  })
  .required()

type FieldValues = yup.InferType<typeof schema>

export default function Payment() {
  //* toda a vez que o submit for executado, ele dispara a função de erro
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log('data', data)

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
              <input type='text' id='document' name='document'/>
            </div>
          </div>

          <h4>Endereço de entrega</h4>

          <div className='field'>
            <div className="texto">
              <label htmlFor='zipCode'>CEP</label>
              <p>pesquisar cep:</p>
            </div>
            <div id='txtCEP' className='btn-cep'>
              <input type="text" id='zipCode' className='zipCode'  name='zipCode' autoComplete='postal-code'/>
              <button className='btn-pesquisar' title='pesquisar cep' type='button'>
                <IoMdSearch />
              </button>
            </div>
          </div>

          <div className='field'>
            <label htmlFor='street'>Endereço</label>
            <input type="text" id='street' name='street' autoComplete='street-address'/>
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='number'>Número</label>
              <input type="text" id='number' name='number'/>
            </div>

            <div className='field'>
              <label htmlFor='complement'>Complemento</label>
              <input type="text" id='complement' name='complement'/>
            </div>
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='neighborhood'>Bairro</label>
              <input type="text" id='neighborhood' name='neighborhood'/>
            </div>

            <div className='field'>
              <label htmlFor='city'>Cidade</label>
              <input type="text" id='city' name='city'/>
            </div>

            <div className='field'>
              <label htmlFor='state'>Estado</label>
                  <select id='state' name='state'>
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
            </div>
          </div>

          <h4>Pagamento</h4>

          <div className='field'>
            <label htmlFor='credit-card-number'>Número do cartão</label>
            <input type="text" id='credit-card-number' name='credit-card-number' autoComplete='cc-number' />
          </div>

          <div className='field'>
            <label htmlFor='credit-cart-holder-name'>Nome impresso no cartão</label>
            <input type="text" id='credit-cart-holder-name' name='credit-cart-holder-name' autoComplete='cc-name' />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='credit-card-expiration'>Validade (MM/AA)</label>
              <input type="text" id='credit-card-expiration' name='credit-card-expiration' autoComplete='cc-exp' />
            </div>

            <div className='field'>
              <label htmlFor='credit-card-code'>Código de segurança (CVV)</label>
              <input type="text" id='credit-card-code' name='credit-card-code' autoComplete='cc-csc' />
            </div>
          </div>
          <PayOrder />
        </Form>
      </Inner>
    </Container>
  )
}
