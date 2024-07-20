import { useEffect, useRef, useState } from "react";

import { GamesProps } from "../../hooks/useGameType/types";

import { SelectContainer } from "./styles";

type SelectProps = {
  items: GamesProps[];
  onSelect: (value: string) => void
}

export const Select = ({ items, onSelect }: SelectProps) => {

  return (
    <SelectContainer  onChange={(event) => onSelect(event.target.value)}>
      <option value="">Selecione um jogo</option>
      {items.map((item) => {
        return <option key={item.id} value={item.game}>{item.title}</option>
      })}
    </SelectContainer>
  );
}