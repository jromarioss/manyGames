import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  gap: 2rem;
  border-radius: 0.25rem;
  
  @media(min-width: 1280px) {
    gap: 1rem;
  }
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Main = styled.div`
  width: 100%;
  display: grid;
  gap: .5rem;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;

  @media(min-width: 768px) {
    gap: 1rem;
  }

  @media(min-width: 1280px) {
    width: 42.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: .75rem;
    justify-content: space-between;
  }
`;

type ButtonTheme = {
  bc: "red" | "green"
}

export const Button = styled.button<ButtonTheme>`
  border-radius: .375rem;
  padding: .5rem 1rem;
  border: 1px solid ${props => props.bc === "red" ? props.theme["RED_600"] : props.theme["GREEN_600"]};
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

  @media(min-width: 1280px) {
    padding: .75rem 1.5rem;
    font-size: 1.5rem;
  }
`;
