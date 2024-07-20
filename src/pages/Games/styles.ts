import styled from "styled-components";

export const MainGames = styled.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media(min-width: 768px) {
    gap: 1.5rem;
  }

  @media(min-width: 1280px) {
    gap: 1rem;
    max-width: 42.5rem;
  }
`;

export const GameSelect = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;

  @media(min-width: 768px) {
    gap: 2rem;
  }
`;

export const Button = styled.button`
  border-radius: .375rem;
  padding: .5rem 1rem;
  border: 1px solid ${props => props.theme["GRAY_300"]};
  color: ${props => props.theme["GRAY_300"]};
  text-decoration: none;
  font-size: 1rem;
  background-color: transparent;
  transition: all ease-in-out 0.3s;

  &:hover {
    transform: scale(1.1);
  }

  @media(min-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.75rem;
    border-radius: .75rem;
  }
`;
