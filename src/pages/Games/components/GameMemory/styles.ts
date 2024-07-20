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
  gap: 0.5rem;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-content: center;
`;

