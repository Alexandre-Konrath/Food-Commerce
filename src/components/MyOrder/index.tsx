import { useCart } from '../../hooks/useCart'

import { Container } from './styles'
import { ReactComponent as CartIcon } from '../../assets/img/shopping-cart.svg'

export function MyOrder() {
  const { cart } = useCart()

  return (
    <Container to={'cart'}>
      <span>Meus Pedidos</span>
      <CartIcon />

      {
        cart.length !== 0 && (
          <span>{`${cart.length}`.padStart(2, '0')}</span>
        ) /*se for diferente de 0 mostra o span*/
      }
    </Container>
  )
}
