import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 1.5rem;

  button {
    width: 100%;
    max-width: 16.5rem;
    min-height: 4rem;

    border: none;
    text-transform: uppercase;


    border-radius: 8px;
    font-weight: 700;
    font-size: 1.25rem;

    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.red};

    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.redhover};
    }
  }

  span {
    font-weight: 500;

    text-transform: uppercase;

    strong {
      margin-left: 0.75rem;
      font-weight: 700;
      font-size: 2.25rem;
    }
  }

  @media (max-width: 540px) {
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;

    button {
      max-width: 100%;
    }

    span {
      margin-bottom: 2rem;

      strong {
        font-size: 2.75rem;
      }
    }
  }
`;
