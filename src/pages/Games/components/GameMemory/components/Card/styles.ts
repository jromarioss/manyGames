import styled from "styled-components";

export const CardContainer = styled.div`
  perspective: 1000px;
`;

export const CardInner = styled.div<{ isflipped: string }>`
  width: 3.75rem;
  height: 3.75rem;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ isflipped }) => isflipped === "true" ? "rotateY(180deg)" : "rotateY(0deg)"};

  @media(min-width: 768px) {
    width: 6rem;
    height: 6rem;
  }

  @media(min-width: 1280px) {
    width: 5.75rem;
    height: 5.75rem;
  }
`;

const CardBase = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  overflow: hidden;
`;

export const CardFront = styled(CardBase)``;

export const CardBack = styled(CardBase)`
  transform: rotateY(180deg);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
