import styled from "styled-components";

export const Container = styled.div`
  width: 100;
  max-width: 58.75rem;
  padding: 2rem;
  margin: 0 auto;
`;

export const Inner = styled.main`
  background: ${({ theme }) => theme.colors.black};
  padding: 2rem 2.5rem;
  border-radius: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  h4 {
    margin: 2.5rem 0 2rem;

    &:first-child {
      margin-top: 0;
    }
  }

  .grouped {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
  }

  .field {
    flex-grow: 1;
    margin-bottom: 1rem;
  }
  .error {
    color: ${({ theme }) => theme.colors.error};
  }

  .texto {
    display: flex;
    flex-direction: row;

    p {
      margin-left: 90px;
      width: 7rem;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .zipCode {
    width: 120px !important;
  }

  .btn-cep {
    display: flex;
    flex-direction: row;

    width: 1rem;
  }

  .btn-pesquisar {
    width: 1px;
    height: 1px;

    position: relative;
    top: 6px;
    left: -35px;

    background-color: transparent;

    ::before {
      content: "Pesquisar CEP";
    width: 7rem;
    height: 1.2rem;

    position: absolute;

    opacity: 0; /* Começa com a mensagem invisível */
    top: -6px;
    left: 50px;
    padding: 12px 10px;
    font-size: 1rem;
    border-radius: 4px;
    transition: opacity 0.5s ease;

    background-color: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.white};
  }
    :hover::before {
    opacity: 1;
  }

  }
    svg {
      width: 1.8rem;
      height: 1.8rem;
      color: ${({ theme }) => theme.colors.secondary100};

      :hover {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }


  label {
    display: block; // deixa o campo de input abaixo do texto
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.5rem;
  }

  input[type='email'],
  input[type='number'],
  input[type='tel'],
  input[type='text'],
  select {
    flex-grow: 1;
    background-color: ${({ theme }) => theme.colors.gray800};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 0.2s;
    height: 42px;
    width: 100%;
    margin: 0 0 1rem;
    padding: 0.7rem;
  }

  @media (max-width: 540px) {
    .grouped {
      flex-direction: column;
    }
  }
`;
