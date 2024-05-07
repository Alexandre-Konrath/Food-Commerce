import { SnackTitle } from "../../../components/SnackTitle"

import { Head } from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { useSnacks } from "../../../hooks/useSnacks"

export default function IceCreams() {
  const { iceCreams } = useSnacks()

  return (
    <>
      <SnackTitle>Ice cream</SnackTitle>
      <Head title="Ice cream"/>
      <Snacks snacks={iceCreams} />
    </>
  )
}
