import { FaTrashAlt } from 'react-icons/fa'

import { useCart } from "../../../../hooks/useCart"
import { ConfirmOrder } from '../../../../components/OrderCloseAction/confirmOrder'
import { currencyFormat } from "../../../../helpers/currencyFormat"

import minusImg from '../../../../assets/img/circle-minus.svg'
import plusImg from '../../../../assets/img/circle-plus.svg'

import { Container } from "./styled"


export function TableDescktop() {
  const { cart, removeSnackFromCart, snackCartIncrement, snackCartDecrement, } = useCart()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>{}</th>
            <th>Lanche</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
        {/* //* função que vai rendelizar os itens que estão no carrinho */}
          {cart.map((item) => (
            <tr key={`${item.snack}-${item.id}`}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{currencyFormat(item.price)}</span>
              </td>
              <td>
                <div>
                  <button onClick={() => snackCartDecrement(item)} type='button'>
                    <img src={minusImg} alt='Remover quantidade' />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button onClick={() => snackCartIncrement(item)} type='button'>
                    <img src={plusImg} alt='Adicionar quantidade' />
                  </button>
                </div>
              </td>
              <td>
                <h5>{currencyFormat(item.subtotal)}</h5>
              </td>
              <td>
              {/* //* removeSnackFromCart espera um parametro que é o item que esta dentro do parametro item que esta no map */}
                <button onClick={() => removeSnackFromCart(item)} type='button' title='botao'>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmOrder />
    </Container>
  )
}
