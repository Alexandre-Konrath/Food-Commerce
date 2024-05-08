import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

export function useCart() {
  // pego os dados do contexto do carrinho
  return useContext(CartContext)
}
