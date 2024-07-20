import { useEffect, useState } from "react";

import { GameMemoryProps, GridItemType } from "../../types";
import { gameMemoryData } from "@/utils";
import { gameMemoryDataProps } from "@/utils/gameMemoryData";

export const useGameMemory = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(false);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [cards, setCards] = useState<GridItemType[]>([]);

  const timeLoad: number = 500;
  const timeCardFlip: number = 1500;

  const fetchData = () => {
    const nameFilter: gameMemoryDataProps[] = gameMemoryData.filter((item) => item.image);
    const randomNames: number[] = [...Array(nameFilter.length).keys()].sort(() => Math.random() - 0.5);
    const setNameOnRandomNames: gameMemoryDataProps[] = randomNames.slice(0, 15).map((index) => nameFilter[index]);

    const duplicatedNames: gameMemoryDataProps[] = setNameOnRandomNames.concat(setNameOnRandomNames);
      const randomDuplicatedNames: gameMemoryDataProps[] = duplicatedNames.sort(() => Math.random() - 0.5);

    const temporaryGrid: GridItemType[] = Array.from({ length: nameFilter.length * 2 }, (_, index) => ({
      item: randomDuplicatedNames[index],
      shown: false,
      alwaysShow: false,
    }));

    setCards(temporaryGrid);
    setPlaying(false);
    setFinished(false);
    setLoadForSomeSeconds(timeLoad);
  }

  const handleResetGame = () => {
    const allItemShown: boolean = cards.every((item: GridItemType) => item.alwaysShow === false);

    if (allItemShown) {
      return;
    }

    fetchData();
  }

  const setLoadForSomeSeconds = (time: number) => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, time);
  }

  const onSetPlaying = (value: boolean) => {
    setPlaying(value);
  }

  const handleShowCard = (index: number) => {

    if (playing && index !== null && shownCount < 2) {
      let temporaryGrid: GridItemType[] = [...cards];

      if (!temporaryGrid[index].alwaysShow && !temporaryGrid[index].shown) {
        temporaryGrid[index].shown = true;
        setShownCount((state) => state + 1);
      }

      setCards(temporaryGrid);
    }
  };

  const verifyCards = () => {
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
          }, timeCardFlip);
  
          setMoveCount(state => state + 1);
        }
      }
    }
  }

  const verifyIfGameFinished = () => {
    const allItemShown: boolean = cards.every((item: GridItemType) => item.alwaysShow === true);

    if (moveCount > 0 && allItemShown) {
      setPlaying(false);
      setFinished(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    verifyCards();
  }, [cards, shownCount]);

  useEffect(() => {
    verifyIfGameFinished();
  }, [cards, setPlaying]);

  return {
    cards,
    playing,
    finished,
    load,
    handleShowCard,
    onSetPlaying,
    handleResetGame,
  } as GameMemoryProps
}