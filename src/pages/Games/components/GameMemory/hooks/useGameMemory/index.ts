import { useEffect, useState } from "react";

import { GameMemoryProps, GridItemType } from "../../types";
import { gameMemoryData } from "../../../../../../utils";

export const useGameMemory = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [cards, setCards] = useState<GridItemType[]>([]);

  const fetchData = () => {
    const nameFilter = gameMemoryData.filter((item) => item.image);
    const randomNames = [...Array(nameFilter.length).keys()].sort(() => Math.random() - 0.5);
    const setNameOnRandomNames = randomNames.slice(0, 15).map((index) => nameFilter[index]);

    const duplicatedNames = setNameOnRandomNames.concat(setNameOnRandomNames);
    const randomDuplicatedNames = duplicatedNames.sort(() => Math.random() - 0.5);

    const temporaryGrid: any = Array.from({ length: nameFilter.length * 2 }, (_, index) => ({
      item: randomDuplicatedNames[index],
      shown: false,
      alwaysShow: false,
    }));

    setCards(temporaryGrid);
    setPlaying(false);
  }

  const onSetPlaying = (value: boolean) => {
    setPlaying(value);
  }

  const handleShowCard = (index: number) => {

    if (playing && index !== null && shownCount < 2) {
      let temporaryGrid = [...cards];

      if (!temporaryGrid[index].alwaysShow && !temporaryGrid[index].shown) {
        temporaryGrid[index].shown = true;
        setShownCount((state) => state + 1);
      }

      setCards(temporaryGrid);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (shownCount === 2) {
      let cardIsOpen: GridItemType[] = cards.filter((item: GridItemType) => item.shown === true);

      if (cardIsOpen.length === 2) {
        if (cardIsOpen[0].item.name === cardIsOpen[1].item.name) {
          let updatedCards: GridItemType[] = cards.map((item: GridItemType) => ({
            ...item,
            shown: false,
            alwaysShow: item.shown ? true : item.alwaysShow,
          }));
  
          setCards(updatedCards);
          setShownCount(0);
        } else {
          setTimeout(() => {
            let updatedCards: GridItemType[] = cards.map((item: GridItemType) => ({ ...item, shown: false }));
  
            setCards(updatedCards);
            setShownCount(0);
          }, 2000);
  
          setMoveCount(state => state + 1);
        }
      }
    }
  }, [cards, shownCount])

  return {
    cards,
    playing,
    handleShowCard,
    onSetPlaying,
    fetchData,
  } as GameMemoryProps
}