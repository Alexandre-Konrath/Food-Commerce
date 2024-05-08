import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 1.25rem 0.5rem;

  h2 {
    max-width: 500px;
    font-size: 2rem;
  }

  img {
    width: 100%;
    max-width: 32rem;
  }

  .glow-on-hover {
    width: 220px;
    height: 50px;
    border: none;
    outline: none;
    color: #fff;
    background: ${({ theme }) => theme.colors.red};
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
}

.glow-on-hover:before {
    content: '';
    background: linear-gradient(45deg, #E03131, #E8590C, #FCC419, #860e0e, #FE8C00, #F83600);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
}

.glow-on-hover:active {
    color: ${({ theme }) => theme.colors.white};
}

.glow-on-hover:active:after {
    background: transparent;
}

.glow-on-hover:hover:before {
    opacity: 1;
}

.glow-on-hover:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.red};
    left: 0;
    top: 0;
    border-radius: 10px;
}

@keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
}
`

export const Button = styled(Link)`
  width: 100%;
  max-width: 13rem;
  height: 3rem;

  display: block;

  border-radius: 8px;
  margin: 1rem 0 3rem;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 3rem;

  background: ${({ theme }) => theme.colors.red};
  transition: background-color, transform 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.redhover};
    transform: scale(1.1);
  }

`
