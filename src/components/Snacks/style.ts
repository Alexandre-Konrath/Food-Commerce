import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  gap: 1.75rem;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  .snack {
    position: relative;

    padding: 1.75rem 1.5rem;
    border-radius: 8px;

    background-color: ${({ theme }) => theme.colors.black};

    span {
      width: 2rem;
      height: 2rem;

      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;

      left: -0.5rem;
      top: -0.5rem;
      border-radius: 50%;
      font-weight: 500;
      font-size: 1.125rem;

      background: ${({ theme }) => theme.colors.red};
    }

    h2 {
      text-align: center;

      margin-bottom: 0.75rem;
      font-weight: 700;
      font-size: 1.5rem;
    }

    img {
      width: 100%;
      height: 11.25rem;

      object-fit: cover;

      border-radius: 4px;
      margin-bottom: 0.375rem;
    }

    p {
      font-size: 0.875rem;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      margin-top: .875rem;

      strong {
        font-size: 2rem;
        font-weight: 500;
      }

      button {
        width: 3rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;

        background: ${({ theme }) => theme.colors.red};
        transition: background-color, transform 0.2s;

        :hover{
          background-color: ${({ theme }) => theme.colors.redhover};
          transform: scale(1.1);
          border: 1px solid ${({ theme }) => theme.colors.black};
        }

        svg {
          width: 1.5rem;
          height: 1.5rem;

          stroke: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }
`;
