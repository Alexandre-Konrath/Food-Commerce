import styled, { css, keyframes } from "styled-components";

import { SkeletonProps } from ".";

const shimmereffect = keyframes`
  0% {                           // quando for 0%...
    background-position: 0%;
  }
  50% {
    background-position: -50%;
  }
  75% {
    background-position: -125%;
  }
  100% {
    background-position: -100%;
  }
`;

export const SkeletonElement = styled.div<SkeletonProps>` // tipar a div com o SkeletonElement
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gray900} 0%,
    #0a0a0a 40%,
    ${({ theme }) => theme.colors.gray900} 100%
  );
  /*
  90deg == 90°                    <- vai iniciar com essa cor
  0% == iniciar no começo
  40% quaase na metade            <- e dps passa para esta
  100%                            <- e dps voolta para essa cor de 100%
  */
  background-size: 200%;
  border-radius: 4px;

  animation: ${shimmereffect} 1s linear infinite; // fique infinitamente carregando

  ${({ type }) =>
    type === 'title' &&
    css`
      width: 75%;
      height: 32px;
      margin: 0.5rem 0;
    `}

  ${({ type }) =>
    type === 'text' &&
    css`
      width: 100%;
      height: 18px;
      margin: 0.25rem 0;
    `}

  ${({ type }) =>
    type === 'image' &&
    css`
      width: 200px;
      height: 200px;
      margin: 0.25rem 0;
      border-radius: 50%;
    `}

  ${({ type }) =>
    type === 'thumbnail' &&
    css`
      width: 100%;
      height: 200px;
      margin: 0.5rem 0;
      border-radius: 10px;
    `}
`;
