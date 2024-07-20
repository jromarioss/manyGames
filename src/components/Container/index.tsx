import { ReactNode } from "react";

import { ContainerMain } from "./styled";

type ContainerProps = {
  children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <ContainerMain>
      {children}
    </ContainerMain>
  );
}