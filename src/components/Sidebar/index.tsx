import { useState } from "react";
import { NavLink } from 'react-router-dom'

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
            <NavLink to='/'>
              <BurguerIcon />
              <span>Hamburguer</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='pizzas'>
              <PizzaIcon />
              <span>Pizzas</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='drinks'>
              <SodaPopIcon />
              <span>Drinks</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='ice-creams'>
              <IceCreamIcon />
              <span>Ice Cream</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
