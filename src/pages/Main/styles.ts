import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;
  > section { // adiciona o estilo somente pra section imediata, sem ser a que está no componente
    width: 100%;
    height: 100vh;

    overflow-y: auto;

    flex: 1;
    padding: 2rem 1.875rem;

    img {
      width: 10rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 720px) {
      display: flex;
      flex-direction: column;

      padding-bottom: 8rem;

      img {
        align-self: center;
      }
    }
  }
`
