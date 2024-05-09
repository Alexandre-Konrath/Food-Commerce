import { ReactNode, createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { snackEmoji } from '../helpers/snackEmoji';

import { SnackData } from '../interfaces/snackData';

//! além das propriedades do SnackData, vão ter mais essas
interface Snack extends SnackData {
  quantity: number
  subtotal: number
}

interface CartContextProps {
  cart: Snack[]
  // como estou defenindo uma interface, coloco void para não retornar nada
  addSnackIntoCart: (snack: SnackData) => void  //? adicionar
  removeSnackFromCart: (snack: Snack ) => void  //* remove
  snackCartIncrement: (snack: Snack) => void  //* adiciona 1 item ao carrinho
  snackCartDecrement: (snack: Snack) => void  //* remove 1 item ao carrinho
  confirmOrder: () => void  //* confirmação da compra e redireciona para a rota de pagamento
  payOrder: () => void //*
}

interface CartProviderProps {
  children: ReactNode
}
export const CartContext = createContext({} as CartContextProps)

//! prove os dados do carrinho
export function CartProvider({ children }: CartProviderProps) {
  const navigate = useNavigate()
  const [cart, setCart] = useState<Snack[]>([])

  //* função de adicionar ao carrinho
  function addSnackIntoCart(snack: SnackData): void {

    // adicionar //
    const snackExistentInCart = cart.find(
      (item) => item.snack === snack.snack && item.id === snack.id
    )

    // atualizar //
    if (snackExistentInCart) {
      // se esta função existir eu crio um novo carrinho e dou um return
      const newCart = cart.map((item) => {
        if(item.id === snack.id) {
          const quantity = item.quantity + 1
          const subTotal = item.price * quantity

          return { ...item, quantity, subTotal }
        }

        return item
      })
      // mensagem de que o item foi para o carrinho
      toast.success(`Outro(a) ${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
      // ja como o cart esta criado, apenas seto ele
      setCart(newCart)

      return
    }

    const newSnack = { ...snack, quantity: 1, subtotal: snack.price }
    const newCart = [...cart, newSnack] // push de um array que adiciona o snack no card

    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
    setCart(newCart)
  }

  //* função de remover do carrinho
  function removeSnackFromCart( snack: Snack) {
    // cria um novo array com o valo do carrinho filtrado
    const newCart = cart.filter((item) => !(item.id === snack.id && item.snack === snack.snack))

    setCart(newCart)
  }

  //* atualiza o valor da quantidade
  function updateSnackQuantity(snack: Snack, newQuantity: number) {
    // se minha quantidade for menos que 0 ele não executa o codigo abaixo
    if (newQuantity <= 0 ) return

    const snackExistentInCart = cart.find((item) => item.id === snack.id && item.snack === snack.snack)

    // se não tiver nenhum snack eu também dou um return
    if(!snackExistentInCart) return

    const newCart = cart.map((item) => {
      if (item.id === snackExistentInCart.id && item.snack === snackExistentInCart.snack) {
        return {
          ...item,
          quantity: newQuantity,
          subtotal: item.price * newQuantity,
        }
      }
      return item
    })
    setCart(newCart)
  }

  //* função de incrementar
  function snackCartIncrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity + 1)
  }

  //* função de decrementar
  function snackCartDecrement(snack: Snack) {
    updateSnackQuantity(snack, snack.quantity - 1)
  }

  function confirmOrder() {
    navigate('/payment')
  }

  function payOrder() {
    return
  }

  return (
    <CartContext.Provider value={{ cart, addSnackIntoCart, removeSnackFromCart, snackCartIncrement, snackCartDecrement, confirmOrder, payOrder }}>{children}</CartContext.Provider>
  )
}
