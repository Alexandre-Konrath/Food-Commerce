//? função de rendelização condicional de acordo como o tamanho da tela/condição da tela

import { useEffect, useState } from 'react'
import { useCart } from '../../../hooks/useCart'

import { TableDescktop } from './TableDescktop' //* ora para descktop
import { TableMobile } from './TableMobile'  //* ora para celular/tablet
import { EmptyCart } from '../../../components/Emptycart'

export function Table() {
  //* recupera o carrinho
  const { cart } = useCart()
  // vai guardar qual que é a largura da janela/tela
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth)

  // vai ser carregada junto com o evento de rendelização - junto com o return <TableDescktop />
  useEffect(() => {
    function updateTableComponentBasedInWindowWidth() {
      const currentWidth = document.documentElement.clientWidth
      setWindowWidth(currentWidth) // vai setar a largura em função do useEffect
    }
    // quando eu mexer a minha tela irei adicionar um evento de resize
    window.addEventListener('resize', updateTableComponentBasedInWindowWidth)

    // remove o resize
    return () => {
      window.removeEventListener('resize', updateTableComponentBasedInWindowWidth)
    }
  }, [])

  //* se o carrinho esta vázio, ele mostra o EmptyCart
  if (cart.length === 0) return <EmptyCart title='Ops! Parece que você não tem pedidos, peça já!'/>

  return windowWidth > 768 ? <TableDescktop /> : <TableMobile />
    // se esse elemento for maior que 768 = tablet, senão ira rendelizar o tablemobile
}
