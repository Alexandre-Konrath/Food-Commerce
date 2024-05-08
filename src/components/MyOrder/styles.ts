import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  position: absolute;
  right: 1.8rem;
  bottom: 0.5rem;

  background-color: ${({ theme }) => theme.colors.red};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;

  transition: background-color, transform 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.redhover};
    transform: scale(1.1);
  }

  span:first-child { // primeiro span
    margin-right: 0.25rem;
    font-weight: 500;
    font-size: 1rem;
  }

  svg {
    fill: ${({ theme }) => theme.colors.white}; // color
    width: 2rem;
    height: 2rem;
  }

  span:last-child { // primeiro span
    margin-left: 0%.75rem;
    font-weight: 500;
    margin-left: 10px;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media (max-width: 720px) {
    top: 0.5rem;
    bottom: initial;
    padding: 5px 6px;

    span:first-child {
      display: none;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
