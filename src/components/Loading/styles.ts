import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const LoadContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 1.125rem;
    animation: ${blink} 500ms infinite;
  }

  @media(min-width: 768px) {
    p {
      font-size: 2rem;
    }
  }
`;