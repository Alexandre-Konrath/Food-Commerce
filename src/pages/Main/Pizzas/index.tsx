import { SnackTitle } from "../../../components/SnackTitle"

import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { useSnacks } from "../../../hooks/useSnacks"

export default function Pizzas() {
  // chamo os dados de pizzas que estao "armazenados" no contexto
  const { pizzas } = useSnacks()

  return (
    <>
      <SnackTitle>Pizzas</SnackTitle>
      <Head title="Pizzas"/>
      <Snacks snacks={pizzas} />
    </>
  )
}
