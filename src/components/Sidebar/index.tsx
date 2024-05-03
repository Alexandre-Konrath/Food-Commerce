import { useState } from "react";

import { ReactComponent as BurguerIcon } from '../../assets/img/burger.svg'
import { ReactComponent as PizzaIcon } from '../../assets/img/pizza.svg'
import { ReactComponent as SodaPopIcon } from '../../assets/img/soda.svg'
import { ReactComponent as IceCreamIcon } from '../../assets/img/ice-cream.svg'
import menuImg from '../../assets/img/menu.svg'

import { Container } from "./styles";

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleToggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container isMenuOpen={menuOpen}>
      <button type="button" onClick={handleToggleMenu}>
        <img src={menuImg} alt="expandir menu" />
      </button>
      <nav>
        <ul>
          <li>
            <a href="">
              <BurguerIcon />
              <span>Hanbúrgueres</span>
            </a>
          </li>

          <li>
            <a href="">
              <PizzaIcon />
              <span>Pizzas</span>
            </a>
          </li>

          <li>
            <a href="">
              <SodaPopIcon />
              <span>Bebidas</span>
            </a>
          </li>

          <li>
            <a href="">
              <IceCreamIcon />
              <span>Sobremesas</span>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
