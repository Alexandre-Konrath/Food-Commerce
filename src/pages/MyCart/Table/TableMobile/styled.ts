import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  .order-item {
    display: grid;
    grid-template-columns: 250px 1fr;

    padding: 1.75rem 1.5rem;
    border-radius: 4px;
    gap: 1.5rem;

    background: ${({ theme }) => theme.colors.black};

    > div:first-child {
      img {
        width: 100%;
        height: 100%;

        object-fit: cover;

        border-radius: 4px;
      }
    }

    > div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h4 {
        margin-bottom: 0.5rem;
        font-weight: 400;
        font-size: 1.75rem;
      }

      > span {
        font-weight: 700;
        font-size: 2rem;
      }

      div {
        display: flex;
        align-items: center;

        gap: 2rem;
        margin: 0.875rem 0;

        div {
          display: flex;
          align-items: center;

          flex-shrink: 0;
          gap: 0.5rem;

          button {
            display: flex;
            align-items: center;
            justify-content: center;

            background: none;
            border: none;

            flex: 0;

            img {
              width: 2rem;
            }
          }

          span {
            display: block;
            background: transparent;

            padding: 0.125rem 0.75rem;
            border-radius: 4px;
            font-weight: 500;
            font-size: 1.75rem;

            color: ${({ theme }) => theme.colors.white};
          }
        }

        button {
          display: flex;
          align-items: center;
          justify-content: center;

          background: none;
          border: none;

          flex-shrink: 0;

          svg {
            width: 2rem;
            height: 2rem;

            fill: ${({ theme }) => theme.colors.yellow};
          }
        }
      }

      h5 {
        span {
          display: block;

          font-size: 1.75rem;
          font-weight: 400;
        }

        font-weight: 700;
        font-size: 2.5rem;
      }
    }

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
      padding: 1rem;

      > div:first-child {
        height: 10rem;
      }

      > div:last-child {
        div {
          gap: 2rem;
        }

        h5 {
          span {
            font-size: 1.5rem;
          }

          font-size: 2.25rem;
        }
      }
    }
  }
`
