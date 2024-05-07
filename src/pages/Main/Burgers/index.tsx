import { SnackTitle } from "../../../components/SnackTitle"

import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { useSnacks } from "../../../hooks/useSnacks"

export default function Burgers() {
  // chamo os dados de burger que estao "armazenados" no contexto
  const { burgers } = useSnacks()

  return (
    <>
      <SnackTitle>Hamburger</SnackTitle>
      <Head title="Hamburger"/>
      <Snacks snacks={burgers} />
    </>
  )
}
