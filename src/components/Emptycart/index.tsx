//! componente que aparece quando o carrinho esta vazío

import { Button, Container } from "./styled"

import manAndBurgerImg from '../../assets/img/man-and-burger.svg'

interface EmptyCartProps {
  title: string
}

export function EmptyCart ({title}: EmptyCartProps){
  return (
    <Container>
      <h2>{title}</h2>
      <Button className="glow-on-hover" to='/'>Checar o cardápio</Button>
      <img src={manAndBurgerImg} alt=" homem com amburguer" />
    </Container>
  )
}
