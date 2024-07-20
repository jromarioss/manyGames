import { useGameTypeProps } from "../../hooks/useGameType/types";
import { Games } from "./allGames";

import { GamePlayContainer } from "./styles";

export const GamePlay = ({ ...props }: useGameTypeProps) => {

  const Game = () => {
    return Games[props.gameSelected];
  }

  return (
    <GamePlayContainer>
      {Game()}
    </GamePlayContainer>
  )
}