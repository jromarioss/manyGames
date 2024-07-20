import styled from "styled-components";

export const SelectContainer = styled.select`
  width: 100%;
  padding: 0.5rem;
  font-size: 1.125rem;
  color: ${props => props.theme.GRAY_200};
  border-radius: .375rem;
  background-color: transparent;
  border: 1px solid ${props => props.theme.GRAY_300};

  option {
    color: ${props => props.theme.GRAY_800};
    font-size: 1rem;
  }

  @media(min-width: 768px) {
    font-size: 1.75rem;
    padding: 1rem;
    border-radius: .75rem;

    option {
      font-size: 1rem;
    }
  }

  @media(min-width: 1280px) {
    padding: .75rem;
    font-size: 1.5rem;
  }
`;