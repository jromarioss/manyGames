import styled from "styled-components";

export const CardContainer = styled.div`
  perspective: 1000px;
`;

export const CardInner = styled.div<{ isflipped: boolean }>`
  width: 3.75rem;
  height: 3.75rem;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ isflipped }: any) => isflipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

export const CardFront = styled.div`
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

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 0.375rem;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
