import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderHome = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: center;

  h1 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

  @media(min-width: 768px) {
    gap: 1.5rem;

    h1 {
      font-size: 2.75rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media(min-width: 1280px) {
    width: 42.5rem;
  }
`;

export const MainHome = styled.main`
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;

  @media(min-width: 768px) {
    gap: 1.5rem;
  }

  @media(min-width: 1280px) {
    width: 42.5rem;
  }
`;

export const Links = styled(Link)`
  padding: .5rem 2rem;
  border-radius: 0.375rem;
  border: 1px solid ${props => props.theme.GRAY_200};
  text-decoration: none;
  color: ${props => props.theme.GRAY_200};
  font-weight: 600;
  font-size: 1.125rem;
  transition: all ease-in-out 0.5s;

  &:hover {
    transform: scale(1.2);
  }

  @media(min-width: 768px) {
    font-size: 2rem;
    padding: 1rem 2.75rem;
  }
`;