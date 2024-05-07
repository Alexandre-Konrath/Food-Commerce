import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:last-child { // emula os outros componentes na hora do carregamento da pagina
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 0.75rem;

    > div:last-child {  // emula o botao
      width: 3rem;
      height: 3rem;
    }
  }
`;
