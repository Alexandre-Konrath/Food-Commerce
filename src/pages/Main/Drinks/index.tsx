import { SnackTitle } from "../../../components/SnackTitle"

import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { useSnacks } from "../../../hooks/useSnacks"

export default function Drinks() {
  const { drinks } = useSnacks()


  return (
    <>
      <SnackTitle>Drinks</SnackTitle>
      <Head title="Drinks"/>
      <Snacks snacks={drinks} />
    </>
  )
}
