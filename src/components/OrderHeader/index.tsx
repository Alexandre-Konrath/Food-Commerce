import { Link } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'

import { Container } from './styled'

import logoImg from '../../assets/img/logo.svg'
import { ReactComponent as CartIcon } from '../../assets/img/shopping-cart.svg'

export function OrderHeader() {
  const {cart} = useCart()

  return (
  <Container>
    <Link to='/'>
      <img src={logoImg} alt="Food Comercce" />
    </Link>

    <div>
      <div>
        <h3>Meus pedidos</h3>
        <span>
        <strong> {`${cart.length}`.padStart(2, '0')} </strong> pedidos
      </span>
      </div>
      <CartIcon />
    </div>
  </Container>)
}
