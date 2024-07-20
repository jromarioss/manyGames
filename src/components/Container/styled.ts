import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  @media(min-width: 768px) {
    padding: 2rem;
  }

  @media(min-width: 1280px) {
    padding: 1rem;
  }
`;