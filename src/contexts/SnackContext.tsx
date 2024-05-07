import { Children, ReactNode, createContext, useEffect, useState } from 'react'

import { SnackData } from '../interfaces/snackData'
import { getBurgers, getDrinks, getIceCreams, getPizzas } from '../services/api'

// pega os dados nos snacks
interface SnackContextProps {
  burgers: SnackData[]
  drinks: SnackData[]
  iceCreams: SnackData[]
  pizzas: SnackData[]
}

interface SnackProviderProps {
  children: ReactNode;
}

// cria um contexto
export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({ children }: SnackProviderProps) {
    // em cada estado eu chamo os dados de cada snack
    const [burgers, setBurgers] = useState<SnackData[]>([])
    const [drinks, setDrinks] = useState<SnackData[]>([])
    const [iceCreams, setIceCreams] = useState<SnackData[]>([])
    const [pizzas, setPizzas] = useState<SnackData[]>([])

    useEffect(() => {
      ;( async () => {
        try {
          // recupero os dados
          const burgerRequest = await getBurgers()
          const drinksRequest = await getDrinks()
          const iceCreamsRequest = await getIceCreams()
          const pizzasRequest = await getPizzas()

          // crio um const com as requests para deixar mais organizado
          const requests = [burgerRequest, drinksRequest, iceCreamsRequest, pizzasRequest]

          // desestruturo para pegar as respostas dos dados
          const [
            { data: burgerResponse },
            { data: drinksResponse },
            { data: iceCreamsResponse },
            { data: pizzasResponse },
          ] = await Promise.all(requests)

          // atualizo os dados
          setBurgers(burgerResponse)
          setDrinks(drinksResponse)
          setIceCreams(iceCreamsResponse)
          setPizzas(pizzasResponse)
          // caso der algum erro
        } catch (error) {
          console.error(error)
        }
      }
    )()
    }, [])

    return (
    /* uso o contexto para chamar e armazenar os valores/dados de burger, drinks... */
    <SnackContext.Provider value={{ burgers, drinks, iceCreams, pizzas }}>
      {/* children = propriedade que representas todos os componentes que virão dentro  */}
      {children}
    </SnackContext.Provider>
    )
}
