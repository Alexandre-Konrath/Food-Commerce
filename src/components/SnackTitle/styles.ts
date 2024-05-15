import styled from "styled-components";

export const Title = styled.h1`
  display: flex;
  align-items: center;

  text-transform: uppercase;

  gap: 0.5rem;
  margin-bottom: 3rem;
  font-weight: 500;

  font-size: ${({ theme }) => theme.fontSize["4xl"]}; // 2.75 x 16 = 44 === '4xl': rem(40),
  &::before {
    content: '';
    background: ${({ theme }) => theme.colors.yellow};
    width: 35px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 4px;
  }

  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.fontSize["3xl"]}; // 2 x 16 = 32 === '3xl': rem(32),
    justify-content: center;

    &::before {
      display: none;
    }
  }
`;
