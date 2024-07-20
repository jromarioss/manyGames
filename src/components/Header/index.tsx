

import { HeaderMain } from "./styled";

type HeaderProps = {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderMain>
      <h2>{title}</h2>
    </HeaderMain>
  );
}