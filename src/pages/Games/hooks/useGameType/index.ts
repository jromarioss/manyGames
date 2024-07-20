import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { gamesType } from "../../../../utils";

import { useGameTypeProps, GamesProps } from "./types";

export function useGameType() {
  const navigate = useNavigate();

  const [games, setGames] = useState<GamesProps[]>([]);
  const [gameSelected, setGameSelected] = useState<number>(0);
  const [showGame, setShowGame] = useState<boolean>(false);

  const fetchGames = () => {
    setGames(gamesType);
  }

  const onSetGameSelected = (value: string) => {
    setShowGame(true);
    setGameSelected(Number(value));
  }

  const onCloseGame = () => {
    setShowGame(false);
    setGameSelected(0);
    navigate("/");
  }

  useEffect(() => {
    fetchGames();
  }, [])

  return {
    games,
    showGame,
    gameSelected,
    onSetGameSelected,
    onCloseGame,
  } as useGameTypeProps
}