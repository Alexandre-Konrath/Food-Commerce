
import { currencyFormat } from "../../helpers/currencyFormat"
import { useCart } from "../../hooks/useCart"
import { SnackData } from "../../interfaces/snackData"
import { SkeletonSnack } from "./SkeletonSnack"

import { Container } from "./styles"
import { FiPlus } from 'react-icons/fi'


interface SnacksProps {
  snacks: SnackData[]
}

export function Snacks({ snacks }: SnacksProps) {
  // descontrução do useCarta para exportar a função de adicionar ao carrinho
  const { cart, addSnackIntoCart } = useCart()

  return (
    <Container>
      {!snacks.length
      // mapeia os 4 elementos do esqueleto dos snacks
      ? [ 1, 2, 3, 4 ].map((n) => <SkeletonSnack key={n} />)
      : snacks.map((snack) => {
        const snackExixtent = cart.find(
          (item) => item.snack === snack.snack && item.id === snack.id
        )

        return (
          <div key={snack.id} className='snack'>
            {snackExixtent && <span>{snackExixtent.quantity}</span>}
            <h2>{snack.name}</h2>
            <img src={snack.image} alt={snack.name} />
            <p>{snack.description}</p>
            <div>
              <strong>{currencyFormat(snack.price)}</strong>
              <button onClick={() => addSnackIntoCart(snack)} title='adicionar ao carrinho' type='button'>
                <FiPlus />
              </button>
            </div>
          </div>
        )
      })}
    </Container>
  )
}
