import styled from "styled-components";

export const Container = styled.header`

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;

  img {
    width: 8rem;
  }

  > div {
    display: flex;
    align-items: center;

    border: none;
    background: none;

    gap: 0.5rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: right;

      h3 {
        margin-bottom: 0.125rem;
        font-weight: 500;

        color: ${({ theme }) => theme.colors.white};
      }

      span {
        color: ${({ theme }) => theme.colors.yellow};

        strong {
          font-weight: 500;
          font-size: 1.25rem;
        }
      }
    }

    svg {
      width: 2.875rem;
      height: 2.875rem;

      flex-shrink: 0;

      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;
