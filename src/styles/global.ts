import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${(props) => props.theme.colors.gray900};
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fontFamily.sans};
    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  select,
  textarea,
  button {
    font: 400 1rem 'Roboto', Helvetica, Arial, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    border: none;
  }

  ul,
  li {
    list-style: none;
  }

  ::-webkit-scrollbar {
    width: 8px; /* Largura da barra de rolagem */
  }

  ::-webkit-scrollbar-track {
      background: transparent; /* Cor de fundo da barra de rolagem */
  }

  ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.yellow}; /* Cor do "thumb" (alça) da barra de rolagem */
      border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.yellow}; /* Cor do "thumb" (alça) da barra de rolagem ao passar o mouse */
  }

  /* Cor da barra de rolagem ao ser arrastada */
  ::-webkit-scrollbar-thumb:active {
    background: ${({ theme }) => theme.colors.yellow};
  }
`
