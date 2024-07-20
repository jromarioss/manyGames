import styled from "styled-components";

export const HeaderMain = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 1.5rem;
  }

  @media(min-width: 768px) {
    h2 {
      font-size: 2.5rem;
    }
  }

  @media(min-width: 1280px) {
    h2 {
      font-size: 3rem;
    }
  }
`;