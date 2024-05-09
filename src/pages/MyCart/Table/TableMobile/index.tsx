import { FaTrashAlt } from 'react-icons/fa'

import { useCart } from '../../../../hooks/useCart'
import { ConfirmOrder } from '../../../../components/OrderCloseAction/ConfirmOrder'
import { currencyFormat } from '../../../../helpers/currencyFormat'

import minusImg from '../../../../assets/img/circle-minus.svg'
import plusImg from '../../../../assets/img/circle-plus.svg'

import { Container } from './styled'

export function TableMobile() {
  const { cart, removeSnackFromCart, snackCartIncrement, snackCartDecrement, } = useCart()

  return (
    <Container>
      {cart.map((item) => (
        //* key = forma de diferencaiar este objeto dentro de um looping
        <div key={`${item.snack}-${item.id}`} className='order-item'>
          <div>
            <img src={item.image} alt={item.name} />
          </div>
          <div>
            <h4>{item.name}</h4>
            <span>{currencyFormat(item.price)}</span>
            <div>
              <div>
                <button onClick={() => snackCartDecrement(item)} type='button'>
                  <img src={minusImg} alt='Remover quantidade' />
                </button>
                <span>{`${item.quantity}`.padStart(2, '0')}</span>
                <button onClick={() => snackCartIncrement(item)} type='button'>
                  <img src={plusImg} alt='Adicionar quantidade' />
                </button>
              </div>
              <button onClick={() => removeSnackFromCart(item)} type='button' title='remover'>
                <FaTrashAlt />
              </button>
            </div>
            <h5>
              <span>Subtotal</span> {currencyFormat(item.subtotal)}
            </h5>
          </div>
        </div>
      ))}
      <ConfirmOrder />
    </Container>
  )
}
