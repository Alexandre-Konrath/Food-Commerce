import styled, { css } from 'styled-components'
interface ContainerProps {
  isMenuOpen: boolean;
}

export const Container = styled.aside<ContainerProps>`
  ${({ isMenuOpen }) =>
    isMenuOpen ? css`width: 16.3rem;` : css`width: 7.75rem;`
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  padding: 2rem 0;
  transition: width 0.3s;

  background: ${({ theme }) => theme.colors.red};

  button {
    width: 100%;

    background: none;
    border: none;
  }

  nav {
    width: 100%;
    height: 100%;

    flex: 1;

    ul {
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;

      gap: 1.5rem;
    }

    li {
      a {
        width: fit-content; // ficar dentro daquela da largura

        position: relative;
        display: flex;
        align-items: center;

        padding-right: 1.875rem;
        padding-left: 1.875rem;
        gap: 2rem;

        svg {
          width: 4rem;
          height: 4rem;

          transition: fill 0.3s;

          fill: ${({ theme }) => theme.colors.white};
        }

        span {
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;
        }

        &.active { // esse estilo vai ser aplicado ao pai 'a'
          &::after {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);

            background-color: ${({ theme }) => theme.colors.yellow};
            width: 5px;
            height: calc(100% + 10px);
            border-radius: 0 5px 0 5px
          }
          svg {
            fill: ${({ theme }) => theme.colors.yellow};
            fill: ${({ theme }) => theme.colors.yellow};
          }
        }
      }
    }
  }

  @media (max-width: 720px) {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    width: 100%;
    height: 5rem;
    padding: 0 0;
    overflow-y: auto;

    button {
      display: none;
    }

    nav {
      height: 100%;

      ul {
        flex-direction: row;
        align-items: center;
      }

      li {
        a {
          flex-direction: column;
          padding: 0;

          svg {
            width: 3.25rem;
            height: 3.25rem;
          }

          span {
            display: none;
          }

          &.active {
            &::after {
              display: none;
            }
          }
        }
      }
    }
  }
`
